import { ApiProperty } from '@nestjs/swagger'
import { IsIn, IsString } from 'class-validator'

import type { VacancyStatus } from '../../vacancies/types'

const VACANCY_STATUSES: VacancyStatus[] = ['draft', 'open', 'closed']

export class UpdateVacancyDto {
  @ApiProperty({
    description: 'Vacancy title',
    example: 'Senior Backend Engineer',
  })
  @IsString()
  title: string

  @ApiProperty({
    description: 'Vacancy description',
    example: 'Responsible for backend services and integrations.',
  })
  @IsString()
  description: string

  @ApiProperty({
    description: 'Vacancy status',
    example: 'open',
    enum: VACANCY_STATUSES,
  })
  @IsString()
  @IsIn(VACANCY_STATUSES)
  status: VacancyStatus
}
