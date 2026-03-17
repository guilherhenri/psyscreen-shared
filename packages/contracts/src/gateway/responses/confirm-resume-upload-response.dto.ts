import { ApiProperty } from '@nestjs/swagger'

export class ConfirmResumeUploadResponseDto {
  @ApiProperty({
    description: 'Success message',
    example: 'Upload confirmado com sucesso.',
  })
  message: string
}
