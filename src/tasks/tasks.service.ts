import { BadRequestException, Injectable, UnprocessableEntityException } from '@nestjs/common';
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
  ) { }

  findAll(): Promise<Task[]> {
    return this.repo.find();
  }

  findOne(id: string): Promise<Task | null> {
    return this.repo.findOneBy({ id });
  }

  async create(dto: CreateTaskDto): Promise<Task> {
    const id = dto.id ?? uuidv4();
    this.validate(dto);
    const entity = this.repo.create({ ...dto, id, done: dto.done ?? false });
    return this.repo.save(entity);
  }

  validate(dto: Partial<CreateTaskDto>) {
    if (dto.name.includes('Task')) {
      throw new BadRequestException('O campo não deve conter o texto Task.');
    }
    if (dto.done === false && dto.completedDate) {
      throw new BadRequestException('Não deve existir data de conclusão da tarefa para tarefas ativas. ')
    }
  }

  async update(id: string, dto: Partial<CreateTaskDto>) {
    this.validate(dto);
    await this.repo.update({ id }, dto as any);
    return this.findOne(id);
  }

  async remove(id: string) {
    const task = await this.repo.findOneBy({ id });
    if(!task.done) {
      throw new UnprocessableEntityException('Não é possível excluir uma tarefa ativa! ');
    }
    return this.repo.delete({ id });
  }
}
