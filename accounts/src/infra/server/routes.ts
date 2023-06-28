import {
  adaptRoute,
  authorizedMiddleware,
  fileMiddleware,
  validateBodyMiddleware,
} from "@litee-blog/shared/infra/express";
import { Router } from "express";
import { changePictureControllerFactory } from "../../main/factories/controllers/change-picture-controller-factory";
import { resolve } from "path";
import { ChangeNameDTO } from "../../presentation/DTOs/change-name-dto";
import { changeNameControllerFactory } from "../../main/factories/controllers/change-name-controller-factory";
import { SignUpDTO } from "../../presentation/DTOs/signup-dto";
import { makeSignUpController } from "../../main/factories/controllers/signup-controller-factory";
import { VerifyAccountDTO } from "../../presentation/DTOs/verify-account-dto";
import { makeVerifyAccountController } from "../../main/factories/controllers/verify-account-controller-factory";
const ROOT_DIRECTORY = resolve(__dirname, "../../../");
const router = Router();

router.post(
  "/",
  validateBodyMiddleware(SignUpDTO),
  adaptRoute(makeSignUpController())
);
router.put(
  "/verify/:id/:secret",
  validateBodyMiddleware(VerifyAccountDTO),
  adaptRoute(makeVerifyAccountController())
);
router.put(
  "/change-picture",
  authorizedMiddleware(),
  fileMiddleware({
    allowedExtensions: ["png", "jpeg", "jpg"],
    limit: 5242880,
    dest: ROOT_DIRECTORY + "/uploads",
    tmpFolder: ROOT_DIRECTORY + "/tmp",
  }),
  adaptRoute(changePictureControllerFactory())
);
router.put(
  "/change-name",
  authorizedMiddleware(),
  validateBodyMiddleware(ChangeNameDTO),
  adaptRoute(changeNameControllerFactory())
);
export { router };
