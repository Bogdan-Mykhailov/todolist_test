import GlobalStyle from "./styles/GlobalStyles.ts"
import {Header} from "./components"
import {FC} from "react"
import {AddTodo} from "./components/AddTodo"

export const App: FC = () =>
  <>
    <GlobalStyle/>
    <Header/>
    <AddTodo />
  </>

