import { ReactNode } from 'react'
import { TwStyle } from 'twin.macro'

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  type?: 'button' | 'submit' | 'reset' | undefined
  styleButton?: TwStyle
  isloading?: boolean
  onClick?: () => void
  kind?: 'primary' | 'secondary' | 'outline' | undefined
}

export interface ICard {
  index?: number
  img?: string
  category?: string
  title?: string
  desc?: string
  socialIcon?: string[]
  link?: string
  css?: {}
  children?: ReactNode
  props?: ReactNode
}
export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string
  placeholder?: string
  styleInput?: TwStyle
}
export interface ITextarea
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string
  styleInput?: TwStyle
}
