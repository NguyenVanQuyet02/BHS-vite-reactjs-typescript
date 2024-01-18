import React from 'react'
import { Container } from '../../components'
import tw, { css } from 'twin.macro'

const HomeContact = () => {
  return (
    <div tw="relative">
      <div tw="absolute bottom-[-120px] left-0 z-[-10] w-full h-[1292.081px] shrink-0 bg-cover bg-no-repeat bg-[url('public/assets/imgs/home2/background_wave.png')]" />
      <Container tw="mb-[130px] md:mb-20 sm:mb-10 relative">
        <section tw="w-full min-h-[100px] flex justify-between md:flex-col md:flex-wrap md:items-center md:justify-center sm:text-center  sm:items-center sm:justify-center sm:flex-col">
          <div tw="w-[36%] md:w-full md:text-center sm:w-full">
            <h3 tw="w-full shrink-0 text-primary text-[36px] font-normal [font-weight: 600] leading-[125%] mb-[17px] sm:text-[18px] sm:w-auto">
              Request call services
            </h3>
            <p tw="w-full shrink-0 text-secondary text-[16px] font-normal [font-weight: 400] leading-normal tracking-[1.6px] md:my-5 sm:text-[12px] sm:w-[92%] sm:mx-auto sm:mb-6">
              Lorem ipsum dolor sit amet, consect adipiscing elit{' '}
              <strong>Contact Us</strong>.
            </p>
          </div>
          <div tw="w-[57.7%] md:text-right md:w-full sm:w-4/5">
            <div tw="flex items-center w-full h-[73px] sm:h-[48px] shrink-0 rounded-[25px] border border-solid border-[#D9DDFE] bg-white mt-[13px] mb-[7px] md:w-4/5 md:mx-auto">
              <input
                tw="flex-1 h-full px-[34px] text-[#C5C5C5] text-[16px] rounded-tl-[25px] rounded-bl-[25px] font-normal [font-weight: 400] leading-normal tracking-[1.6px] sm:text-[12px] sm:px-[14px]"
                type="text"
                placeholder="Insert your phone number here ..."
              />
              <button tw="w-[113px] sm:w-[60px] h-full shrink-0 rounded-tr-[25px] rounded-br-[25px] bg-pink flex justify-center items-center">
                <img
                  tw="sm:w-5"
                  src="public/assets/icons/home2/phone_volume.png"
                  alt="phone volume icon"
                />
              </button>
            </div>
            <em tw="w-full md:mt-5 md:text-center block shrink-0 text-secondary text-right text-[12px] [font-weight: 400] leading-normal tracking-[1.2px] sm:text-center sm:mx-auto">
              Toll free for our coverage areas.
            </em>
          </div>
        </section>
      </Container>
    </div>
  )
}

export default HomeContact
