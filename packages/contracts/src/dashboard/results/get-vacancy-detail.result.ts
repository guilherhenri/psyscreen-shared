import type { ServiceResult } from '../../common/results'
import type { DashboardErrorCode } from '../errors'

export interface VacancyCandidateItem {
  candidateId: string
  profileId: string | null
  summary: string | null
  status: string
  analysisStatus: string
  analysisScore: number | null
  analysisReport: string | null
  criteriaVersion: number | null
  lastAnalysisAt: Date | null
}

export type GetVacancyDetailResult = ServiceResult<
  {
    vacancy: {
      vacancyId: string
      title: string
      description: string | null
      status: string
      criteriaVersion: number | null
    }
    candidates: VacancyCandidateItem[]
  },
  DashboardErrorCode
>
