import { NavLink } from "react-router-dom"

interface IProps {
  task: string
  onChangeHandler: (e: any) => void
}

const TaskSwitcher = ({ task, onChangeHandler }: IProps) => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 9,
        top: 0,
        right: 0,
        background: "rgba(255,255,255,0.8)",
        padding: "10px",
        margin: "5px",
        border: "1px solid black",
        borderRadius: "30%",
      }}
    >
      <NavLink to="/menu/home">Task1 (Menu)</NavLink>
      <br />
      <br />
      <NavLink to="/crud/posts">Task2 (Crud)</NavLink>
      {/* <br />
      <input type="radio" id="choice3" name="task" value="3" defaultChecked={task === "3"} onChange={onChangeHandler} />
      <label htmlFor="choice3">Task3</label> */}
    </div>
  )
}
export default TaskSwitcher
