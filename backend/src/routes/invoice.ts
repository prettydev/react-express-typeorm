import { Router } from "express";
import InvoiceController from "../controllers/InvoiceController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";

const router = Router();

//Get all items
// router.get("/", [checkJwt, checkRole(["ADMIN"])], InvoiceController.listAll);
router.get("/", InvoiceController.listAll);

// Get one item
router.get(
  "/:id([0-9]+)",
  [checkJwt, checkRole(["ADMIN"])],
  InvoiceController.getOneById
);

//Create a new item
router.post("/", [checkJwt, checkRole(["ADMIN"])], InvoiceController.newItem);

//Edit one item
router.patch(
  "/:id([0-9]+)",
  [checkJwt, checkRole(["ADMIN"])],
  InvoiceController.editItem
);

//Delete one user
router.delete(
  "/:id([0-9]+)",
  [checkJwt, checkRole(["ADMIN"])],
  InvoiceController.deleteItem
);

export default router;
