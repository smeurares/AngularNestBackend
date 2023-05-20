import { IsNotEmpty, IsString, MinLength, IsEmail } from 'class-validator'

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  password: string

  @IsEmail()
  @IsNotEmpty()
  @MinLength(1) // to change when done with testing
  email: string
}
