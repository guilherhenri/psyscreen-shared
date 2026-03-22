import { ApiProperty } from '@nestjs/swagger'

export class UpdateVacancyCriteriaResponseDto {
  @ApiProperty({
    description: 'Criteria version after update',
    example: 2,
  })
  criteriaVersion: number
}
