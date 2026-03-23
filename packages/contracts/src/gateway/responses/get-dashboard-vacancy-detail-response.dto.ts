import { ApiProperty } from '@nestjs/swagger'

class DashboardVacancyDetailDto {
  @ApiProperty({ example: 'vacancy-uuid' })
  vacancyId: string

  @ApiProperty({ example: 'Senior Backend Engineer' })
  title: string

  @ApiProperty({ example: 'Role description', nullable: true })
  description: string | null

  @ApiProperty({ example: 'open' })
  status: string

  @ApiProperty({ example: 2, nullable: true })
  criteriaVersion: number | null
}

class DashboardVacancyCandidateDto {
  @ApiProperty({ example: 'candidate-uuid' })
  candidateId: string

  @ApiProperty({ example: 'profile-uuid', nullable: true })
  profileId: string | null

  @ApiProperty({ example: 'Short summary', nullable: true })
  summary: string | null

  @ApiProperty({ example: 'linked' })
  status: string

  @ApiProperty({ example: 'completed' })
  analysisStatus: string

  @ApiProperty({ example: 86, nullable: true })
  analysisScore: number | null

  @ApiProperty({ example: 'Great fit', nullable: true })
  analysisReport: string | null

  @ApiProperty({ example: 2, nullable: true })
  criteriaVersion: number | null

  @ApiProperty({ example: '2026-03-23T10:00:00.000Z', nullable: true })
  lastAnalysisAt: Date | null
}

export class GetDashboardVacancyDetailResponseDto {
  @ApiProperty({ type: DashboardVacancyDetailDto })
  vacancy: DashboardVacancyDetailDto

  @ApiProperty({ type: [DashboardVacancyCandidateDto] })
  candidates: DashboardVacancyCandidateDto[]
}
