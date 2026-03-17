import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class GenerateResumeSignedUrlDto {
  @ApiProperty({
    description: 'Resume file name with extension',
    example: 'resume.pdf',
  })
  @IsString()
  fileName: string

  @ApiProperty({
    description: 'Resume mime type',
    example: 'application/pdf',
  })
  @IsString()
  mimeType: string
}
