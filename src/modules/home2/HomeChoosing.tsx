import React from 'react'
import { Container, Description, Label } from '../../components'
import tw, { css } from 'twin.macro'
import {
  stylesStatistical_img,
  stylesStatistical_wrap,
  stylesstatistical_desc,
  stylesstatistical_title,
} from '../../styles/Styles'

const HomeChoosing = () => {
  return (
    <div tw="relative">
      <div tw="w-[524px] sm:w-full h-[350.34px] shrink-0 absolute z-[-10] left-0 bottom-[450px] sm:bottom-[120px] bg-no-repeat bg-cover bg-[url('/assets/imgs/home2/wave_line.png')]" />
      <div tw="max-w-full w-full h-[699.34px] sm:h-[320px] shrink-0 absolute top-[-272px] md:top-[-156px] sm:top-[-42px] left-0 z-[-10] bg-cover bg-no-repeat bg-[url('/assets/imgs/home2/Background-wcu.png')]" />
      <Container tw="md_max:overflow-hidden mb-[304px] md:mb-[80px] sm:mb-[100px]">
        <div tw="w-full min-h-[100px] h-auto flex justify-start gap-x-[13.4%] md:justify-around sm:flex-col sm:items-center sm:justify-center">
          <section tw="w-[42%] md:mt-[100px] sm:w-full sm:p-0 sm:mx-auto sm:text-center pl-[5px] mt-[8px]">
            <Label tw="w-full h-auto shrink-0 text-white text-[36px] sm:text-[18px] font-normal [font-weight: 600] leading-[125%] mb-[14px]">
              Why choosing us?
            </Label>
            <Description tw="w-full h-auto shrink-0 text-white text-[16px] sm:text-[12px] font-normal [font-weight: 400] leading-normal tracking-[1.6px] mt-[19px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis.
            </Description>
          </section>
          <section tw="flex flex-wrap max-w-[500px] gap-x-[63px] mt-[5px] ml-[-2px] md:gap-x-10  md:ml-10 md:flex-col md:mt-0 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-0 sm:mt-0 sm:ml-0">
            <div css={[stylesStatistical_wrap]}>
              <img
                css={[stylesStatistical_img]}
                src="/assets/icons/Home2/handshake1.png"
                alt="handshake icon"
              />
              <div tw="flex flex-col justify-center h-full">
                <h3 css={[stylesstatistical_title]}>100%</h3>
                <p css={[stylesstatistical_desc, tw`text-pink`]}>
                  trusted clinic
                </p>
              </div>
            </div>
            <div css={[stylesStatistical_wrap]}>
              <img
                css={[stylesStatistical_img]}
                src="/assets/icons/Home2/brotherhood1.png"
                alt="brotherhood icon"
              />
              <div className="statistical-item-text">
                <h3 css={[stylesstatistical_title]}>99%</h3>
                <p css={[stylesstatistical_desc]}>customer love</p>
              </div>
            </div>
            <div css={[stylesStatistical_wrap]}>
              <img
                css={[stylesStatistical_img]}
                src="/assets/icons/Home2/earth1.png"
                alt="earth icon"
              />
              <div className="statistical-item-text">
                <h3 css={[stylesstatistical_title]}>75+</h3>
                <p css={[stylesstatistical_desc]}>asian branch</p>
              </div>
            </div>
            <div css={[stylesStatistical_wrap]}>
              <img
                css={[stylesStatistical_img]}
                src="/assets/icons/Home2/doctor1.png"
                alt="doctor icon"
              />
              <div className="statistical-item-text">
                <h3 css={[stylesstatistical_title]}>1.200+</h3>
                <p css={[stylesstatistical_desc]}>licensed worker</p>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  )
}

export default HomeChoosing
