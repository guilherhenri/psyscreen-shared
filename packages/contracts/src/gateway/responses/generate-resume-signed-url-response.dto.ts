import { ApiProperty } from '@nestjs/swagger'

export class GenerateResumeSignedUrlResponseDto {
  @ApiProperty({
    description: 'Generated file identifier',
    example: 'b25b2b55-41fd-4d67-8a20-88c57d19b4a9',
  })
  fileId: string

  @ApiProperty({
    description: 'Presigned upload URL',
    example: 'https://storage.example.com/upload?token=abc',
  })
  uploadUrl: string

  @ApiProperty({
    description: 'Expiration time in seconds',
    example: 7200,
  })
  expiresIn: number

  @ApiProperty({
    description: 'HTTP method to use for upload',
    example: 'PUT',
  })
  method: 'PUT'

  @ApiProperty({
    description: 'Required headers for upload',
    example: { 'Content-Type': 'application/pdf' },
  })
  headers: {
    'Content-Type': string
  }
}
