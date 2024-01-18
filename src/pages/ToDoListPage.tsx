import React from 'react'
import { Layout } from '../layouts'
import tw from 'twin.macro'
import { Container, Label } from '../components'

// redux core
import { ToDoForm, ToDoList } from '../modules/todolist/todolist-redux-core'

// redux-toolkit
// import { ToDoForm, ToDoList } from '../modules/todolist'

const ToDoListPage = () => {
  return (
    <Layout>
      <Container tw="my-24">
        <section tw="w-full min-h-[380px] bg-white rounded-2xl border border-secondary px-12 py-4 text-center">
          <Label>ToDo List</Label>
          <ToDoForm />
          <ToDoList />
        </section>
      </Container>
    </Layout>
  )
}

export default ToDoListPage
