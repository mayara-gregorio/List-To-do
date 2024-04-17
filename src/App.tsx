import { Button } from "./Components/Button/Button"
import { Input } from "./Components/Input/Input"
import { Check, PlusCircle, Trash } from "lucide-react"
import { useEffect, useState } from "react"
import {v4 as uuidv4} from 'uuid'

type Todo = {
  id:  string;
  title: string;
  done: boolean
}

export default function App(){
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState<Todo[]>([])

  function createTodo(){
    if(todo.trim() !== ""){
      setTodos([{id: uuidv4(),title: todo, done:false}, ...todos])
      setTodo("")
    }
    
  }

  function deleteTodo(id: string){
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function doneToDo(id: string){
    setTodos(todos.map(todo => {
      if(todo.id === id){
        return {...todo, done:!todo.done}
      }
      return todo
    }))
  }

  useEffect(()=>{
    const toDoDone = todos.filter(todo => todo.done)
    const toDoNotDone = todos.filter(todo => !todo.done)
    setTodos([...toDoNotDone, ...toDoDone])
  }, [todos])

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
          <div id="showTodo" key={todo.id} style={{textDecoration: todo.done? 'line-through' : 'none'}}>
            <p>{todo.title}</p>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", gap:"10px"}}>
              <Button
              color="red"
              Icon={Check}
              onClick={()=>doneToDo(todo.id)}
              />
              <Button 
              color="rgb(189, 43, 116)"
              Icon={Trash}
              onClick={()=>deleteTodo(todo.id)}/>
            </div>
        </div>
        ))}
      </div>
    </div>
  )
}