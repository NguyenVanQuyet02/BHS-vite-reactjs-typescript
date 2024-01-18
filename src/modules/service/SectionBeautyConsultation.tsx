import React from 'react'
import tw, { TwStyle } from 'twin.macro'
import {
  BlockTextSection,
  Category,
  Container,
  Description,
  Label,
} from '../../components'

const SectionBeautyConsultation = ({
  img,
  category,
  label,
  desc,
  stylesContainer,
  stylesSection,
}: {
  img?: string
  category?: string
  label?: string
  desc?: string
  stylesContainer?: TwStyle
  stylesSection?: TwStyle
}) => {
  return (
    <Container
      css={[tw`mt-[139px] mb-[87px] md:my-[80px] sm:my-10`, stylesContainer]}
    >
      <section
        css={[
          tw`flex w-full justify-start gap-x-[15.8%] md:flex-col-reverse md:items-center md:justify-center sm:flex-col-reverse sm:items-center`,
          stylesSection,
        ]}
      >
        <img
          tw="m-0 w-[42.3%] h-auto object-contain shrink-0 rounded-[50px] shadow-sdimg md:w-[60%] md:h-fit sm:m-0 sm:w-[60%] sm:h-auto"
          src={img || 'public/assets/imgs/service/img_beauty_consultation.png'}
          alt="img about"
        />
        <BlockTextSection tw="m-0 mt-[34px] w-[39%] text-left md:w-full md:my-9 sm:w-full sm:mb-[30px] sm:text-center shrink-0">
          <Category tw="sm:text-center">
            {category || 'Beauty Consultation'}
          </Category>
          <Label tw="md:mb-4 sm:text-center sm:my-3">
            {label || 'We services beauty consultation'}
          </Label>
          <Description tw="w-full mx-0 mt-[11px] mb-[23px] md:mx-auto sm:text-center sm:mx-auto sm:my-4">
            {desc ||
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.'}
          </Description>
          <p tw="flex gap-x-[12px] not-italic text-[#091156] text-[16px] [font-weight: 600] leading-normal tracking-[1.6px] md:justify-center sm:justify-center">
            Make an Appointment
            <img
              tw="w-[25px] h-auto shrink-0 "
              src="public/assets/icons/service/angle_double_right.png"
              alt="angle_double_right"
            />
          </p>
        </BlockTextSection>
      </section>
    </Container>
  )
}

export default SectionBeautyConsultation
