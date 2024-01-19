import React, { useEffect } from 'react'
import { Layout } from '../layouts'
import tw from 'twin.macro'
import { Button, Container, Label } from '../components'

// redux core
import { ToDoForm, ToDoList } from '../modules/todolist/todolist-redux-core'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux-core/ConfigureStore'
import { useNavigate } from 'react-router-dom'
import { deleteToken } from 'redux-core/auth'

// redux-toolkit
// import { ToDoForm, ToDoList } from '../modules/todolist'

const ToDoListPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state?.auth)
  useEffect(() => {
    if (token === "" || token.length <= 0) {
      navigate("/signin");
    }
  }, [token])
  return (
    <Layout>
      <Container tw="my-24 flex flex-col items-center gap-y-6">
        <section tw="w-full min-h-[380px] bg-white rounded-2xl border border-secondary px-12 py-4 text-center">
          <Label>ToDo List</Label>
          <ToDoForm />
          <ToDoList />
        </section>
        <Button onClick={()=>{
          dispatch(deleteToken())
          navigate("/signin");
        }}>Sign out</Button>
      </Container>
    </Layout>
  )
}

export default ToDoListPage
