import { Injectable } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    console.log(
      `[AuthService] validateUser: email=${email}, password=${password}`
    )
    return await this.usersService.validateUser(email, password)
  }

  async login(user: any) {
    console.log(
      `[AuthService] login: email=${user.email} and password: ${user.password}`
    )
    const payload = { email: user.email }
    return {
      access_token: this.jwtService.sign(payload),
      email: user.email,
      role: user.role,
      name: user.name,
      boughtProducts: user.boughtProducts,
    }
  }
}
