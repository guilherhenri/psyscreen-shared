import type { ServiceResult } from '../../common/results'
import type { VacancyErrorCode } from '../errors'

export type CreateVacancyResult = ServiceResult<
  {
    vacancyId: string
  },
  VacancyErrorCode
>
