export enum DashboardCommandTopics {
  LIST_VACANCIES = 'dashboard.command.vacancies.list',
  VACANCY_DETAIL = 'dashboard.command.vacancies.detail',
  CANDIDATE_DETAIL = 'dashboard.command.candidates.detail',
}

export enum DashboardEventTopics {
  VACANCY_CREATED = 'dashboard.event.vacancy_created',
  VACANCY_UPDATED = 'dashboard.event.vacancy_updated',
  CANDIDATE_CREATED = 'dashboard.event.candidate_created',
  CANDIDATE_UPDATED = 'dashboard.event.candidate_updated',
  CANDIDATE_VACANCY_LINKED = 'dashboard.event.candidate_vacancy_linked',
  CANDIDATE_VACANCY_UPDATED = 'dashboard.event.candidate_vacancy_updated',
}
