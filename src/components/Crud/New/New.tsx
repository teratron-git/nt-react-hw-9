import { NavLink } from "react-router-dom"
import st from "../Crud.module.css"

interface IProps {
  input: string
  submitHandler: (e: any) => void
  inputChangeHandler: (e: any) => void
}

const New = ({ input, submitHandler, inputChangeHandler }: IProps) => {
  return (
    <div className={st.body}>
      <div className={st.container}>
        <form className={st.form} onSubmit={(e) => submitHandler(e)}>
          <NavLink to="/crud/posts" className={st.itemСloseNew}>
            X
          </NavLink>
          <textarea name="input" id="input" cols={60} rows={20} value={input} onChange={(e) => inputChangeHandler(e)} />
          <input className={st.buttonCrud} type="submit" name="button" id="button" value="Добавить" disabled={!input} />
        </form>
      </div>
    </div>
  )
}

export default New
