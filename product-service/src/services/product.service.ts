import { Injectable } from '@nestjs/common';
import { Product } from '@/models/product.model';
import { ProductStatus } from '@/enums/product-status.enum';

@Injectable()
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Sample Product 1',
      price: 10.99,
      status: ProductStatus.Available,
    },
    {
      id: 2,
      name: 'Sample Product 2',
      price: 15.49,
      status: ProductStatus.Available,
    },
    {
      id: 3,
      name: 'Sample Product 3',
      price: 20.0,
      status: ProductStatus.Available,
    },
  ];

  create(product: Product) {
    this.products.push(product);
  }

  findAll(): Product[] {
    return this.products;
  }
}
