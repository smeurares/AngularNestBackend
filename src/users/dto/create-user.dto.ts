import {
  IsNotEmpty,
  IsString,
  MinLength,
  IsEmail,
  IsArray,
} from 'class-validator'

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1) // to change when done with testing
  name: string

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  password: string

  @IsEmail()
  @IsNotEmpty()
  @MinLength(1) // to change when done with testing
  email: string

  @IsString()
  @IsNotEmpty()
  @MinLength(1) // to change when done with testing
  role: string

  @IsArray()
  boughtProducts: string[]
}
