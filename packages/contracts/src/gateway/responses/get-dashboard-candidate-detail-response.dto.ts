import { ApiProperty } from '@nestjs/swagger'

class DashboardCandidateDetailDto {
  @ApiProperty({ example: 'candidate-uuid' })
  candidateId: string

  @ApiProperty({ example: 'profile-uuid', nullable: true })
  profileId: string | null

  @ApiProperty({ example: 'vacancy-uuid', nullable: true })
  vacancyId: string | null

  @ApiProperty({ example: 'Short summary', nullable: true })
  summary: string | null

  @ApiProperty({ example: ['typescript', 'nestjs'] })
  skills: string[]
}

class DashboardCandidateVacancyDto {
  @ApiProperty({ example: 'vacancy-uuid' })
  vacancyId: string

  @ApiProperty({ example: 'Senior Backend Engineer' })
  title: string

  @ApiProperty({ example: 'open' })
  status: string
}

class DashboardCandidateAnalysisDto {
  @ApiProperty({ example: 'completed' })
  status: string

  @ApiProperty({ example: 86, nullable: true })
  score: number | null

  @ApiProperty({ example: 'Great fit', nullable: true })
  report: string | null

  @ApiProperty({ example: 2, nullable: true })
  criteriaVersion: number | null

  @ApiProperty({ example: '2026-03-23T10:00:00.000Z', nullable: true })
  lastAnalysisAt: Date | null
}

export class GetDashboardCandidateDetailResponseDto {
  @ApiProperty({ type: DashboardCandidateDetailDto })
  candidate: DashboardCandidateDetailDto

  @ApiProperty({ type: DashboardCandidateVacancyDto, nullable: true })
  vacancy: DashboardCandidateVacancyDto | null

  @ApiProperty({ type: DashboardCandidateAnalysisDto, nullable: true })
  analysis: DashboardCandidateAnalysisDto | null
}
