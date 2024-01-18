import React, { useEffect, useState } from 'react'
import { Description } from '../../components'
import tw from 'twin.macro'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux-toolkit/configureStore'
import { ITodo, removeTodo, toggleTodo } from '../../redux-toolkit/todoSlice'

const ToDoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos)
  const dispatch = useDispatch()
  return (
    <>
      {todos?.length > 0 && (
        <div tw="w-[60%]  mx-auto flex flex-col gap-y-2">
          {todos.map(todo => (
            <div
              key={todo.id}
              tw="w-full h-[52px] flex items-center justify-between rounded-[8px] border border-solid border-[#D9DDFE] px-[30px]"
            >
              <div tw="flex">
                <input
                  onChange={() => dispatch(toggleTodo(todo.id))}
                  type="checkbox"
                  defaultChecked={todo.completed}
                  tw="mr-5 w-5 cursor-pointer"
                />
                <Description tw="m-0 w-fit">{todo.text}</Description>
              </div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                tw="bg-transparent cursor-pointer"
              >
                <img
                  tw="w-[36px]"
                  src="/assets/icons/common/delete-left-svgrepo-com.png"
                  alt="delete task"
                />
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default ToDoList
