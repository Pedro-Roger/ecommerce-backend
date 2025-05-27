/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Prisma, Product } from 'generated/prisma';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async createProduct(data: Prisma.ProductCreateInput): Promise<Product> {
    return this.prisma.product.create({ data });
  }

  async findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  async findOne(id: number): Promise<{ name: string; id: number; description: string; price: number; image: string; stock: number; createdAt: Date; } | null> {
    return this.prisma.product.findUnique({ where: { id } });
  }

  async update(id: number, data: Prisma.ProductUpdateInput): Promise<Product> {
    return this.prisma.product.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Product> {
    return this.prisma.product.delete({ where: { id } });
  }
}
