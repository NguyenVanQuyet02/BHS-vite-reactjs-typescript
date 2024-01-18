import React, { Fragment, ReactNode } from 'react'
import { Header, Footer } from '../components'
const Layout = ({
  children,
  theme = 'light',
}: {
  children?: ReactNode
  theme?: 'dark' | 'light'
}) => {
  return (
    <Fragment>
      <Header theme={theme} />
      {children}
      <Footer></Footer>
    </Fragment>
  )
}

export default Layout
