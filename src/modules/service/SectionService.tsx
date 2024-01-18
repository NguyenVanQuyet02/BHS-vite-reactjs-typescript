import React from 'react'
import {
  BlockTextSection,
  Category,
  Container,
  Description,
  Label,
} from '../../components'
import tw from 'twin.macro'

const SectionServices = () => {
  return (
    <div tw="relative">
      <div tw="w-full h-[893px] shrink-0 absolute z-[-10] left-0 top-[-4.3%] bg-top bg-no-repeat bg-cover bg-[url('/assets/imgs/service/bg_service.png')]" />
      <Container tw=" mt-[126px] md:mb-10 sm:mb-4">
        <BlockTextSection tw=" mb-[72px] ">
          <Category>Our Services</Category>
          <Label tw="mb-6">We focus on your beauty</Label>
          <Description>Lorem ipsum dolor sit amet</Description>
        </BlockTextSection>
        <div tw="max-w-[1140px] grid gap-x-[84px] gap-y-[68px] lg:px-[18px] justify-between">
          <img
            tw="rounded-[25px] h-[254px] w-full max-w-[291px] object-cover block "
            src="/assets/imgs/service/img_1_1_service.jpg"
            alt="img service"
          />
          <img
            tw="rounded-[25px] h-[254px] w-full lg:min-w-[725px] object-cover block col-start-2 col-end-4"
            src="/assets/imgs/service/img_1_2_service.jpg"
            alt="img service"
          />
          <img
            tw="rounded-[25px] h-[254px] w-full lg:min-w-[725px] object-cover block col-start-1 col-end-3"
            src="/assets/imgs/service/img_2_1_service.jpg"
            alt="img service"
          />
          <img
            tw="rounded-[25px] h-[254px] w-full max-w-[291px] object-cover block"
            src="/assets/imgs/service/img_2_2_service.jpg"
            alt="img service"
          />
        </div>
      </Container>
    </div>
  )
}

export default SectionServices
