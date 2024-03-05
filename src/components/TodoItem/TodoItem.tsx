import {ChangeEvent, FC, FormEvent, KeyboardEvent, useEffect, useRef, useState} from "react"
import {Task} from "../../types.ts"
import {
  Checkbox,
  Container,
  EditInput,
  ListItem,
  RegularIcon,
  SolidIcon,
  TodoWrapper,
  Xmark
} from "./TodoItem.styled.tsx"
import xmark from '../../assets/xmark-solid.svg'
import regular from '../../assets/regular.svg'
import solid from '../../assets/solid.svg'

interface Props {
  todo: Task
  handleUpdateTodo: ( id: number, data: Partial<Task> ) => void
  onDeleteTodo: ( id: number ) => void
}

export const TodoItem: FC<Props> = ( {todo, handleUpdateTodo, onDeleteTodo} ) => {
  const {id, title, completed} = todo
  const [isEdit, setIsEdit] = useState( false )
  const [changeTitle, setChangeTitle] = useState( title )
  const inputRef = useRef<HTMLInputElement>( null )
  const [isHovered, setIsHovered] = useState( false )

  useEffect( () => {
    if ( inputRef.current !== null ) {
      inputRef.current.focus()
    }
  }, [isEdit] )

  const handleIsCompletedChange = (): void => {
    handleUpdateTodo( id, {completed: !completed} )
  }

  const handleTitleChange = ( event: ChangeEvent<HTMLInputElement> ): void => {
    setChangeTitle( event.target.value )
  }

  const handleEditChange = (): void => {
    setIsEdit( isEdit => !isEdit )
  }

  const closeEditMode = ( event: KeyboardEvent<HTMLInputElement> ): void => {
    if ( event.key === 'Enter' ) {
      if ( !changeTitle.trim() ) {
        onDeleteTodo( id )
      } else {
        handleUpdateTodo( id, {title: changeTitle} )
        setIsEdit( false )
      }
    }
  }

  const handleTitleUpdate = ( event: FormEvent ): void => {
    event.preventDefault()
    if ( !changeTitle.trim() ) {
      onDeleteTodo( id )
    } else if ( title !== changeTitle ) {
      handleUpdateTodo( id, {title: changeTitle} )
      setIsEdit( false )
    }

    setIsEdit( false )
  }

  return (
    <TodoWrapper
      onMouseEnter={() => setIsHovered( true )}
      onMouseLeave={() => setIsHovered( false )}
    >
      <Container>
        <Checkbox
          type="checkbox"
          checked={completed}
          onChange={handleIsCompletedChange}
        />
        <RegularIcon
          className={completed ? 'completed' : ''}
          src={regular}
          alt="Check box regular icon"
        />
        <SolidIcon
          className={completed ? 'completed' : ''}
          src={solid}
          alt="Check box solid icon"
        />
      </Container>
      {isEdit
        ? <EditInput
          onKeyUp={closeEditMode}
          value={changeTitle}
          onBlur={handleTitleUpdate}
          onChange={handleTitleChange}
          type="text"
          placeholder='Empty todo will be deleted'
          ref={inputRef}
        />
        : <>
          <ListItem
            className={completed ? 'completed' : ''}
            onDoubleClick={handleEditChange}
          >
            {title}
          </ListItem>
          {isHovered &&
            <Xmark
              src={xmark}
              alt='Remove task'
              onClick={() => onDeleteTodo( id )}
            />
          }
        </>
      }
    </TodoWrapper>
  )
}
