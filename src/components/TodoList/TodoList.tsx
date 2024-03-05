import { FC, useMemo } from 'react'
import { Task, TaskStatus } from '../../types.ts'
import { List } from './TodoList.styled.tsx'
import { TodoItem } from '../TodoItem'
import { getFilteredTodos } from '../../utils/helpers.ts'
import { useAppSelector } from '../../services'

interface Props {
  onUpdateTodo: ( id: number, data: Partial<Task> ) => void
  onDeleteTodo: ( id: number ) => void
  sortType: TaskStatus
}

export const TodoList: FC<Props> = ( {
  onUpdateTodo,
  onDeleteTodo,
  sortType,
} ) => {
  const todos = useAppSelector( ( state ) => state.todos.todos )
  const filteredTodos = useMemo( () => getFilteredTodos( todos, sortType ),
    [todos, sortType] )
  return (
    <List>
      {filteredTodos.map( ( todo ) => <TodoItem
        key={todo.id}
        todo={todo}
        handleUpdateTodo={onUpdateTodo}
        onDeleteTodo={onDeleteTodo}
      /> )}
    </List>
  )
}
