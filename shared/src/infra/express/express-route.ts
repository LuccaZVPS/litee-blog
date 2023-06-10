import { Request, Response } from "express";
import { IController } from "../../presentation/protocols";

export const adaptRoute = (controller: IController) => {
  return async (req: Request, res: Response) => {
    const request = {
      ...(req.body || {}),
      ...(req.params || {}),
      userId: req.userId,
    };
    const httpResponse = await controller.handle(request);
    httpResponse.cookies?.forEach((c) => {
      res.set(c.name, c.value);
    });
    res.status(httpResponse.status).json(httpResponse.body);
  };
};
