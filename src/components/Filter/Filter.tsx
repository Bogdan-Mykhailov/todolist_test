import {FC} from "react"
import {TaskStatus} from "../../types.ts"
import {Nav, Link, Button, FilterWrapper, ActiveTodosCounter} from './Filter.styled.tsx'
import {useAppSelector} from "../../services"

interface Props {
  sortType: TaskStatus
  onSetSortType: ( sortType: TaskStatus ) => void
  onDeleteTodo: ( id: number ) => void
  activeTodosCount: number
}

export const Filter: FC<Props> = ( {
  sortType,
  onSetSortType,
  onDeleteTodo,
  activeTodosCount
} ) => {
  const todos = useAppSelector( state => state.todos.todos )
  const handleClearCompleted = (): void => {
    todos.forEach( ( { completed, id } ) => {
      return completed && onDeleteTodo( id )
    } )
  }

  const correctTitle = `${activeTodosCount} ${
    activeTodosCount === 1
      ? 'item'
      : 'items'} left`

  return (
    <FilterWrapper>
      <ActiveTodosCounter>
        {correctTitle}
      </ActiveTodosCounter>
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
