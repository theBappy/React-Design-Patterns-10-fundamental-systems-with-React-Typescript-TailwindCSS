import { useEffect, useState } from "react"
import useFetch from "./UseFetch";

interface Todo {
    id: number;
    title: string;
}


const WithoutCustomHooks = () => {
 const [data, loading, error] = useFetch<Todo[]>('https://jsonplaceholder.typicode.com/todos/')

 if(loading){
    return <p>Loading...</p>
 }
 if(error){
    return <p>Error fetching todos: {error.message}</p>
 }
  return (
    <div>
        {data && 
        data.map((item)=>{
           return <p key={item.id}>{item.title}</p> 
        })
        }
    </div>
  )
}

export default WithoutCustomHooks