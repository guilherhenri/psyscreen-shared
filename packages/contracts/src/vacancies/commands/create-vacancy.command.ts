import type { VacancyCriteriaItem } from '../criteria'

export interface CreateVacancyCommand {
  title: string
  description: string
  status: string
  criteria: VacancyCriteriaItem[]
}
