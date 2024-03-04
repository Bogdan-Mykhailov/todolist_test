import logo from '../../assets/logo.png'
import {HeaderLogo, HeaderTasksCount, HeaderTitle, HeaderWrapper} from "./Header.styled.tsx"
import { FC } from "react"


export const Header: FC = () => {
  return (
    <HeaderWrapper>
      <HeaderLogo src={logo} alt="Main logo"/>
      <HeaderTitle>My TODO's</HeaderTitle>
      <HeaderTasksCount>Done: 3</HeaderTasksCount>
    </HeaderWrapper>
  )
}
