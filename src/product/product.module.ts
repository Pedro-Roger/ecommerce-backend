import { PrismaModule } from 'prisma/prisma.module';
import { ProductService } from './product.service';
import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';

@Module({
  imports: [PrismaModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
