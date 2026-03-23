export const DashboardErrorCodes = {
  NOT_FOUND: 'NOT_FOUND',
  INVALID_COMMAND: 'INVALID_COMMAND',
} as const

export type DashboardErrorCode =
  (typeof DashboardErrorCodes)[keyof typeof DashboardErrorCodes]
