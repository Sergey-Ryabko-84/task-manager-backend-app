import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { ReqUser } from 'src/auth/user.decorator';
import { TasksService } from './tasks.service';
import { Task } from './tasks.model';
import { User } from 'src/users/users.model';
import { CreateTaskDto } from './dto/create-task-dto';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { EditTaskDto } from './dto/edit-task-dto';
import { TaskIdDto } from './dto/task-id-dto';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @ApiOperation({ summary: 'Create task' })
  @ApiResponse({ status: 201, type: Task })
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() dto: CreateTaskDto, @ReqUser() user: User) {
    return this.tasksService.createTask(dto, user);
  }

  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({ status: 200, type: [Task] })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.tasksService.getAllTask();
  }

  @ApiOperation({ summary: 'Get task by id' })
  @ApiResponse({ status: 200, type: [Task] })
  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  getCategoryById(@Param('id') id: number) {
    return this.tasksService.getTaskById({ id });
  }

  @ApiOperation({ summary: 'Edit task' })
  @ApiResponse({ status: 200, type: Task })
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  @Patch()
  edit(@Body() dto: EditTaskDto, @ReqUser() user: User) {
    return this.tasksService.editTask(dto, user);
  }

  @ApiOperation({ summary: 'Delete task' })
  @ApiResponse({ status: 200, type: [Task] })
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  @Delete()
  deleteById(@Body() dto: TaskIdDto, @ReqUser() user: User) {
    return this.tasksService.deleteTaskById(dto, user);
  }
}
