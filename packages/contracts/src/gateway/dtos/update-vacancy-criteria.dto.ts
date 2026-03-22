import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsArray, ValidateNested } from 'class-validator'

import { VacancyCriteriaItemDto } from './vacancy-criteria-item.dto'

export class UpdateVacancyCriteriaDto {
  @ApiProperty({
    description: 'Criteria list with weights',
    type: [VacancyCriteriaItemDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VacancyCriteriaItemDto)
  criteria: VacancyCriteriaItemDto[]
}
