import { IsBoolean, IsOptional, IsString, IsISO8601 } from 'class-validator';

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  done?: boolean;

  @IsOptional()
  @IsISO8601()
  createdDate?: string;

  @IsOptional()
  @IsISO8601()
  completedDate?: string;
}
