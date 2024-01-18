import React from 'react'
import {
  BlockTextSection,
  Button,
  Category,
  Container,
  Description,
  Label,
} from '../../components'
import tw, { styled, css } from 'twin.macro'

const HomeAbout = () => {
  return (
    <div tw="relative">
      <div tw="w-[948.146px] h-[1028.886px] shrink-0 absolute z-[-10] right-0 top-[-88%] md:top-[-50%] sm:top-[-50%] bg-no-repeat bg-contain bg-[url('public/assets/imgs/home1/background_about.png')]" />
      <Container tw="mb-[143.2px] md:mb-[80px] sm:mb-[40px]">
        <section tw="flex w-full justify-center gap-x-[8%] md:flex-col sm:flex-col">
          <div tw="shrink-0 w-1/2 md:w-full md:mx-auto md:text-center sm:w-full sm:mx-auto sm:mt-0 sm:text-center">
            <BlockTextSection tw="text-left mb-[52px] md:mb-6 sm:mb-5">
              <Category tw="sm:text-center">About Us</Category>
              <Label tw="sm:text-center">We are the best beauty clinic</Label>
              <Description tw="mx-0 md:mx-auto sm:text-center sm:mx-auto sm:mb-0">
                <p tw="md:mx-auto lg:mb-[20px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
                  quam suscipit purus donec amet. Egestas volutpat facilisi eu
                  libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius
                  tellus in suspendisse placerat.
                </p>

                <p tw="md:mx-auto">
                  Id dui erat sed quam tellus in purus. Pellentesque congue
                  fringilla cras tellus enim.
                </p>
              </Description>
            </BlockTextSection>
            <div tw="flex items-center flex-wrap-reverse gap-x-[43px] gap-y-6 md:justify-center sm:justify-center">
              <Button tw="px-[46px] lg:h-[58.361px]" $variant="primary">
                Learn More
              </Button>
              <Button tw="h-[49px]" $variant="secondary">
                <img
                  tw="mr-[14px]"
                  src="public/assets/icons/home1/play_button.png"
                  alt="play button"
                />
                <span>Watch Video</span>
              </Button>
            </div>
          </div>
          <img
            tw="mt-[44.56px] w-[41.82%] max-h-[350px] object-cover rounded-[50px] shadow-sdimg md:mx-auto md:w-[78%] md:h-fit sm:mx-auto sm:w-4/5 sm:h-auto"
            src="public/assets/imgs/home1/aboutUsImg.jpg"
            alt="about us image"
          />
        </section>
      </Container>
    </div>
  )
}

export default HomeAbout
