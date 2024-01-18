import React from 'react'
import {
  BlockTextSection,
  Category,
  Container,
  Description,
  Label,
} from '../../components'
import tw from 'twin.macro'

const SectionOurClients = () => {
  return (
    <Container tw="mb-[120px] md:mb-20 sm:mb-10">
      <BlockTextSection tw="mb-[103px] md:mb-10 sm:mb-4">
        <Category>Our Clients</Category>
        <Label>Well-known agencies</Label>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Description>
      </BlockTextSection>
      <div tw="flex gap-x-[5%] gap-y-6 items-center justify-center flex-wrap">
        <img
          tw="w-[147px] h-auto"
          src="public/assets/imgs/about/our_client_logo1.png"
          alt="logo 1"
        />
        <img
          tw="w-[147px] h-auto"
          src="public/assets/imgs/about/our_client_logo2.png"
          alt="logo 1"
        />
        <img
          tw="w-[147px] h-auto"
          src="public/assets/imgs/about/our_client_logo3.png"
          alt="logo 1"
        />
        <img
          tw="w-[147px] h-auto"
          src="public/assets/imgs/about/our_client_logo4.png"
          alt="logo 1"
        />
        <img
          tw="w-[147px] h-auto"
          src="public/assets/imgs/about/our_client_logo5.png"
          alt="logo 1"
        />
      </div>
    </Container>
  )
}

export default SectionOurClients
