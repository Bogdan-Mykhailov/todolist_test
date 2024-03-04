import {ChangeEvent, FC, KeyboardEvent, useEffect, useRef, useState} from "react"
import {AddTodoWrapper, Button, Input} from "./AddTodo.styled.tsx"
import {Task} from "../../types.ts"
import arrowDown from '../../assets/chevron-down-solid.svg'

interface Props {
  todos: Task[]
  onAddTodo: ( query: string ) => void
  onChangeAllStatus: () => void
  activeTodosCount: number
}

export const AddTodo: FC<Props> = ( {todos, onAddTodo, onChangeAllStatus, activeTodosCount} ) => {
  const [title, setTitle] = useState( '' )
  const inputRef = useRef<HTMLInputElement>( null )

  const handleTitleChange = ( event: ChangeEvent<HTMLInputElement> ): void => {
    setTitle( event.target.value )
  }

  const handleAddTodo = ( event: KeyboardEvent<HTMLInputElement> ): void => {
    if ( event.key === 'Enter' ) {
      onAddTodo( title )
      setTitle( '' )
    }
  }

  useEffect( () => {
    if ( inputRef.current !== null ) {
      inputRef.current.focus()
    }
  }, [] )

  return (
    <AddTodoWrapper>
      {todos.length !== 0 &&
        <Button
          className={!activeTodosCount ? 'completed' : ''}
          src={arrowDown}
          alt='Arrow down'
          onClick={onChangeAllStatus}
        />
      }
      <Input
        onKeyUp={handleAddTodo}
        type="text"
        placeholder='What needs to be done?'
        value={title}
        onChange={handleTitleChange}
        ref={inputRef}
      />
    </AddTodoWrapper>
  )
}
