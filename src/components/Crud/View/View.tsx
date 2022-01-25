import axios from "axios"
import React, { useEffect, useState } from "react"
import { Navigate, NavLink, useLocation, useMatch, useNavigate, useParams } from "react-router-dom"
import st from "../Crud.module.css"

const View = (props: any) => {
  const navigate = useNavigate()
  console.log("🚀 ~ file: View.tsx ~ line 7 ~ View ~ props", props)
  const { id } = useParams()
  console.log("🚀 ~ file: View.tsx ~ line 8 ~ View ~ temp", id)

  const data = props.result.filter((item: any) => item.id == id)
  console.log("🚀 ~ file: View.tsx ~ line 11 ~ View ~ data", data[0])
  !data[0] && navigate("/crud")

  return (
    <div className={st.body}>
      <div className={st.container}>
        <div className={st.result}>
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
        <NavLink to="posts/new" className={st.navLink}>
          <button type="button" className={st.buttonDelete}>
            Сохранить
          </button>
        </NavLink>
        <NavLink to="/crud" className={st.navLink}>
          <button type="button" className={st.buttonDelete} onClick={() => props.deleteHandler(data[0]?.id)}>
            Удалить
          </button>
        </NavLink>
      </div>
    </div>
  )
}

export default View
