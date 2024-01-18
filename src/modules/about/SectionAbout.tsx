import React from 'react'
import tw from 'twin.macro'
import {
  BlockTextSection,
  Category,
  Container,
  Description,
  Label,
} from '../../components'

const SectionAbout = () => {
  return (
    <div tw="relative">
      <div tw="w-[1149.104px] h-[1533.5px] shrink-0 absolute z-[-10] right-0 top-[51.4%] md:top-[50%] sm:top-[50%] bg-no-repeat bg-contain bg-[url('public/assets/imgs/about/bg_about.png')]" />
      <Container tw="mt-[125px] mb-[136px] md:mb-20 sm:mb-10">
        <BlockTextSection tw="text-left lg:w-[66%] mx-0 md_max:text-center mb-[66px] md:mb-6 sm:mb-5">
          <Category tw="sm:text-center">About</Category>
          <Label tw="my-3 sm:text-center">
            We are a leading beauty clinic that has been around since 2002
          </Label>
          <Description tw="m-0 mt-[18px] md_max:mx-auto md:mx-auto sm:text-center sm:mx-auto sm:mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </Description>
        </BlockTextSection>
        <div tw="relative h-[540px] rounded-[50px] overflow-hidden">
          <img
            tw="object-cover w-full h-full"
            src="public/assets/imgs/about/img_about.jpg"
            alt="img about"
          />
          <img
            tw="w-[88px] h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src="public/assets/icons/about/play_button.png"
            alt="play button about"
          />
        </div>
      </Container>
    </div>
  )
}

export default SectionAbout
