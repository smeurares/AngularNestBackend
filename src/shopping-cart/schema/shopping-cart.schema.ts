import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'
import { Product } from 'src/products/schema/product.schema'
import { User } from 'src/users/schema/user.schema'

export type ShoppingCartDocument = ShoppingCart & Document

@Schema()
export class ShoppingCart {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user: User

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Product', required: true }] })
  products: Product[]
}

export const ShoppingCartSchema = SchemaFactory.createForClass(ShoppingCart)
