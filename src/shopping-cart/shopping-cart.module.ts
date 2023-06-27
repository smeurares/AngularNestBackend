import { Module } from '@nestjs/common'
import { ShoppingCartService } from './shopping-cart.service'
import { MongooseModule } from '@nestjs/mongoose'
import { ShoppingCartSchema } from './schema/shopping-cart.schema'
import { ShoppingCartController } from './shopping-cart.controller'
import { ProductsModule } from '../products/products.module'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ShoppingCart', schema: ShoppingCartSchema },
    ]),
    ProductsModule,
  ],
  providers: [ShoppingCartService],
  controllers: [ShoppingCartController],
})
export class ShoppingCartModule {}
