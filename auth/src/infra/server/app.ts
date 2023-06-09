require("express-async-errors");
import express, { json } from "express";
import { errorHandler } from "@litee-blog/shared/infra/express";
import { accountRoutes } from "./routes/account.routes";
const app = express();
app.use(json());
app.use("/api/auth", accountRoutes);
app.use(errorHandler);
export { app };
