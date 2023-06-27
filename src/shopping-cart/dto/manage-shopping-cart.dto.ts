import { IsArray, IsNotEmpty } from 'class-validator'
import { Product } from 'src/products/entities/product.entity'
import { User } from 'src/users/schema/user.schema'

export class ManageShoppingCartDto {
  @IsArray()
  products: Product[]

  @IsNotEmpty()
  user: User
}
