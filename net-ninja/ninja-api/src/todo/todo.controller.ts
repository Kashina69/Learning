import { Controller, Get } from '@nestjs/common';

@Controller('todo')
export class TodoController {
    @Get('todos')
    findAll(): string {
      return 'List of todos';
    }
}
