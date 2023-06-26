import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './tasks.model';
import { CreateTaskDto } from './dto/create-task-dto';
import { User } from 'src/users/users.model';
import { CategoriesService } from 'src/categories/categories.service';
import { TaskIdDto } from './dto/task-id-dto';
import { EditTaskDto } from './dto/edit-task-dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task) private taskRepository: typeof Task,
    private categoriesService: CategoriesService,
  ) {}

  async createTask(dto: CreateTaskDto, user: User) {
    const category = await this.categoriesService.getCategoryById({
      id: dto.categoryId,
    });
    if (category.userId === user.id) {
      const task = await this.taskRepository.create({ ...dto });
      return task;
    }
    throw new HttpException('No access', HttpStatus.FORBIDDEN);
  }

  async getAllTask() {
    const task = await this.taskRepository.findAll({ include: { all: true } });
    return task;
  }

  async getTaskById(dto: TaskIdDto) {
    const task = await this.taskRepository.findByPk(dto.id);
    return task;
  }

  async editTask(dto: EditTaskDto, user: User) {
    const task = await this.getTaskById({ id: dto.id });
    const category = await this.categoriesService.getCategoryById({
      id: task.categoryId,
    });
    if (category.userId === user.id) {
      await this.taskRepository.update({ ...dto }, { where: { id: task.id } });
      return await this.getTaskById({ id: task.id });
    }
    throw new HttpException('No access', HttpStatus.FORBIDDEN);
  }

  async deleteTaskById(dto: TaskIdDto, user: User) {
    const task = await this.getTaskById(dto);
    const category = await this.categoriesService.getCategoryById({
      id: task.categoryId,
    });
    if (category.userId === user.id) {
      await this.taskRepository.destroy({ where: { ...dto } });
      return { id: task.id };
    }
    throw new HttpException('No access', HttpStatus.FORBIDDEN);
  }
}
