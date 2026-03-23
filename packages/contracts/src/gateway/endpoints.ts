export const GatewayEndpoints = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    refresh: '/auth/refresh',
    logout: '/auth/logout',
  },
  resumes: {
    generateSignedUrl: '/resumes/signed-url',
    confirmUpload: '/resumes/confirm-upload',
  },
  vacancies: {
    create: '/vacancies',
    update: '/vacancies/:id',
    updateCriteria: '/vacancies/:id/criteria',
    linkCandidate: '/vacancies/:id/candidates',
  },
  dashboard: {
    listVacancies: '/dashboard/vacancies',
    vacancyDetail: '/dashboard/vacancies/:vacancyId',
    candidateDetail: '/dashboard/candidates/:candidateId',
  },
} as const

export type GatewayEndpointKey = keyof typeof GatewayEndpoints
