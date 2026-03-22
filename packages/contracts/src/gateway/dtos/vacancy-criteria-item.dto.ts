import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString, Max, Min } from 'class-validator'

export class VacancyCriteriaItemDto {
  @ApiProperty({
    description: 'Criteria key identifier',
    example: 'leadership',
  })
  @IsString()
  key: string

  @ApiProperty({
    description: 'Criteria weight (0-100)',
    example: 80,
  })
  @IsNumber()
  @Min(0)
  @Max(100)
  weight: number
}
