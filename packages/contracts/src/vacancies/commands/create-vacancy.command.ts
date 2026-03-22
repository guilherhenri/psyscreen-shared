import type { VacancyCriteriaItem } from '../criteria'
import type { VacancyStatus } from '../types'

export interface CreateVacancyCommand {
  title: string
  description: string
  status: VacancyStatus
  criteria: VacancyCriteriaItem[]
}
