import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, MinLength } from 'class-validator'

export class RegisterUserDto {
  @ApiProperty({
    description: "User's full name",
    example: 'John Doe',
    minLength: 3,
  })
  @IsString()
  @MinLength(3)
  name: string

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
