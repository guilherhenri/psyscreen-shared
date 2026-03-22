import { ApiProperty } from '@nestjs/swagger'

export class LinkCandidateToVacancyResponseDto {
  @ApiProperty({
    description: 'Success message',
    example: 'Candidate linked successfully.',
  })
  message: string
}
