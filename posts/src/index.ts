import { app } from "./infra/server/app";

const startup = async () => {
  app.listen(process.env.PORT || 3000);
  console.log("Server running!");
};
startup();
