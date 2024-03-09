import { Button } from "./Components/Button/Button"
import { Input } from "./Components/Input/Input"
import { PlusCircle, Trash } from "lucide-react"
import { useState } from "react"
import {v4 as uuidv4} from 'uuid'

type Todo = {
  id:  string;
  title: string
}

export default function App(){
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState<Todo[]>([])

  function createTodo(){
    if(todo.trim() !== ""){
      setTodos([{id: uuidv4(),title: todo}, ...todos])
      setTodo("")
    }
    
  }

  function deleteTodo(id: string){
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return(
    <div style={{ display:"flex", flexDirection:"column"}}>
      <div id="addTodo" style={{display: "flex" , flexDirection: "column", padding:100}}>
        <Input 
        placeholder="Digite uma tarefa"
        onChange={(event)=>setTodo(event.target.value)}
        value={todo}
        />
        <Button 
        title="Adicionar à lista de tarefas" 
        color="rgb(189, 43, 116)" 
        Icon={PlusCircle}
        onClick={createTodo}
        />
      </div>
      <div id="showTodos" style={{display:"flex", flexDirection:"column", padding:100}}>
        {todos.map((todo)=>(
          <div id="showTodo" key={todo.id}>
            {todo.title}
            <Button 
            color="rgb(189, 43, 116)"
            Icon={Trash}
            onClick={()=>deleteTodo(todo.id)}/>
        </div>
        ))}
      </div>
    </div>
  )
}