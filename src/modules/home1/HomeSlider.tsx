import React from 'react'
import { Button, Container } from '../../components'
import tw from 'twin.macro'

const HomeSlider = ({
  img,
  title,
  description,
}: {
  img: string
  title: string
  description: string
}) => {
  return (
    <div>
      <div tw="w-[88%] h-[743px] shrink-0 absolute z-[-10] left-0 top-0 max:bg-left bg-top bg-no-repeat bg-contain bg-[url('/assets/imgs/home1/slide_background.svg')]" />
      <Container tw="lg:mt-[159px] md_max:mt-[80px] md:mt-[80px] mb-[134px] md:mb-20 sm:mb-10">
        <div tw="w-full mb-[138px] md:mb-20 sm:mb-10">
          <section tw="w-full flex justify-center gap-x-[18px] md:flex-col-reverse md:items-center sm:flex-col-reverse sm:items-center">
            <div tw="w-[42%] md:w-full ml-[29px] mt-[55px] text-primary font-normal shrink-0 md:text-center md:m-0 md:mt-10 md:mx-auto sm:w-full sm:text-center sm:m-0 sm:mt-5 sm:mx-auto">
              <h1 tw="w-full h-auto text-[48px] sm:text-[26px] [font-weight: 600] leading-[125%] md:mb-5 sm:mb-[14px]">
                {title}
              </h1>
              <p tw="w-full h-auto text-[16px] sm:text-[12px] [font-weight: 500] leading-[1.4] tracking-[1.6px] mt-[9px] mb-9 md:mx-auto md:mb-[14px] sm:mb-[18px]">
                {description}
              </p>
              <Button tw="lg:h-[58.361px]" $variant="primary">
                More Details
              </Button>
            </div>
            <img
              tw="flex w-[52%] h-auto object-contain justify-center items-center shrink-0 md:w-[68%] md:m-0 sm:w-4/5 sm:m-0"
              src={img}
              alt="slider image"
            />
          </section>
        </div>
        <img
          tw="block w-[71px] h-[8.146px] shrink-0 mx-auto"
          src="/assets/icons/home1/slide_button.png"
          alt="slider button"
        />
      </Container>
    </div>
  )
}

export default HomeSlider
