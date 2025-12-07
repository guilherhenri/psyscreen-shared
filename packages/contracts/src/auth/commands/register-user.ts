import { IsEmail, IsString } from 'class-validator'

export class RegisterUserCommand {
  @IsString()
  name: string

  @IsEmail()
  email: string

  @IsString()
  password: string
}
