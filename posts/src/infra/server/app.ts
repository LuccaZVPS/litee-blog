import express, { json } from "express";
require("express-async-errors");
import cookieParser from "cookie-parser";
import { router } from "./routes/post-routes";
import { errorHandler } from "@litee-blog/shared/infra/express";
import { config } from "dotenv";
import cookieSession from "cookie-session";
config();
const app = express();
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
    sameSite: true,
  })
);
app.use(cookieParser());
app.use("/api/posts", router);
app.use(errorHandler);
export { app };
