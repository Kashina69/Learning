import { Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';

@Controller('todo')
export class TodoController {
    // Handles GET /todo/todos and GET /todo/todos?name=xxx
    @Get('todos')
    findAll(@Query('name') name?: string): string {
      if (name) {
        return `You were trying to search todo of name ${name}`;
      }
      return 'List of todos';
    }

    @Get('todos/:id')
    getTodoById(@Param('id') id: string): string {
      return `List of todos ${id}`;
    }

    @Post("update/:id")
    updateTodoById(@Param('id') id: string): string {
      return `Updated post with ${id}`;
    }

    @Delete("delete/:id")
    deleteTodoById(@Param('id') id: string): string {
      return `Deleted post with ${id}`;
    }
}
