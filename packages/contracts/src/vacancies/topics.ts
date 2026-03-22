export enum VacancyTopics {
  VACANCY_CREATED = 'vacancies.event.created',
  VACANCY_UPDATED = 'vacancies.event.updated',
  VACANCY_CRITERIA_UPDATED = 'vacancies.event.criteria_updated',
  VACANCY_CANDIDATE_LINKED = 'vacancies.event.candidate_linked',
}

export enum VacancyCommandTopics {
  CREATE = 'vacancies.command.create',
  UPDATE = 'vacancies.command.update',
  UPDATE_CRITERIA = 'vacancies.command.criteria_update',
  LINK_CANDIDATE = 'vacancies.command.link_candidate',
}
