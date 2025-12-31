# Typescirpt in React 



```ts

```


# hooks 

```ts 
// useFetch.ts

import {useEffect, useState} from "react";


// Let's break down this TypeScript code used in a React hook!
// The <T> you see in several places is called a "generic type parameter." 
// It allows the code to work with *any* data type (string, number, object, etc).

// This interface defines what our fetch state looks like, 
// but "T" means that `data` could be any type you choose when using this hook.
interface FetchState<T>{
    data: T | null;      // "data" will either be null or whatever type T you give to useFetch
    loading: boolean;    // shows if the fetch is in progress
    error: string;       // any error message, if there is one
}

// The hook itself is also "generic": useFetch<T>
// - T is a placeholder for the type of data you expect from the fetch.
// - url is the argument to fetch from.
// - It returns FetchState<T>, which means the state will automatically match the "T" you chose.
export function useFetch<T>(url: string): FetchState<T> {
    const [state, setState] = useState<FetchState<T>>({
        data: null,      // Starts as null (before fetch)
        loading: true,   // Starts as true (loading in progress)
        error: null      // Starts as no error
    });
    // ...more logic would go here to actually fetch the data
}

// Example usage:
// const { data, loading, error } = useFetch<User[]>('/api/users');
//   - Here, T is User[], so data will be an array of User or null.


```