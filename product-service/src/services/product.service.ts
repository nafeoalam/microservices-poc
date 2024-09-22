import { Injectable } from '@nestjs/common';
import { Product } from '@/models/product.model';

@Injectable()
export class ProductService {
  private products: Product[] = [];

  create(product: Product) {
    this.products.push(product);
  }

  findAll(): Product[] {
    return this.products;
  }
}
