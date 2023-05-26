/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type ProductDocument = Product & Document

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Product {
  @Prop({ required: true })
  name: string

  @Prop({ required: false })
  description: string

  @Prop({ required: true })
  price: number

  @Prop({ required: false })
  imageUrl: string

  @Prop({ required: false })
  isInStock: boolean

  id: string
}

export const ProductSchema = SchemaFactory.createForClass(Product)
