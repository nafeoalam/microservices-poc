import { Module } from '@nestjs/common';
import { ProductController } from '@/controllers/product.controller';
import { ProductService } from '@/services/product.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService], // Added ProductService
})
export class ProductModule {}
