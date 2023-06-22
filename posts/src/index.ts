import { PrismaClient } from "@prisma/client";
import { app } from "./infra/server/app";
export const prisma = new PrismaClient();
const startup = async () => {
  app.listen(process.env.PORT || 3000);
  console.log("Server running!");
};
startup();
