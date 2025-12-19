import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString } from 'class-validator'

export class LoginUserDto {
  @ApiProperty({
    description: "User's email",
    example: 'johndoe@example.com',
    format: 'email',
  })
  @IsEmail()
  email: string

  @ApiProperty({
    description: "User's password",
    example: 'securePassword123!',
    format: 'password',
  })
  @IsString()
  password: string
}
