import logo from '../../assets/logo.png'
import {HeaderLogo, HeaderTasksCount, HeaderTitle, HeaderWrapper} from "./Header.styled.tsx"
import {FC} from "react"
import {useAppSelector} from "../../services"

export const Header: FC = () => {
  const todos = useAppSelector( state => state.todos.todos )
  const finishedTodosCount = todos.reduce( ( count, todo ) => {
    return todo.completed ? count + 1 : count
  }, 0 )

  return (
    <HeaderWrapper>
      <HeaderLogo src={logo} alt="Main logo"/>
      <HeaderTitle>MY TODOS</HeaderTitle>
      <HeaderTasksCount>Completed: {finishedTodosCount}</HeaderTasksCount>
    </HeaderWrapper>
  )
}
