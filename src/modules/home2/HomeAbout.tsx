import React from 'react'
import {
  BlockTextSection,
  Button,
  Category,
  Container,
  Description,
  Label,
} from '../../components'
import tw from 'twin.macro'

const HomeAbout = () => {
  return (
    <Container tw="mt-96 mb-[108px] md:my-[80px] sm:mb-10 sm:mt-[190px]">
      <section tw="flex w-full justify-start gap-x-[14.4%] md:flex-col-reverse md:items-center md:justify-center sm:flex-col-reverse sm:items-center">
        <img
          tw="m-0 w-[43%] max-h-[302.675px] object-contain shrink-0 mr-0 rounded-[50px] shadow-sdimg md:w-[60%] md:h-fit sm:m-0 sm:w-[60%] sm:h-auto"
          src="/assets/imgs/Home2/illustration_1.svg"
          alt="img illustration home about"
        />
        <BlockTextSection tw=" mt-0 w-[42%] text-left mb-[52px] md:w-full md:my-9 sm:w-full sm:mb-[30px] sm:text-center shrink-0">
          <Category tw="sm:text-center">About Us</Category>
          <Label tw="md:mb-4 sm:text-center sm:my-3">
            We are the best beauty clinic
          </Label>
          <Description tw="w-full mt-3 mb-[46px] mx-0 md:w-11/12 md:mx-auto md:my-4 sm:text-center sm:mx-auto sm:my-4 leading-[1.5]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
            suscipit purus donec amet. Egestas volutpat facilisi eu libero.
            Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
            suspendisse placerat.
          </Description>
          <Button tw="px-[48px] lg:h-[58.361px]" $variant="primary">
            Learn More
          </Button>
        </BlockTextSection>
      </section>
    </Container>
  )
}

export default HomeAbout
