import React from 'react'
import {
  BlockTextSection,
  Category,
  Container,
  Description,
  Label,
} from '../../components'
import tw from 'twin.macro'

const SectionBusinessSlogan = () => {
  return (
    <div tw="h-[529px] w-full relative flex items-center justify-center sm:mt-20">
      <div tw="max-w-full w-full h-full shrink-0 absolute top-0 left-0 z-[-10] bg-cover bg-no-repeat bg-[url('public/assets/imgs/about/bg_business_slogan.png')] " />
      <div tw="w-full h-full shrink-0 bg-contain absolute z-[-10] top-0 bg-[rgba(9, 17, 86, 0.60)]" />
      <Container tw="w-full">
        <BlockTextSection tw="w-full">
          <Category tw="text-[#ABB4FF]">Business Slogan</Category>
          <Label tw="text-white lg:w-[52%] w-full">
            Best responsibility and service for our customers
          </Label>
          <Description tw="text-[#CACACA] lg:w-[60%] w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </Description>
        </BlockTextSection>
      </Container>
    </div>
  )
}

export default SectionBusinessSlogan
