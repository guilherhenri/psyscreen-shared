import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsArray, IsIn, IsString, ValidateNested } from 'class-validator'

import type { VacancyStatus } from '../../vacancies/types'

import { VacancyCriteriaItemDto } from './vacancy-criteria-item.dto'

const VACANCY_STATUSES: VacancyStatus[] = ['draft', 'open', 'closed']

export class CreateVacancyDto {
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
    example: 'draft',
    enum: VACANCY_STATUSES,
  })
  @IsString()
  @IsIn(VACANCY_STATUSES)
  status: VacancyStatus

  @ApiProperty({
    description: 'Criteria list with weights',
    type: [VacancyCriteriaItemDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VacancyCriteriaItemDto)
  criteria: VacancyCriteriaItemDto[]
}
