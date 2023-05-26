import { Injectable } from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { Product, ProductDocument } from './schema/product.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>
  ) {}

  async createProduct(
    createProductDto: CreateProductDto
  ): Promise<ProductDocument> {
    const product = new this.productModel(createProductDto)
    return product.save()
  }

  async findAllProducts(): Promise<ProductDocument[]> {
    return this.productModel.find()
  }

  findOneProduct(id: string) {
    return this.productModel.findById(id)
  }

  async updateProduct(
    id: string,
    updateProductDto: UpdateProductDto
  ): Promise<ProductDocument> {
    return this.productModel.findByIdAndUpdate(id, updateProductDto)
  }

  async removeProduct(id: string) {
    return this.productModel.findByIdAndRemove(id)
  }
}
