import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { IData } from "../Crud"
import st from "../Crud.module.css"

interface IProps {
  isLoading: boolean
  result: IData[]
  deleteHandler: (id: number, e: any) => void
}

const AllPosts = ({ isLoading, result, deleteHandler }: IProps) => {
  const navigate = useNavigate()

  return (
    <div className={st.body}>
      <div className={st.container}>
        <NavLink to="new">
          <button type="button" className={st.buttonNew}>
            Новое сообщение
          </button>
        </NavLink>

        {isLoading ? (
          "Загрузка..."
        ) : (
          <div className={`${st.result} ${st.allPosts}`}>
            {result.map((item) => (
              <div key={item.id}>
                <br />
                <div key={item.id} className={st.navLink} onClick={() => navigate(`/crud/posts/${item.id}`)}>
                  <div className={st.item}>
                    <div>{new Date(item.created).toLocaleString()}</div>
                    <br />
                    <div>id: {item.id}</div>
                    <br />
                    <div>
                      сообщение: <div>{item.content}</div>
                    </div>
                    <span className={st.itemСlose} onClick={(e) => deleteHandler(item.id, e)}>
                      X
                    </span>
                  </div>
                </div>
                <br />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default AllPosts
