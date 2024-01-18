import React from 'react'
import { Layout } from '../layouts'
import {
  HomeAbout,
  HomeContact,
  HomeService,
  HomeSlider,
  HomeTeams,
} from '../modules/home1'
const HomePage1 = () => {
  return (
    <Layout>
      <HomeSlider
        img="public/assets/imgs/home1/frame1.png"
        title="Clinic &amp; beauty consultant"
        description="It is a long established fact that a reader will be by the readable
            content of a page."
      />
      <HomeService />
      <HomeAbout />
      <HomeTeams />
      <HomeContact />
    </Layout>
  )
}

export default HomePage1
