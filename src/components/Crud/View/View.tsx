import { NavLink, useNavigate, useParams } from "react-router-dom"
import { IData } from "../Crud"
import st from "../Crud.module.css"

interface IProps {
  result: IData[]
  deleteHandler: (id: number, e: any) => void
  editHandler: (id: number, content: string) => void
}

const View = ({ result, editHandler, deleteHandler }: IProps) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const data = result.filter((item: any) => item.id == id)
  !data[0] && navigate("/crud/posts")

  return (
    <div className={st.body}>
      <div className={st.container}>
        <h2>Просмотр одного сообщения</h2>
        <NavLink to="/crud/posts">Вернуться ко всем соообщениям</NavLink>
        <div className={`${st.result}  ${st.view}`}>
          <div className={st.item}>
            <div>{new Date(data[0]?.created).toLocaleString()}</div>
            <br />
            <div>id: {data[0]?.id}</div>
            <br />
            <div>
              сообщение: <div>{data[0]?.content}</div>
            </div>
          </div>
        </div>
        <div className={st.buttons}>
          <NavLink to={`/crud/posts/edit/${data[0]?.id}`} className={st.navLink}>
            <button type="button" className={st.buttonEdit} onClick={() => editHandler(data[0]?.id, data[0]?.content)}>
              Изменить
            </button>
          </NavLink>
          <NavLink to="/crud/posts" className={st.navLink}>
            <button type="button" className={st.buttonDelete} onClick={(e) => deleteHandler(data[0]?.id, e)}>
              Удалить
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default View
