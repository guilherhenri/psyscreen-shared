export interface PsychAnalysisCompletedEvent {
  candidateId: string
  profileId: string
  vacancyId?: string | null
  criteriaVersion?: number | null
  score: number
  report: string
}
