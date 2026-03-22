import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class LinkCandidateToVacancyDto {
  @ApiProperty({
    description: 'Candidate identifier',
    example: 'candidate-uuid',
  })
  @IsString()
  candidateId: string

  @ApiProperty({
    description: 'Link status',
    example: 'linked',
  })
  @IsString()
  status: string
}
