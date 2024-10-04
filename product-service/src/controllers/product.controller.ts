import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProductService } from '@/services/product.service';
import { Product } from '@/models/product.model';

@Controller('products') // Using Decorator
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

  @Get(':id')
  findById<T>(@Param('id') id: number): T { // Use of Generics
    return this.productService.findById<T>(id);
  }
}
