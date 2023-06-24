import { NextFunction, Request, Response } from "express";
import multer, { MulterError } from "multer";
import { AnyHttpError, BadRequestError } from "../../presentation/errors";
import fs from "fs";
class FileMiddleware {
  tmpFolder: string;
  dest: string;
  limit: number;
  allowedExtensions: string[];
  multerMiddleware: any;
  customName?: (req: Request) => string;
  constructor(props: props) {
    this.tmpFolder = props.tmpFolder;
    this.dest = props.dest;
    this.limit = props.limit;
    this.allowedExtensions = props.allowedExtensions;
    this.customName = props.customName;
    this.multerMiddleware = multer({
      storage: multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, props.tmpFolder);
        },
        filename: function (req, file, cb) {
          const uniqueSuffix =
            Date.now() + "-" + Math.round(Math.random() * 1e9);
          let filename = file.fieldname + "-" + uniqueSuffix;
          cb(null, filename);
        },
      }),
      limits: { fileSize: this.limit },
    }).single("file");
  }
  async handle(req: Request, res: Response, next: NextFunction) {
    const multer = () =>
      new Promise((resolve, reject) => {
        this.multerMiddleware(req, res, function (err: Error | MulterError) {
          resolve(err);
        });
      });
    const multerErrors = (await multer()) as any;
    if (multerErrors?.code === "LIMIT_FILE_SIZE") {
      throw new AnyHttpError(413, "File too large");
    }
    if (multerErrors) {
      throw new Error(multerErrors);
    }
    if (!req.file) {
      throw new BadRequestError([{ message: "File not provided" }]);
    }
    const fileStream = fs.createReadStream(req.file?.path as any);
    await (async () => {
      const { fileTypeFromStream } = await (eval(
        'import("file-type")'
      ) as Promise<typeof import("file-type")>);
      const type = await fileTypeFromStream(fileStream);
      if (!type) {
        throw new Error("File type faild to get file data");
      }
      if (!this.allowedExtensions.includes(type.ext)) {
        fs.unlink(req.file?.path as any, () => {});
        throw new BadRequestError([{ message: "Invalid file extension" }]);
      }
      let fileName = this.dest + "/" + req.file?.filename + `.${type.ext}`;
      if (this.customName) {
        fileName = this.dest + "/" + this.customName(req) + `.${type.ext}`;
      }
      fs.renameSync(req.file?.path!, fileName);
      //@ts-ignore
      req.file.filename = fileName;
      next();
    })();
  }
}

interface props {
  tmpFolder: string;
  dest: string;
  limit: number;
  allowedExtensions: string[];
  customName?: (req: Request) => string;
}
export const fileMiddleware = (props: props) => {
  const middleware = new FileMiddleware(props);
  return middleware.handle.bind(middleware);
};
