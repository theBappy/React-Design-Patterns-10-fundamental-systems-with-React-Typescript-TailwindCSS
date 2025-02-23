import axios from "axios"
import TodoList from "./components/ContainerComponents/TodoList"
import DataSource from "./shared/DataSource"
import CommentsList from "./components/ContainerComponents/CommentsList"

const getServerData = (url: string)=> async () => {
    const response = await axios.get(url)
    return response.data
}

const App = () => {

  return (
    <>
        <DataSource getDataFunc={getServerData("https://jsonplaceholder.typicode.com/todos/1")} resourceName='todo'>
            <TodoList />
        </DataSource>

        <br />
        <hr />

        <DataSource getDataFunc={getServerData("https://jsonplaceholder.typicode.com/comments/1")} resourceName='comments'>
            <CommentsList />
        </DataSource>


    </>
  )
}

export default App