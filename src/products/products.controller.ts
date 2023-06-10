import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { ProductsService } from './products.service'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  createOneProduct(@Body() createProductDto: CreateProductDto) {
    return this.productsService.createProduct(createProductDto)
  }

  @Post('csv')
  createMultipleProduct(@Body() createProductsDto: CreateProductDto[]) {
    return this.productsService.createMultipleProducts(createProductsDto)
  }

  @Get()
  findAll() {
    return this.productsService.findAllProducts()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOneProduct(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.updateProduct(id, updateProductDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.removeProduct(id)
  }
}
