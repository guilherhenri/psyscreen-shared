import { ApiProperty } from '@nestjs/swagger'

export class CreateVacancyResponseDto {
  @ApiProperty({
    description: 'Vacancy identifier',
    example: 'vacancy-uuid',
  })
  vacancyId: string
}
