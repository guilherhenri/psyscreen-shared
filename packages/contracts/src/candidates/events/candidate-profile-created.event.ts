export interface CandidateProfileCreatedEvent {
  candidateId: string
  profileId: string
  vacancyId?: string | null
  summary: string | null
  experiences: string[]
  education: string[]
  skills: string[]
  languages: string[]
  certifications: string[]
  rawText: string
}
