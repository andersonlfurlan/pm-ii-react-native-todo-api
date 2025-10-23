import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './data-source';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
  TypeOrmModule.forRoot({ ...(config as any) }),
  TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
