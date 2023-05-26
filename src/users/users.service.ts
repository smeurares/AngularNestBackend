import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User, UserDocument } from './schema/user.schema'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserDocument> {
    const user = new this.userModel(createUserDto)
    return user.save()
  }

  async findAllUsers(): Promise<UserDocument[]> {
    return this.userModel.find()
  }

  async findOneUser(id: string) {
    return this.userModel.findById(id)
  }

  async getUser(query: object): Promise<User> {
    return this.userModel.findOne(query)
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto
  ): Promise<UserDocument> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto)
  }

  async remove(id: string) {
    return this.userModel.findByIdAndRemove(id)
  }

  async validateUser(
    email: string,
    password: string
  ): Promise<User | undefined> {
    try {
      const user = await this.userModel.findOne({ email, password })
      if (user) {
        const id = user._id.toString()
        console.log('spec', id)
        console.log('[UsersService] validateUser: found user', user)
        const { role, name, boughtProducts, email } = user

        return {
          ...user,
          role,
          name,
          id,
          email,
          boughtProducts,
          password: undefined,
        }
      }
      return undefined
    } catch (error) {
      console.error('[UsersService] validateUser error:', error)
      throw error // Rethrow the error or handle it as needed
    }
  }
}
