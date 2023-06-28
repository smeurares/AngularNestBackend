import { Controller, Post, Param, Delete, Get } from '@nestjs/common'
import { ShoppingCartService } from './shopping-cart.service'

@Controller('shopping-cart')
export class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  @Post(':userId/add/:productId')
  async addToCart(
    @Param('userId') userId: string,
    @Param('productId') productId: string
  ) {
    const shoppingCart = await this.shoppingCartService.addToCart(
      userId,
      productId
    )
    return { shoppingCart }
  }

  @Delete(':userId')
  async clearShoppingCart(@Param('userId') userId: string) {
    return this.shoppingCartService.clearShoppingCart(userId)
  }

  @Delete(':userId/remove/:productId')
  async removeProduct(
    @Param('userId') userId: string,
    @Param('productId') productId: string
  ) {
    return this.shoppingCartService.removeFromCart(userId, productId)
  }

  @Get(':userId')
  async getAllProducts(@Param('userId') userId: string) {
    return this.shoppingCartService.getAllCartProductsByUser(userId)
  }

  @Get('price/:userId')
  async getPrice(@Param('userId') userId: string) {
    return this.shoppingCartService.getAllCartProductsPrice(userId)
  }
}
