import type { GlobalErrorCodes } from '../common/errors'

export enum VacancyErrorCodes {
  VACANCY_NOT_FOUND = 'VACANCY_NOT_FOUND',
  CANDIDATE_ALREADY_LINKED = 'CANDIDATE_ALREADY_LINKED',
}

export type VacancyErrorCode =
  | VacancyErrorCodes
  | GlobalErrorCodes.UNEXPECTED_ERROR
  | GlobalErrorCodes.RESOURCE_NOT_FOUND
