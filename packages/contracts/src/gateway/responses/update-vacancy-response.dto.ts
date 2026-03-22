import { ApiProperty } from '@nestjs/swagger'

export class UpdateVacancyResponseDto {
  @ApiProperty({
    description: 'Success message',
    example: 'Vacancy updated successfully.',
  })
  message: string
}
