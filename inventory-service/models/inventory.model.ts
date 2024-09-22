import mongoose, { Document, Schema } from 'mongoose';

export interface IInventory extends Document {
  name: string;
  quantity: number;
  price: number;
}

const InventorySchema: Schema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const Inventory = mongoose.model<IInventory>('Inventory', InventorySchema);

export default Inventory;
