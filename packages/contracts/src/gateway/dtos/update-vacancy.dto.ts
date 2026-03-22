import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

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
  })
  @IsString()
  status: string
}
