import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class GetDashboardVacancyDetailDto {
  @ApiProperty({
    description: 'Vacancy identifier',
    example: 'vacancy-uuid',
  })
  @IsString()
  vacancyId: string
}
