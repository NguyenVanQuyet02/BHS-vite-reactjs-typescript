import React from 'react'
import { Layout } from '../layouts'
import {
  HomeAbout,
  HomeBlog,
  HomeChoosing,
  HomeContact,
  HomeService,
  HomeSlider,
} from '../modules/home2'

const HomePage2 = () => {
  return (
    <div>
      <Layout theme="dark">
        <HomeSlider />
        <HomeAbout />
        <HomeService />
        <HomeChoosing />
        <HomeBlog />
        <HomeContact />
      </Layout>
    </div>
  )
}

export default HomePage2
