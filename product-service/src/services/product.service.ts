import { Injectable } from '@nestjs/common';
import { Product } from '@/models/product.model';

@Injectable()
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Sample Product 1', price: 10.99 }, // {{ edit_1 }}
    { id: 2, name: 'Sample Product 2', price: 15.49 }, // {{ edit_1 }}
    { id: 3, name: 'Sample Product 3', price: 20.00 }  // {{ edit_1 }}
  ];

  create(product: Product) {
    this.products.push(product);
  }

  findAll(): Product[] {
    return this.products;
  }
}
