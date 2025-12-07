import { IsUUID } from 'class-validator'

export class RefreshTokenCommand {
  @IsUUID('4')
  userId: string
}
