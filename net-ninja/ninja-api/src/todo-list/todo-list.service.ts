import { Injectable } from "@nestjs/common";
import { TodoListRepository } from "./todo.repository";
// import { CreateTodoListDto } from "./dto/create-todo-list.dto";
// import { UpdateTodoListDto } from "./dto/update-todo-list.dto";

@Injectable()
export class TodoListService {
  constructor(private readonly repo: TodoListRepository) {}

  getTodos() {
    return this.repo.findAll();
  }

  createTodo(title: string) {
    return this.repo.create(title);
  }

  toggleTodo(id: string) {
    return this.repo.update(id, { completed: true });
  }

  deleteTodo(id: string) {
    return this.repo.delete(id);
  }
}
