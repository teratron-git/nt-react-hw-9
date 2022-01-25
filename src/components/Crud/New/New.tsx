import axios from "axios"
import React, { useEffect, useState } from "react"
import { Navigate, NavLink } from "react-router-dom"
import st from "../Crud.module.css"

const New = ({ input, submitHandler, inputChangeHandler }: any) => {
  return (
    <div className={st.body}>
      <div className={st.container}>
        <form className={st.form} onSubmit={submitHandler}>
          <NavLink to="/crud" className={st.itemСloseNew}>
            X
          </NavLink>
          <textarea name="input" id="input" cols={60} rows={20} value={input} onChange={inputChangeHandler} />
          <input className={st.buttonCrud} type="submit" name="button" id="button" value="Добавить" disabled={!input} />
        </form>
      </div>
    </div>
  )
}

export default New
