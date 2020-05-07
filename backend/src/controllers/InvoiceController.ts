import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { validate } from "class-validator";

import { Invoice } from "../entity/Invoice";

class InvoiceController {
  static listAll = async (req: Request, res: Response) => {
    //Get invoices from database
    const itemRepository = getRepository(Invoice);
    const items = await itemRepository.find({
      select: ["id", "description", "role"], //We dont want to send the passwords on response
    });

    //Send the items object
    res.send(items);
  };

  static getOneById = async (req: Request, res: Response) => {
    //Get the ID from the url
    const id: number = parseInt(req.params.id);

    //Get the item from database
    const itemRepository = getRepository(Invoice);
    try {
      const item = await itemRepository.findOneOrFail(id, {
        select: ["id", "description", "role"], //We dont want to send the password on response
      });
      res.send(item);
    } catch (error) {
      res.status(404).send("Item not found");
    }
  };

  static newItem = async (req: Request, res: Response) => {
    //Get parameters from the body
    let { description, role } = req.body;
    let item = new Invoice();
    item.description = description;
    item.role = role;

    //Validade if the parameters are ok
    const errors = await validate(item);
    if (errors.length > 0) {
      res.status(400).send(errors);
      return;
    }

    //Try to save. If fails, the id is already in use
    const itemRepository = getRepository(Invoice);
    try {
      await itemRepository.save(item);
    } catch (e) {
      res.status(409).send("id already in use");
      return;
    }

    //If all ok, send 201 response
    res.status(201).send("Item created");
  };

  static editItem = async (req: Request, res: Response) => {
    //Get the ID from the url
    const id = req.params.id;

    //Get values from the body
    const { description, role } = req.body;

    //Try to find invoice on database
    const itemRepository = getRepository(Invoice);
    let item;
    try {
      item = await itemRepository.findOneOrFail(id);
    } catch (error) {
      //If not found, send a 404 response
      res.status(404).send("Item not found");
      return;
    }

    //Validate the new values on model
    item.description = description;
    item.role = role;
    const errors = await validate(item);
    if (errors.length > 0) {
      res.status(400).send(errors);
      return;
    }

    //Try to safe, if fails, that means id already in use
    try {
      await itemRepository.save(item);
    } catch (e) {
      res.status(409).send("id already in use");
      return;
    }
    //After all send a 204 (no content, but accepted) response
    res.status(204).send();
  };

  static deleteItem = async (req: Request, res: Response) => {
    //Get the ID from the url
    const id = req.params.id;

    const itemRepository = getRepository(Invoice);
    let item: Invoice;
    try {
      item = await itemRepository.findOneOrFail(id);
    } catch (error) {
      res.status(404).send("Item not found");
      return;
    }
    itemRepository.delete(id);

    //After all send a 204 (no content, but accepted) response
    res.status(204).send();
  };
}

export default InvoiceController;
