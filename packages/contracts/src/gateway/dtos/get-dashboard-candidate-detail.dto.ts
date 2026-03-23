import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class GetDashboardCandidateDetailDto {
  @ApiProperty({
    description: 'Candidate identifier',
    example: 'candidate-uuid',
  })
  @IsString()
  candidateId: string
}
