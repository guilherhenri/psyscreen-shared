import type { CandidateVacancyStatus } from '../types'

export interface LinkCandidateToVacancyCommand {
  vacancyId: string
  candidateId: string
  status: CandidateVacancyStatus
}
