import type { VacancyCriteriaItem } from '../criteria'

export interface VacancyCriteriaUpdatedEvent {
  vacancyId: string
  criteriaVersion: number
  criteria: VacancyCriteriaItem[]
}
