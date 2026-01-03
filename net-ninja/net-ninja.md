# 4 Providers (services)

Logics lives here

Are just a class with a `@Injectable()` decorater

the provider can be injected into any class that depends on it

```ts
// ninjas.service.ts
@Injectable()
export class NinjaService {
  private ninja = [
    { id: 1, name: "Naruto", wepon: "Kunai" },
    { id: 2, name: "Sasuke", wepon: "Sword" },
    { id: 3, name: "Sakura", wepon: "Gloves" },
  ];

  getNinjas(weapon?: "stars" | "nunchucks") {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }

    return this.ninjas;
  }
}
```

### Use of a service

```ts
import NinjaService from "./ninja.service";
@Constroller("ninja")
export class NinjaController {
  constructor(private readonly ninjaService: NinjaService) {}

  @Get(":id")
  getOneNinja(@Param("weapon") weapon: string) {
    return this.ninjaService.getNinja(parseInt(weapon));
  }
}
```

# DTO file

Are baiscally types file for validation on the data format of the body 

# 5 Exception Handling

Nest of bunch of built in classes for exection handeling and throwing errors check on `docs.nestjs.com/exception-filters`

```ts
@Get(':id')
getOneNinja(@Param('weapon') weapon: string){
    try {
        return this.ninjaService.getNinja(parseInt(weapon))
    } catch (error) {
        throw new NotFoundException(); // you have to import it from nest js 
    }
}

```

And there is also a @Catch(eception) exception handeling decorator 

# 6 Pipes 

create-ninja.dto.ts

import { InEnum, MinLength } from 'class-validator';

export clas CreateNinjaDto {
    @MinLength(3)
    name: string;

    @IsEnum(['stars', 'nunchucks'], {message:'Use correct wepons'})
    weapon: 'start' | 'nunchucks';
}


@Post()
createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto){
    this.ninjaService.createNinja(createNinjaDto)
}


# 7 Guard

<!-- ninja.guard.ts -->

```ts 
import { CanActivate, ExecutionContext, Injectabel } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectabel()
export class BeltGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();

        const cookies = request.headers.cookie;
        if (!cookies) return false;

        // Extract the JWT token from cookie string (assuming cookie name is 'jwt')
        const jwtMatch = cookies.match(/(?:^|; )jwt=([^;]*)/);
        if (!jwtMatch) return false;
        const token = jwtMatch[1];

        // Decrypt/verify JWT token
        const jwt = require('jsonwebtoken');
        let payload;
        try {
            payload = jwt.verify(token, 'secret'); // Replace 'secret' with your actual secret key
        } catch (err) {
            return false;
        }

        // Check if payload has belt
        return payload && payload.belt === true;
        // validation logic to give access 
        return true;
    }
}
```
```ts 
// ninjas.controller.ts

@Post()
@UseGuards(BeltGurad)
createNinja(){
    return 1;
}
```