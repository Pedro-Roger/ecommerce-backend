// create-product.dto.ts
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsString()
  @IsNotEmpty() 
  image: string;

  @IsNumber()
  @IsPositive()
  stock: number;
}
