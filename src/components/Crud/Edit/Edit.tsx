import { NavLink } from "react-router-dom"
import st from "../Crud.module.css"

interface IProps {
  submitEditHandler: (id: number, e: any) => void
  editContentChangeHandler: (e: any) => void
  editContent: { id: number; content: string }
}

const Edit = ({ submitEditHandler, editContentChangeHandler, editContent }: IProps) => {
  return (
    <div className={st.body}>
      <div className={st.container}>
        <h2>Редактирование сообщения с id {editContent.id}</h2>
        <br />
        <form className={st.form} onSubmit={(e) => submitEditHandler(editContent.id, e)}>
          <NavLink to="/crud/posts" className={st.itemСloseNew}>
            X
          </NavLink>
          <textarea name="input" id="input" cols={60} rows={20} value={editContent.content} onChange={editContentChangeHandler} />
          <input
            className={st.buttonCrud}
            type="submit"
            name="button"
            id="button"
            value="Сохранить"
            disabled={!editContent.content}
          />
        </form>
      </div>
    </div>
  )
}

export default Edit
