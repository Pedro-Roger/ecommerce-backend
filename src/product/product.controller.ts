/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.createProduct(createProductDto);
  }
  @Get()
  findAll() {
    return this.productService.findAll();
  }
  @Get()
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productService.findOne(id);
  }
  @Put()
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.update(id, updateProductDto);
  }
  @Delete()
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productService.remove(id);
  }
}
