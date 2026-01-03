import { Injectable } from "@nestjs/common";
import { JsonDbService } from "../database/json-db.service";
import { TodoList } from "./entities/todo-list.entity";
import { randomUUID } from "crypto";

@Injectable()
export class TodoListRepository {
  private readonly KEY = "todos";

  constructor(private readonly db: JsonDbService) {}

  async findAll(): Promise<TodoList[]> {
    return this.db.getCollection<TodoList>(this.KEY);
  }

  async findById(id: string): Promise<TodoList | undefined> {
    const todos = await this.findAll();
    return todos.find((t) => t.id === id);
  }

  async create(title: string): Promise<TodoList> {
    const todos = await this.findAll();

    const todo: TodoList = {
      id: randomUUID(),
      title,
      completed: false,
      createdAt: new Date(),
    };

    todos.push(todo);
    await this.db.setCollection(this.KEY, todos);

    return todo;
  }

  async update(id: string, data: Partial<TodoList>): Promise<TodoList> {
    const todos = await this.findAll();
    const index = todos.findIndex((t) => t.id === id);

    if (index === -1) throw new Error("TodoList not found");

    todos[index] = { ...todos[index], ...data };
    await this.db.setCollection(this.KEY, todos);

    return todos[index];
  }

  async delete(id: string): Promise<void> {
    const todos = await this.findAll();
    const filtered = todos.filter((t) => t.id !== id);
    await this.db.setCollection(this.KEY, filtered);
  }
}
