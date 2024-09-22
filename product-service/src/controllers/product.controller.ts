import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductService } from '@/services/product.service';
import { Product } from '@/models/product.model';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() product: Product) {
    this.productService.create(product);
  }

  @Get()
  findAll(): Product[] {
    return this.productService.findAll();
  }
}
