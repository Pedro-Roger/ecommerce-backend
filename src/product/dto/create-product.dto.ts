import { isNotEmpty, isNumber, isPositive, isString } from 'class-validator';
export class CreateProductDto {
  @isString()
  @isNotEmpty()
  name: string;

  @isString()
  description: string;

  @isNumber()
  price: number;

  @isString()
  image: string;

  @isPositive()
  @isNumber()
  stock: number;
}
