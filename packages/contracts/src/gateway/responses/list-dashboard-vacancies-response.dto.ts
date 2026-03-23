import { ApiProperty } from '@nestjs/swagger'

class DashboardCandidateCountsDto {
  @ApiProperty({ example: 3 })
  linked: number

  @ApiProperty({ example: 2 })
  active: number

  @ApiProperty({ example: 1 })
  archived: number

  @ApiProperty({ example: 6 })
  total: number
}

class DashboardVacancyListItemDto {
  @ApiProperty({ example: 'vacancy-uuid' })
  vacancyId: string

  @ApiProperty({ example: 'Senior Backend Engineer' })
  title: string

  @ApiProperty({ example: 'open' })
  status: string

  @ApiProperty({ example: 2, nullable: true })
  criteriaVersion: number | null

  @ApiProperty({ type: DashboardCandidateCountsDto })
  candidateCounts: DashboardCandidateCountsDto
}

export class ListDashboardVacanciesResponseDto {
  @ApiProperty({ type: [DashboardVacancyListItemDto] })
  items: DashboardVacancyListItemDto[]

  @ApiProperty({ example: 20 })
  total: number

  @ApiProperty({ example: 1 })
  page: number

  @ApiProperty({ example: 20 })
  perPage: number
}
