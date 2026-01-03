import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { TodoListService } from "./todo-list.service";
// import { CreateTodoListDto } from "./dto/create-todo-list.dto";
// import { UpdateTodoListDto } from "./dto/update-todo-list.dto";

@Controller("todo-list")
export class TodoListController {
  constructor(private readonly todoListService: TodoListService) {}

  @Get()
  getAllTodos() {
    return this.todoListService.getTodos();
  }

  @Post()
  createTodo(@Body("title") title: string) {
    return this.todoListService.createTodo(title);
  }

  @Patch(":id/toggle")
  toggleTodo(@Param("id") id: string) {
    return this.todoListService.toggleTodo(id);
  }

  @Delete(":id")
  deleteTodo(@Param("id") id: string) {
    return this.todoListService.deleteTodo(id);
  }
}
