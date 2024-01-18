import React from 'react'
import tw from 'twin.macro'
import {
  BlockTextSection,
  Category,
  Container,
  Description,
  Label,
} from '../../components'
const SectionOurMission = () => {
  return (
    <Container tw="mt-[138px] mb-[147px] md:my-[80px] sm:my-10">
      <section tw="flex w-full justify-start gap-x-[16%] md:flex-col md:items-center md:justify-between sm:flex-col sm:items-center">
        <BlockTextSection tw="m-0 w-[44%] text-left md:w-full md:my-9 sm:w-full sm:mb-[30px] sm:text-center shrink-0">
          <Category tw="sm:text-center">Our Mission</Category>
          <Label tw="md:mb-4 sm:text-center sm:my-3">
            Special & premium service to any clients
          </Label>
          <Description tw="w-full lg:w-[90%] mx-0 mt-4 md:mx-auto sm:text-center sm:mx-auto sm:mb-0">
            <p tw="md:mx-auto lg:mb-[20px] leading-[1.5]">
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
        <img
          tw="m-0 w-[37.3%] h-auto object-contain shrink-0 rounded-[50px] shadow-sdimg md:w-[60%] md:h-fit sm:m-0 sm:w-[60%] sm:h-auto"
          src="public/assets/imgs/about/img_mission.png"
          alt="img about"
        />
      </section>
    </Container>
  )
}

export default SectionOurMission
