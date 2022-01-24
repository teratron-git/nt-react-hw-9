import { useState } from "react"
import { BrowserRouter } from "react-router-dom"
import "./App.css"
import MenuTask from "./components/MenuTask"
import TaskSwitcher from "./components/TaskSwitcher"

const App = () => {
  const [task, setTask] = useState("1")

  const handler = (e: any) => {
    setTask(e.target.value)
  }

  return (
    <>
      <TaskSwitcher task={task} onChangeHandler={handler} />

      {task == "1" && <MenuTask />}

      {/* {task == "2" && <Steps />} */}

      {task == "3" && <>Task 3</>}
    </>
  )
}

export default App
