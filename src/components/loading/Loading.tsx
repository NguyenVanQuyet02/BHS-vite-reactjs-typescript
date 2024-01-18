import React from 'react'
import tw, { TwStyle } from 'twin.macro'

const StyleLoading = tw.div`
    w-[26px]
    h-[26px]
    rounded-full
    border-[4px]
    border-t-transparent
    ease-linear
    animate-spin
`

const Loading = ({ styleLoading }: { styleLoading?: TwStyle }) => {
  return <StyleLoading css={[styleLoading]}></StyleLoading>
}

export default Loading
