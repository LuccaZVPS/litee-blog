import { Request, Response } from "express";
import { IController } from "../../presentation/protocols";
export const adaptRoute = (controller: IController) => {
  return async (req: Request, res: Response) => {
    const request = {
      ...(req.body || {}),
      ...(req.params || {}),
      accountId: req.accountId,
      file: req.file || {},
      validationErrors: req.validationErrors,
    };
    const httpResponse = await controller.handle(request);
    httpResponse.cookies?.forEach((c) => {
      req.session = {
        ...req.session,
        [c.name]: c.value,
      };
    });
    if (httpResponse.file) {
      return res.status(httpResponse.status).sendFile(httpResponse.file!);
    }
    res.status(httpResponse.status).json(httpResponse.body);
  };
};
