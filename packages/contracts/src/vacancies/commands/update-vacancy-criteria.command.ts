import type { VacancyCriteriaItem } from '../criteria'

export interface UpdateVacancyCriteriaCommand {
  vacancyId: string
  criteria: VacancyCriteriaItem[]
}
