import type { ServiceResult } from '../../common/results'
import type { VacancyErrorCode } from '../errors'

export type LinkCandidateToVacancyResult = ServiceResult<null, VacancyErrorCode>
