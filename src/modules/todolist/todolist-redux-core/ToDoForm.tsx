import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import tw from 'twin.macro'

// redux core
import { addtodo } from '../../../redux-core/todo'

// toolkit
// import { addTodo } from '../../redux-toolkit/todoSlice'

const ToDoForm = () => {
  const [todo, setTodo] = useState('')
  const disatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo.trim() !== '') {
      disatch(addtodo(todo))
      setTodo('')
    }
  }
  return (
    <div tw="flex items-center mx-auto w-[60%] h-[52px] sm:h-[48px] shrink-0 rounded-[8px] border border-solid border-[#D9DDFE] bg-white mt-[13px] mb-[7px]">
      <input
        value={todo}
        onChange={e => setTodo(e.target.value)}
        tw="flex-1 h-full px-[30px] text-[#C5C5C5] text-[16px] rounded-tl-[25px] rounded-bl-[25px] font-normal [font-weight: 400] leading-normal tracking-[1.6px] sm:text-[12px] sm:px-[14px]"
        type="text"
        placeholder="Add new task ..."
      />
      <button
        onClick={handleSubmit}
        tw="w-[90px] sm:w-[60px] h-full shrink-0 rounded-tr-[8px] rounded-br-[8px] bg-pink flex justify-center items-center text-white [font-weight: 600] text-[16px] tracking-[1.6px]"
      >
        Add
      </button>
    </div>
  )
}

export default ToDoForm
