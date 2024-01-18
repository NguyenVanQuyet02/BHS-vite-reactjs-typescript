import React from 'react'
import { Layout } from '../layouts'
import {
  SectionAbout,
  SectionBusinessSlogan,
  SectionOurClients,
  SectionOurMission,
  SectionOutVision,
} from '../modules/about'
import tw from 'twin.macro'
import { HomeTeams } from '../modules/home1'

const AboutPage = () => {
  return (
    <Layout>
      <SectionAbout />
      <HomeTeams />
      <SectionBusinessSlogan />
      <SectionOutVision />
      <SectionOurMission />
      <SectionOurClients />
    </Layout>
  )
}

export default AboutPage
