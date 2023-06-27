import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Types } from 'mongoose'
import { ShoppingCartDocument } from './schema/shopping-cart.schema'
import { ProductsService } from 'src/products/products.service'
import { Product } from 'src/products/schema/product.schema'

@Injectable()
export class ShoppingCartService {
  constructor(
    @InjectModel('ShoppingCart')
    private readonly shoppingCartModel: Model<ShoppingCartDocument>,
    private readonly productsService: ProductsService
  ) {}

  async findOrCreateShoppingCart(
    userId: string
  ): Promise<ShoppingCartDocument> {
    let shoppingCart = await this.shoppingCartModel.findOne({ user: userId })

    if (!shoppingCart) {
      shoppingCart = new this.shoppingCartModel({ user: userId, products: [] })
      await shoppingCart.save()
    }

    return shoppingCart
  }

  async addToCart(
    userId: string,
    productId: string
  ): Promise<ShoppingCartDocument> {
    const shoppingCart = await this.findOrCreateShoppingCart(userId)

    // const existingProduct = shoppingCart.products.find(
    //   (product) => product.toString() === product.id
    // )
    const product = await this.productsService.findOneProduct(productId)
    console.log(product)
    shoppingCart.products.push(product)

    await shoppingCart.save()
    return shoppingCart
  }

  async getAllCartProductsByUser(userId: string): Promise<any> {
    const shoppingCart = await this.shoppingCartModel.findOne({ user: userId })
    if (shoppingCart) {
      return shoppingCart.populate('products')
    }
    return []
  }

  async getAllCartProductsPrice(userId: string): Promise<number> {
    const products = await this.getAllCartProductsByUser(userId)
    const price = products.products.reduce(
      (accumulator: any, product: Product) => accumulator + product.price,
      0
    )
    return price
  }

  async clearShoppingCart(userId: string) {
    return this.shoppingCartModel.deleteOne({ user: userId })
  }
}
