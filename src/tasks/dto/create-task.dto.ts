import { IsBoolean, IsOptional, IsString, IsISO8601 } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTaskDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsString()
  name: string;

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

