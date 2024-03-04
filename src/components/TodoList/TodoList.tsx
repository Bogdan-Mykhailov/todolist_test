import {FC} from "react"
import {Task} from "../../types.ts"
import {List} from "./TodoList.styled.tsx"
import {TodoItem} from "../TodoItem"

interface Props {
  todos: Task[]
  onUpdateTodo: ( id: number, data: Partial<Task> ) => void
  onDeleteTodo: ( id: number ) => void
}

export const TodoList: FC<Props> = ( { todos, onUpdateTodo, onDeleteTodo } ) => {
  return (
    <List>
      {todos.map( ( todo ) =>
        <TodoItem
          key={todo.id}
          todo={todo}
          handleUpdateTodo={onUpdateTodo}
          onDeleteTodo={onDeleteTodo}
        />
      )}
    </List>
  )
}
