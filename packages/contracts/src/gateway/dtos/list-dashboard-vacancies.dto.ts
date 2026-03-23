import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsInt, IsOptional, IsString, Min } from 'class-validator'

export class ListDashboardVacanciesDto {
  @ApiPropertyOptional({
    description: 'Vacancy status filter',
    example: 'open',
  })
  @IsOptional()
  @IsString()
  status?: string

  @ApiPropertyOptional({
    description: 'Search term for vacancy title',
    example: 'Senior',
  })
  @IsOptional()
  @IsString()
  search?: string

  @ApiPropertyOptional({
    description: 'Page number',
    example: 1,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  page?: number

  @ApiPropertyOptional({
    description: 'Items per page',
    example: 20,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  perPage?: number
}
