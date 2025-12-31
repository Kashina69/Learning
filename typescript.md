# Typescript

<!-- first 30 min  -->

Lexer -> Pasrser -> AST -> Binder -> [ symbol tables, parent pointer, flow nodes ] -> checker (syntax check , short circuit ) -> emmiter -> [ .js, .d.ts, .map ] 

## Installation 

```bash
npm init -y 
npm i -D typescript
npx tsc --init // makes tsconfig.json
npx tsc // compilation in dist/ 

npm i -D @types/library-name // used to install types of any library as a dev dependency 

```
<!-- first 44 min -->

1) union 
2) Any


<!-- first 1 hr  -->

<!-- after 1hr  -->

1) Unknown 
2) type narrowing 
3) type guards 1:23:00

<!-- after 1:23  -->
never type 

2) forcefull type accertion 

```ts
let response: any = "42";

let numbericLength:number = (response as string).length

const inputElement = document.getElementById("username") as HTMLInputElement

```

3) any 
4) unknown

<!-- after 1:40 -->

1) interface

```ts 
type ChaiOrder = {type: string; sugar: number; strong: boolean }

function makeChai(order: ChaiOrder){
    console.log(order)
}

function serveChai(order: ChaiOrder){
    console.log(order);
}

interface ChaiOrder {
    type: string; sugar: number; strong: boolean 
}

// preffered to be used in case of object or class rather then using type 
```


<!-- after 2 hours -->

1) Objects

```ts 

let tea: {
    name: string;
    price: number;
    isHot: boolean;
}

tea = {
    name: "Ginger Tea",
    price: 25,
    isHot: true
}



```



<!-- 3:29:29 -->

<!-- type diclaration and web request -->

