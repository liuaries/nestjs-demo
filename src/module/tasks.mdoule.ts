import { Module } from '@nestjs/common';
import { TaskService } from '../infrastructure/task/task.service';

@Module({
  providers: [TaskService],
})
export class TasksModule {}