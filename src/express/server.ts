import * as express from "express";
import { webLogger } from "../common/log";
import { getInstanceManager } from "../discord/InstanceManager";

export function startExpressServer(): void {
  const port = process.env.EXPRESS_PORT;
  const app = express();

  app.set("view engine", "ejs");

  app.get("/:id", (req, res) => {
    const { id } = req.params;
    const instance = getInstanceManager().getInstance(id);
    if (instance) {
      res.render("instance", { instance });
    } else {
      res.send("No instance found for this id.");
    }
  });

  app.listen(port, () => {
    webLogger.info(`Web Server listening on port ${port}`);
  });
}
