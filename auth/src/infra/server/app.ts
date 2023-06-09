import express, { json } from "express";
import { accountRoutes } from "./routes/account.routes";
const app = express();
app.use(json());
app.use("/api/auth", accountRoutes);
export { app };
