import type { VacancyStatus } from '../types'

export interface UpdateVacancyCommand {
  vacancyId: string
  title: string
  description: string
  status: VacancyStatus
}
