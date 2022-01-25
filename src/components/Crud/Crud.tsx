import axios from "axios"
import React, { useEffect, useState } from "react"
import { Navigate, NavLink, Route, Routes, useNavigate } from "react-router-dom"
import st from "./Crud.module.css"
import New from "./New"
import View from "./View"

const Crud = () => {
  const [input, setInput] = useState("")
  const [result, setResult] = useState([])

  const navigate = useNavigate()

  async function getdata() {
    try {
      const response = await axios.get("http://localhost:7777/posts")
      console.log("🚀 ~ file: CRUD.tsx ~ GETresponse", response)

      setResult([...response.data])
    } catch (error) {
      console.error(error)
    }
  }

  async function postData() {
    const body = {
      id: 0,
      content: input,
    }
    try {
      const response = await axios.post("http://localhost:7777/posts", body)
      console.log("🚀 ~ file: CRUD.tsx ~ POSTresponse", response)
      if (response) getdata()
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteData(id: string) {
    try {
      const response = await axios.delete(`http://localhost:7777/posts/${id}`)
      console.log("🚀 ~ file: CRUD.tsx ~ DELETEresponse", response)
      if (response) getdata()
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getdata()
  }, [])

  const inputChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    postData()
    setInput("")

    navigate(`/crud`)
  }

  const deleteHandler = (id: string, e: any) => {
    deleteData(id)
    e.stopPropagation()
    console.log("🚀 ~ file: Crud.tsx ~ line 66 ~ deleteHandler ~ e", e)
  }

  const viewHandler = (id: string, e: any) => {
    console.log("!!!", id)

    navigate(`/crud/posts/${id}`)
    // return (window.location.href = `/crud/posts/${id}`)
  }

  return (
    <>
      <Routes>
        <Route
          path="posts/new"
          element={<New input={input} inputChangeHandler={inputChangeHandler} submitHandler={submitHandler} />}
        />
        <Route path="posts/:id" element={<View result={result} deleteHandler={deleteHandler} />} />
      </Routes>
      <div className={st.body}>
        <div className={st.container}>
          <NavLink to="posts/new">
            <button type="button" className="button">
              Новое сообщение
            </button>
          </NavLink>
          <br />
          <br />
          <div className={st.result}>
            {result.map((item) => (
              <div key={item.id}>
                <br />
                <div key={item.id} className={st.navLink} onClick={(e) => viewHandler(item.id, e)}>
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
        </div>
      </div>
    </>
  )
}

export default Crud
