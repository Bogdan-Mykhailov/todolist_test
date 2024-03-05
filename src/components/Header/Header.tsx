import logo from '../../assets/logo.png'
import {
  HeaderLogo,
  HeaderTasksCount,
  HeaderTitle,
  HeaderWrapper,
} from './Header.styled.tsx'
import { FC } from 'react'
import { useAppSelector } from '../../services'

export const Header: FC = () => {
  const todos = useAppSelector( ( state ) => state.todos.todos )
  const finishedTodosCount = todos.filter( ( todo ) => todo.completed ).length

  return (
    <HeaderWrapper>
      <HeaderLogo src={logo} alt="Main logo"/>
      <HeaderTitle>MY TODOS</HeaderTitle>
      <HeaderTasksCount>Completed: {finishedTodosCount}</HeaderTasksCount>
    </HeaderWrapper>
  )
}
