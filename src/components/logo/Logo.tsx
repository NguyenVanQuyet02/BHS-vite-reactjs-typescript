import React from 'react'
import tw, { TwStyle } from 'twin.macro'

const Logo = ({
  theme = 'light',
  styleLogo,
  link = '#',
}: {
  theme?: 'dark' | 'light' | undefined
  styleLogo?: TwStyle
  link?: string
}) => (
  <a
    css={[styleLogo]}
    tw="block w-auto h-auto"
    href={link}
    target="_self"
    rel="noopener noreferrer"
  >
    <img
      tw="flex items-center justify-center max-w-[258px] h-auto shrink-0 object-contain"
      src={
        theme === 'dark'
          ? 'public/assets/imgs/common/main_logo_white.png'
          : 'public/assets/imgs/common/Main_Logo.svg'
      }
      alt="logo"
    />
  </a>
)

export default Logo
