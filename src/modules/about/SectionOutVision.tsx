import React from 'react'
import {
  BlockTextSection,
  Category,
  Container,
  Description,
  Label,
} from '../../components'
import tw from 'twin.macro'

const SectionOutVision = () => {
  return (
    <Container tw="mt-[128px] mb-[108px] md:my-[80px] sm:my-10">
      <section tw="flex w-full justify-center gap-x-[20.6%] md:flex-col-reverse md:items-center md:justify-center sm:flex-col-reverse sm:items-center">
        <img
          tw="m-0 w-[33.3%] h-auto object-contain shrink-0 rounded-[50px] shadow-sdimg md:w-[60%] lg:ml-[30px] md:h-fit sm:m-0 sm:w-[60%] sm:h-auto"
          src="public/assets/imgs/about/img_vision.png"
          alt="img about"
        />
        <BlockTextSection tw="m-0 w-[40%] text-left md:w-full md:my-9 sm:w-full sm:mb-[30px] sm:text-center shrink-0">
          <Category tw="sm:text-center">Our Vision</Category>
          <Label tw="md:mb-4 sm:text-center sm:my-3">
            Be the best and go international
          </Label>
          <Description tw="w-full mx-0 mt-4 md:mx-auto sm:text-center sm:mx-auto sm:mb-0">
            <p tw="md:mx-auto lg:mb-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
              quam suscipit purus donec amet. Egestas volutpat facilisi eu
              libero.
            </p>
            <p tw="md:mx-auto">
              Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
              suspendisse placerat.
            </p>
          </Description>
        </BlockTextSection>
      </section>
    </Container>
  )
}

export default SectionOutVision
