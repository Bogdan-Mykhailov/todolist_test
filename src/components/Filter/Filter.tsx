import {FC} from "react"
import {Task, TaskStatus} from "../../types.ts"
import {Nav, Link, Button, FilterWrapper} from './Filter.styled.tsx'

interface Props {
  todos: Task[]
  sortType: TaskStatus
  onSetSortType: ( sortType: TaskStatus ) => void
  onDeleteTodo: ( id: number ) => void
  completedTodos: Task[]
}

export const Filter: FC<Props> = ( {
  todos,
  sortType,
  onSetSortType,
  onDeleteTodo,
} ) => {
  const handleClearCompleted = (): void => {
    todos.forEach( ( { completed, id } ) => {
      return completed && onDeleteTodo( id )
    } )
  }
  return (
    <FilterWrapper>
      <Nav>
        <Link
          href={`#/${TaskStatus.ALL}`}
          className={sortType === TaskStatus.ALL ? 'selected' : ''}
          onClick={() => onSetSortType( TaskStatus.ALL )}
        >
          All
        </Link>

        <Link
          href={`#/${TaskStatus.ACTIVE}`}
          className={sortType === TaskStatus.ACTIVE ? 'selected' : ''}
          onClick={() => onSetSortType( TaskStatus.ACTIVE )}
        >
          Active
        </Link>

        <Link
          href={`#/${TaskStatus.COMPLETED}`}
          className={sortType === TaskStatus.COMPLETED ? 'selected' : ''}
          onClick={() => onSetSortType( TaskStatus.COMPLETED )}
        >
          Completed
        </Link>
      </Nav>

      <Button
        type='button'
        onClick={handleClearCompleted}
      >Clear completed
      </Button>
    </FilterWrapper>
  )
}
