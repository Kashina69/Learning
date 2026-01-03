import { Module } from "@nestjs/common";
import { TodoListService } from "./todo-list.service";
import { TodoListController } from "./todo-list.controller";
import { DatabaseModule } from "src/database/database.module";
import { TodoListRepository } from "./todo.repository";

@Module({
  imports: [DatabaseModule],
  controllers: [TodoListController],
  providers: [TodoListService, TodoListRepository],
})
export class TodoListModule {}
