import logo from '../../assets/logo.png'
import {HeaderLogo, HeaderTasksCount, HeaderTitle, HeaderWrapper} from "./Header.styled.tsx"
import {FC} from "react"
import {Task} from "../../types.ts"

interface Props {
  todos: Task[]
}

export const Header: FC<Props> = ( {todos} ) => {

  const finishedTodosCount = todos.reduce( ( count, todo ) => {
    return todo.completed ? count + 1 : count
  }, 0 )

  return (
    <HeaderWrapper>
      <HeaderLogo src={logo} alt="Main logo"/>
      <HeaderTitle>TODOS</HeaderTitle>
      <HeaderTasksCount>Done: {finishedTodosCount}</HeaderTasksCount>
    </HeaderWrapper>
  )
}
