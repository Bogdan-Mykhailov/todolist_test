import GlobalStyle from "./styles/GlobalStyles.ts"
import {AddTodo, ErrorNotification, Filter, Header, TodoList} from "./components"
import {FC, useCallback, useMemo, useState} from "react"
import {ErrorType, Task, TaskStatus} from "./types.ts"
import {getFilteredTodos} from "./utils/helpers.ts"
import {Wrapper} from "./App.styled.tsx"
import {addTodo, deleteTodo, updateTodo, useAppDispatch, useAppSelector} from "./services"

export const App: FC = () => {
  const todos = useAppSelector( state => state.todos.todos )
  const dispatch = useAppDispatch()
  const [error, setError] = useState( ErrorType.NONE )
  const [sortType, setSortType] = useState<TaskStatus>( TaskStatus.ALL )

  const handleRemoveError = useCallback( () => {
    setError( ErrorType.NONE )
  }, [] )

  const handleAddTodo = ( title: string ): void => {
    if ( !title.trim() ) {
      setError( ErrorType.EMPTY_TITLE )

      return
    }

    try {
      dispatch( addTodo( {title} ) )
    } catch ( error ) {
      setError( ErrorType.ADD )
    }
  }

  const handleUpdateTodo = ( id: number, updatedData: Partial<Task> ): void => {
    try {
      const todoToUpdate = todos.find( todo => todo.id === id )
      if ( todoToUpdate ) {
        const updatedTodo: Task = {...todoToUpdate, ...updatedData}
        dispatch( updateTodo( updatedTodo ) )
      }

    } catch ( error ) {
      setError( ErrorType.UPDATE )
    }
  }

  const activeTodosCount = useMemo( () =>
    todos.filter( todo => !todo.completed ).length
  , [todos] )

  const filteredTodos = useMemo( () =>
    getFilteredTodos( todos, sortType ),
  [todos, sortType] )

  const handleDeleteTodo = ( id: number ): void => {
    try {
      dispatch( deleteTodo( {id} ) )
    } catch ( error ) {
      setError( ErrorType.DELETE )
    }
  }

  const activeTodos = getFilteredTodos( todos, TaskStatus.ACTIVE )
  const completedTodos = getFilteredTodos( todos, TaskStatus.COMPLETED )

  const changeStatusForAll = useCallback( () => {

    activeTodos.map( ( { id } ) =>
      handleUpdateTodo( id, { completed: true } ) )

    if ( !activeTodos.length ) {

      completedTodos.map( ( { id } ) =>
        handleUpdateTodo( id, { completed: false } ) ,
      )
    }
  }, [completedTodos, activeTodos] )

  return <>
    <GlobalStyle/>
    <Header todos={todos}/>
    <Wrapper>
      <AddTodo
        todos={todos}
        onAddTodo={handleAddTodo}
        onChangeAllStatus={changeStatusForAll}
        activeTodosCount={activeTodosCount}
      />
      <TodoList
        todos={filteredTodos}
        onUpdateTodo={handleUpdateTodo}
        onDeleteTodo={handleDeleteTodo}
      />
      {
        todos.length !== 0 && <Filter
          onSetSortType={setSortType}
          todos={todos}
          sortType={sortType}
          onDeleteTodo={handleDeleteTodo}
          activeTodosCount={activeTodosCount}
        />
      }

      {error
        &&
        <ErrorNotification
          setError={setError}
          error={error}
          onRemoveError={handleRemoveError}
        />
      }
    </Wrapper>
  </>
}

