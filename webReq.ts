import axios , {type AxiosResponse } from "axios"


// const response = await axios.get("http://jsonplaceholder.typicode.com/todos/1")
// console.table(response.data)

axios.get("http://jsonplaceholder.typicode.com/todos/1").then(response=>console.log(response.data))

