## Nest JS Learnings 


## Installation with nest CLI tool


```bash

# Nest js

npm install -g @nestjs/cli

nest new app-name

npm run start:dev


```

## Generating Modules, Controllers, Services, and Resources with the NestJS CLI

NestJS provides a powerful CLI to efficiently generate and manage various building blocks like modules, controllers, services, and resources. Using the CLI streamlines project structure and wiring, and ensures best practices are followed.

### Creating a Module

To generate a module, use one of the following commands:

```bash
nest generate module <module-name>
# or, using the shorthand:
nest g m <module-name>
```

This command creates a new folder named `<module-name>` inside `src/`, along with a corresponding `<module-name>.module.ts` file. The new module is also automatically imported into `app.module.ts`. For example:

```typescript
@Module({
  imports: [<ModuleName>],
})
```

### Creating a Controller

To create a controller, run:

```bash
nest generate controller <module-name>
# or, using shorthand:
nest g co <module-name>
```

- If you specify an existing module name, the controller will be automatically registered under that module.
- Otherwise, it may be registered under the main app module.

### Creating a Service

To create a service (provider):

```bash
nest generate service <module-name>
# or:
nest g s <module-name>
```

- Like controllers, services are automatically linked to the specified module if it exists.

### Generating a Full Resource

You can quickly scaffold a set of files (module, controller, service, DTO, etc.) with:

```bash
nest generate resource <module-name>
# or:
nest g res <module-name>
```

- The CLI will ask which transport layer you want (e.g., REST API or GraphQL).
- It will also prompt you to generate CRUD endpoints.
- All files and connections are set up automatically.

**Note:**
Using the `nest g` commands helps ensure that all relevant files are generated and properly linked, reducing manual effort and boilerplate in your NestJS applications.


## Files and Folder structure

| File                     | Description                                                                                                  |
|--------------------------|--------------------------------------------------------------------------------------------------------------|
| app.controller.ts        | A basic controller with a single route.                                                                      |
| app.controller.spec.ts   | The unit tests for the controller.                                                                           |
| app.module.ts            | The root module of the application.                                                                          |
| app.service.ts           | A basic service with a single method.                                                                        |
| main.ts                  | The entry file of the application which uses the core function NestFactory to create a Nest application instance. |


## Core Concepts in NestJS

NestJS is a progressive Node.js framework for building efficient and scalable server-side applications. Here is an overview of its essential building blocks, key concepts, and code examples.

---

### 1. Modules

**Definition:**  
A module is a class annotated with the `@Module()` decorator. Modules are organizational units of Nest applications, grouping related providers, controllers, services, etc.

```typescript
import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';

@Module({
  controllers: [TodoController],
  providers: [],
})
export class TodoModule {}
```
_Note: Every Nest app has at least a root module (typically `AppModule`)._

---

### 2. Controllers

**Definition:**  
Controllers handle incoming HTTP requests and return responses to the client. They are decorated with `@Controller()`.

**Example:** See code from `@todo.controller.ts` ([lines 1-29]):

```typescript
import { Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';

// Registers this class as a controller for the /todo route
@Controller('todo')
export class TodoController {
    // GET /todo/todos and /todo/todos?name=xxx
    @Get('todos')
    findAll(@Query('name') name?: string): string {
      if (name) {
        return `You were trying to search todo of name ${name}`;
      }
      return 'List of todos';
    }

    // GET /todo/todos/:id
    @Get('todos/:id')
    getTodoById(@Param('id') id: string): string {
      return `List of todos ${id}`;
    }

    // POST /todo/update/:id
    @Post("update/:id")
    updateTodoById(@Param('id') id: string): string {
      return `Updated post with ${id}`;
    }

    // DELETE /todo/delete/:id
    @Delete("delete/:id")
    deleteTodoById(@Param('id') id: string): string {
      return `Deleted post with ${id}`;
    }
}
```

---

### 3. Providers (Services)

**Definition:**  
Providers are classes annotated with `@Injectable()`, and are used for dependency injection throughout your app, such as services, repositories, helpers, etc.

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  getTodos() {
    return ['Learn NestJS', 'Build awesome apps'];
  }
}
```

_Providers are usually injected into controllers via the constructor._

---

### 4. Decorators

**Definition:**  
Decorators are special functions that can modify the behavior of classes, methods, properties, or parameters (e.g., `@Controller`, `@Get`, `@Injectable`).

**Example:**

- `@Controller('todo')` marks a class as a controller associated with `/todo` routes.
- `@Get()`, `@Post()`, `@Delete()`, etc. bind HTTP request methods to controller methods.

---

### 5. Dependency Injection

NestJS uses robust dependency injection, making code modular and testable. Providers (like services) can be injected into controllers or other providers.

**Example:**

```typescript
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('all')
  findAll(): string[] {
    return this.todoService.getTodos();
  }
}
```

---

### 6. Application Types in NestJS

NestJS supports various application types out-of-the-box:

| Type                | Factory Method                              | Description                                              |
|---------------------|---------------------------------------------|----------------------------------------------------------|
| HTTP Server         | `NestFactory.create(AppModule)`             | Traditional RESTful API (Express/Fastify)                |
| Microservices       | `NestFactory.createMicroservice(AppModule)` | Microservice application using various transport layers  |
| Standalone App      | `NestFactory.createApplicationContext()`    | CLI tools, background workers, etc (no HTTP interface)   |

---

### 7. Routing and Parameters

**Path and Query Parameters:**

```typescript
@Get('items/:id')
getItem(@Param('id') id: string, @Query('showDetails') showDetails?: boolean) {
  // ...
}
```

---

### 8. Exception Filters, Pipes, Guards, and Interceptors

- **Exception Filters**: Customize how exceptions are handled.
- **Pipes**: Transform and validate input data.
- **Guards**: Control access to routes (e.g., authentication).
- **Interceptors**: Add extra logic before/after request handling.

---

### 9. Common NestJS CLI Commands

- `nest generate module <name>` / `nest g mo <name>`
- `nest generate controller <name>` / `nest g co <name>`
- `nest generate service <name>` / `nest g s <name>`

---

**Pro Tip:**  
Using NestJS CLI and following its conventions helps keep your app organized and maintainable.

---

# Arcitecture


## Flow of making a nest js application 

- create a module 
- controller classes to handle incoming request
- service classes in the module to handel bussiness logic 
- reposity classes to data access