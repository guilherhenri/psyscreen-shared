import { ApiProperty } from '@nestjs/swagger'

export class RegisterUserResponseDto {
  @ApiProperty({
    description: 'Success message',
    example: 'Usuário registrado com sucesso.',
  })
  message: string
}
