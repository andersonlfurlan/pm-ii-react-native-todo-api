import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private repo: Repository<Task>,
  ) {}

  findAll(): Promise<Task[]> {
    return this.repo.find();
  }

  findOne(id: string): Promise<Task | null> {
    return this.repo.findOneBy({ id });
  }

  async create(dto: CreateTaskDto): Promise<Task> {
    const id = dto.id ?? uuidv4();
    const entity = this.repo.create({ ...dto, id, done: dto.done ?? false });
    return this.repo.save(entity);
  }

  async update(id: string, dto: Partial<CreateTaskDto>) {
    await this.repo.update({ id }, dto as any);
    return this.findOne(id);
  }

  remove(id: string) {
    return this.repo.delete({ id });
  }
}
