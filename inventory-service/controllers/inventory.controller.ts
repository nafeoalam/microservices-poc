import { Request, Response } from "express";
import Inventory from "../models/inventory.model";

class InventoryController {
  static async getAllItems(req: Request, res: Response) {
    try {
      const items = await Inventory.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  static async addItem(req: Request, res: Response) {
    const item = new Inventory(req.body);
    try {
      const savedItem = await item.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async updateItem(req: Request, res: Response) {
    try {
      console.log(req.body, "updateItem");
      // const updatedItem = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
      // if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
      res.status(200).json({ message: "Item updated" });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async deleteItem(req: Request, res: Response) {
    try {
      const deletedItem = await Inventory.findByIdAndDelete(req.params.id);
      if (!deletedItem)
        return res.status(404).json({ message: "Item not found" });
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default InventoryController;
