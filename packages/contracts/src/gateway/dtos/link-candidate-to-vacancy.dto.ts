import { ApiProperty } from '@nestjs/swagger'
import { IsIn, IsString } from 'class-validator'

import type { CandidateVacancyStatus } from '../../vacancies/types'

const CANDIDATE_VACANCY_STATUSES: CandidateVacancyStatus[] = [
  'linked',
  'active',
  'archived',
]

export class LinkCandidateToVacancyDto {
  @ApiProperty({
    description: 'Candidate identifier',
    example: 'candidate-uuid',
  })
  @IsString()
  candidateId: string

  @ApiProperty({
    description: 'Link status',
    example: 'linked',
    enum: CANDIDATE_VACANCY_STATUSES,
  })
  @IsString()
  @IsIn(CANDIDATE_VACANCY_STATUSES)
  status: CandidateVacancyStatus
}
