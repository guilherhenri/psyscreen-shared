import type { ServiceResult } from '../../common/results'
import type { DashboardErrorCode } from '../errors'

export interface VacancyListItem {
  vacancyId: string
  title: string
  status: string
  criteriaVersion: number | null
  candidateCounts: {
    linked: number
    active: number
    archived: number
    total: number
  }
}

export type ListVacanciesResult = ServiceResult<
  {
    items: VacancyListItem[]
    total: number
    page: number
    perPage: number
  },
  DashboardErrorCode
>
