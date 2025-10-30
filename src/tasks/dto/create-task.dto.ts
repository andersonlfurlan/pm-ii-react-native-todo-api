import { IsBoolean, IsOptional, IsString, IsISO8601, Max, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTaskDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsString()
  @MaxLength(100, { message: "O campo deve ter no máximo 100 caracteres"})
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

