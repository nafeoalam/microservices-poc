import { ProductStatus } from "@/enums/product-status.enum";

export class Product {
  id: number;
  name: string;
  price: number;
  status: ProductStatus;
  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.status = ProductStatus.Available;
  }
}
