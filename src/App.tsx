import { useState } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import "./App.css"
import Crud from "./components/Crud"
import MenuTask from "./components/MenuTask"
import TaskSwitcher from "./components/TaskSwitcher"

const App = () => {
  const [task, setTask] = useState("1")

  const handler = (e: any) => {
    setTask(e.target.value)
  }

  return (
    <>
      <Routes>
        <Route path="/menu/*" element={<MenuTask />} />
        <Route path="/crud/*" element={<Crud />} />
        <Route path="*" element={<Navigate to="/menu/home" />} />
      </Routes>
      <TaskSwitcher task={task} onChangeHandler={handler} />
      {/* {task == "2" && <Crud />} */}
      {task == "3" && <>Task 3</>}
    </>
  )
}

export default App
