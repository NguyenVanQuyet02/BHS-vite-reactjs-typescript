import tw, { styled } from 'twin.macro'

interface ButtonProps {
  $variant?: 'primary' | 'secondary' | 'outline'
  $isSmall?: boolean
}

const Button = styled.button<ButtonProps>(
  ({ $variant = 'primary', $isSmall }) => [
    tw`px-[40px] h-[52px] shrink-0 rounded-[50px] shadow-sdbutton text-white text-[16px] sm:text-[12px] [font-weight: 600] border-transparent leading-normal tracking-[1.6px] box-border cursor-pointer`,

    tw`hocus:(bg-[#f887be])`,

    $variant === 'primary' && tw`bg-pink`,
    $variant === 'secondary' && [
      tw`flex items-center justify-center shadow-none p-0 bg-transparent text-secondary`,
    ],
    $variant === 'outline' &&
      tw`w-full h-[52px] shrink-0 rounded-[15px] border border-solid border-white shadow-none bg-transparent text-[16px] [font-weight: 600] tracking-[1.6px] leading-normal`,
  ],
)

export default Button
