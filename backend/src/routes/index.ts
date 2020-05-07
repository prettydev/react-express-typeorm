import { Router, Request, Response } from "express";
import auth from "./auth";
import user from "./user";
import invoice from "./invoice";

const routes = Router();

routes.use("/auth", auth);
routes.use("/user", user);
routes.use("/invoice", invoice);

export default routes;
