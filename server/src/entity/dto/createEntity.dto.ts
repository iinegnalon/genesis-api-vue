import { IsString } from 'class-validator';

export class CreateEntityDto {
  @IsString()
  entityType: string;
}
