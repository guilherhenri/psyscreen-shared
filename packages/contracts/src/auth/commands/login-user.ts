import { IsEmail, IsString } from 'class-validator'

export class LoginUserCommand {
  @IsEmail()
  email: string

  @IsString()
  password: string
}
