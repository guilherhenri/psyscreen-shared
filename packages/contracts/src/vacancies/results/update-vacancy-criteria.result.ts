import type { ServiceResult } from '../../common/results'
import type { VacancyErrorCode } from '../errors'

export type UpdateVacancyCriteriaResult = ServiceResult<
  {
    criteriaVersion: number
  },
  VacancyErrorCode
>
