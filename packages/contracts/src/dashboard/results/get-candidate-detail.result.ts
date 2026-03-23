import type { ServiceResult } from '../../common/results'
import type { DashboardErrorCode } from '../errors'

export type GetCandidateDetailResult = ServiceResult<
  {
    candidate: {
      candidateId: string
      profileId: string | null
      vacancyId: string | null
      summary: string | null
      skills: string[]
    }
    vacancy: {
      vacancyId: string
      title: string
      status: string
    } | null
    analysis: {
      status: string
      score: number | null
      report: string | null
      criteriaVersion: number | null
      lastAnalysisAt: Date | null
    } | null
  },
  DashboardErrorCode
>
