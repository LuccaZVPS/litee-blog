require("express-async-errors");
import express, { json } from "express";
import { errorHandler } from "@litee-blog/shared/infra/express";
import { accountRoutes } from "./routes/account.routes";
import cookieSession from "cookie-session";
const app = express();

app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);
app.use("/api/auth", accountRoutes);
app.use(errorHandler);
export { app };
