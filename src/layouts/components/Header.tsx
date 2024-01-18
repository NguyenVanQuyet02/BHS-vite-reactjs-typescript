import React, { useState } from 'react'
import { disableScroll, enableScroll } from '../../utils/handleShowMenuHeader'
import scrollFunction from '../../utils/scrollFunction'
import { Button, Container, Logo } from '../../components'
import { Link, NavLink } from 'react-router-dom'
import tw, { css } from 'twin.macro'
// import Test from './assets/test.svg'

import {
  stylesDropdownHomeHeader,
  stylesLiHeader,
  stylesLinkHeader,
  stylesNav,
} from '../../styles/Styles'

type PropsHeader = {
  theme?: 'dark' | 'light' | undefined
}

const listMenuHeader = [
  {
    index: 1,
    href: '/',
    title: 'Home 1 page',
  },
  {
    index: 2,
    href: '/home2',
    title: 'Home 2 page',
  },
  {
    index: 3,
    href: '/about',
    title: 'About page',
  },
  {
    index: 4,
    href: '/service',
    title: 'Service page',
  },
  {
    index: 5,
    href: '/signin',
    title: 'Sign in',
  },
  {
    index: 6,
    href: '/signup',
    title: 'Sign up',
  },

]
const Header: React.FC<PropsHeader> = ({ theme = 'light' }) => {
  // // handle show menu into header
  function handleShowMenuHeader(): void {
    const menu = document.getElementById('menu')
    menu?.classList.toggle('active')
    if (menu?.classList.contains('active')) {
      setShowMenuHome(false)
      disableScroll()
    } else {
      enableScroll()
    }
  }
  const [showMenuHome, setShowMenuHome] = useState(false)
  const handleShowMenuHome = () => {
    setShowMenuHome(!showMenuHome)
  }
  // handle show btn to top when scroll
  window.onscroll = function (): void {
    scrollFunction()
  }

  return (
    <Container tw="lg:max-w-full pt-[41px]">
      <header tw="w-full h-[63px] flex items-center justify-between md:m-0 md:p-0 relative sm:p-0">
        <Logo theme={theme} />
        <button
          tw="hidden md_max:flex md_max:items-center md_max:justify-center md_max:z-50"
          onClick={handleShowMenuHeader}
        >
          <svg
            tw="text-pink w-[52px] h-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div id="menu" tw="md_max:absolute md_max:hidden w-fit h-full">
          <nav css={stylesNav} tw='md_max:(w-full h-fit max-h-[640px] overflow-y-auto)'>
            <ul tw="w-fit flex items-center justify-center list-none lg:mr-[51px] md_max:w-full md_max:m-0 md_max:flex-col">
              <li css={[stylesLiHeader, tw`lg:mr-[44px] relative`]}>
                <NavLink
                  to="#"
                  onClick={handleShowMenuHome}
                  css={[
                    stylesLinkHeader,
                    theme === 'dark'
                      ? tw`lg:text-white md_max:text-primary`
                      : tw`text-primary`,
                    tw`gap-x-[5px]`,
                  ]}
                  tw="!flex items-center justify-start gap-x-[5px]"
                >
                  Home
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="7"
                    viewBox="0 0 7 7"
                    fill="none"
                  >
                    <line
                      x1="3.5"
                      y1="2.18557e-08"
                      x2="3.5"
                      y2="7"
                      stroke={theme === 'dark' ? '#fff' : '#41487F'}
                    />
                    <line
                      x1="7"
                      y1="3.5"
                      x2="-4.37114e-08"
                      y2="3.5"
                      stroke={theme === 'dark' ? '#fff' : '#41487F'}
                    />
                  </svg>
                </NavLink>
                {showMenuHome && (
                  <div css={[stylesDropdownHomeHeader]}>
                    <ul>
                      {listMenuHeader.map((item, index) => (
                        <li
                          key={item.index || index}
                          css={[
                            stylesLiHeader,
                            tw`lg:text-left w-full lg:w-[260px] text-secondary hover:bg-[#d9dcf3] hover:text-primary md_max:bg-white`,
                          ]}
                        >
                          <NavLink
                            css={[
                              stylesLinkHeader,
                              tw`w-full block lg:pl-8 lg:py-4`,
                            ]}
                            to={item.href}
                          >
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
              <li css={[stylesLiHeader, tw`lg:mr-[42px]`]}>
                <Link
                  to="/about"
                  css={[
                    stylesLinkHeader,
                    theme === 'dark'
                      ? tw`lg:text-text1 md_max:text-secondary`
                      : tw`text-secondary`,
                  ]}
                >
                  About
                </Link>
              </li>
              <li css={[stylesLiHeader, tw`lg:mr-[45px]`]}>
                <NavLink
                  css={[
                    stylesLinkHeader,
                    theme === 'dark'
                      ? tw`lg:text-text1 md_max:text-secondary`
                      : tw`text-secondary`,
                  ]}
                  to="/service"
                >
                  Service
                </NavLink>
              </li>
              <li css={[stylesLiHeader, tw`lg:mr-[45px]`]}>
                <NavLink
                  css={[
                    stylesLinkHeader,
                    theme === 'dark'
                      ? tw`lg:text-text1 md_max:text-secondary`
                      : tw`text-secondary`,
                  ]}
                  to="/gallery"
                >
                  Gallery
                </NavLink>
              </li>
              <li css={stylesLiHeader}>
                <NavLink
                  css={[
                    stylesLinkHeader,
                    theme === 'dark'
                      ? tw`lg:text-text1 md_max:text-secondary`
                      : tw`text-secondary`,
                  ]}
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
            </ul>
            <Button
              $variant="primary"
              tw="md_max:leading-none md_max:!bg-transparent md_max:hover:!bg-[#e2e4f5] md_max:rounded-none md_max:text-[18px] md_max:text-pink shadow-none md_max:w-full md_max:h-[67px] md_max:text-left md_max:block md_max:py-5 md_max:px-[30px] sm:px-7"
            >
              Contact
            </Button>
          </nav>
          <div
            onClick={handleShowMenuHeader}
            tw="hidden fixed top-[150px] bottom-0 left-0 right-0 w-full h-full bg-black opacity-70 [z-index: 1] group-active:block"
            className="overlay"
          />
          {/* <Test /> */}
        </div>
      </header>
    </Container>
  )
}

export default Header
