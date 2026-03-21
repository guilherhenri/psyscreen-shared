import type { VacancyCriteriaItem } from '../criteria'

export interface VacancyCreatedEvent {
  vacancyId: string
  title: string
  description: string
  status: string
  criteriaVersion: number
  criteria: VacancyCriteriaItem[]
}
