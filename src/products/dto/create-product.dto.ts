import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  description: string

  @IsNumber()
  @IsNotEmpty()
  price: number

  @IsString()
  imageUrl: string

  @IsBoolean()
  isInStock: boolean
}
