import axios from "axios"
import React, { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import AllPosts from "./AllPosts"
import Edit from "./Edit"
import New from "./New"
import View from "./View"

export interface IData {
  id: number
  content: string
  created: string
}

const Crud = () => {
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<IData[]>([])
  const [editContent, setEditContent] = useState({ id: null, content: "" })

  const navigate = useNavigate()

  async function getdata() {
    setIsLoading(true)
    try {
      const response = await axios.get("http://localhost:7777/posts")
      setIsLoading(false)
      setResult([...response.data])
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
  }

  async function postData(id = 0) {
    setIsLoading(true)
    const body = {
      id,
      content: input || editContent?.content,
    }
    try {
      const response = await axios.post("http://localhost:7777/posts", body)
      if (response) getdata()
      setIsLoading(false)
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
  }

  async function deleteData(id: number) {
    setIsLoading(true)
    try {
      const response = await axios.delete(`http://localhost:7777/posts/${id}`)
      if (response) getdata()
      setIsLoading(false)
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getdata()
  }, [])

  const inputChangeHandler = (e: any) => {
    setInput(e.target.value)
  }

  const editContentChangeHandler = (e: any) => {
    setEditContent({ ...editContent, content: e.target.value })
  }

  const submitHandler = (e: any) => {
    e.preventDefault()
    postData()
    setInput("")

    navigate(`/crud/posts`)
  }

  const submitEditHandler = (id: number, e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    postData(id)

    navigate(`/crud/posts`)
  }

  const deleteHandler = (id: number, e: any) => {
    deleteData(id)
    setResult([])
    e.stopPropagation()
  }

  const editHandler = (id: number, content: string) => {
    setEditContent({ id, content })

    navigate(`/crud/posts/edit/${id}`)
  }

  return (
    <Routes>
      <Route path="posts" element={<AllPosts result={result} isLoading={isLoading} deleteHandler={deleteHandler} />} />
      <Route
        path="posts/new"
        element={<New input={input} inputChangeHandler={inputChangeHandler} submitHandler={submitHandler} />}
      />
      <Route
        path="posts/edit/:id"
        element={
          <Edit
            editContentChangeHandler={editContentChangeHandler}
            submitEditHandler={submitEditHandler}
            editContent={editContent}
          />
        }
      />
      <Route path="posts/:id" element={<View result={result} deleteHandler={deleteHandler} editHandler={editHandler} />} />
    </Routes>
  )
}

export default Crud
