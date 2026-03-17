import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class ConfirmResumeUploadDto {
  @ApiProperty({
    description: 'Uploaded file path in storage',
    example: 'user-123/uuid-resume.pdf',
  })
  @IsString()
  filePath: string
}
