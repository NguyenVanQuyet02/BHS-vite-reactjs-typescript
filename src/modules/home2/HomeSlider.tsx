import React from 'react'
import tw from 'twin.macro'
import { Button, Container } from '../../components'

const HomeSlider = () => {
  return (
    <div>
      <div tw="w-full h-[918px] sm:h-[800px] shrink-0 absolute z-[-10] left-0 top-0 bg-top bg-no-repeat bg-cover bg-[url('/assets/imgs/home2/bg-slider.png')]" />
      <Container tw="mt-[204px] lg:mb-[472px] md:mt-40 md:mb-[200px] sm:mt-[150px] sm:mb-[120px]">
        <section tw="w-full flex justify-start gap-x-[17.5%] md_max:gap-x-[6%] lg:mb-0 md:flex-col-reverse md:items-center md:gap-y-6 sm:flex-col-reverse sm:items-center sm:gap-y-8">
          <div tw="w-[44%] md_max:w-[60%] h-auto m-0 shrink-0 font-normal md:!w-full md:text-center sm:!w-full sm:m-0 sm:text-center">
            <h1 tw="text-[48px] w-full h-auto [font-weight: 600] leading-[125%] shrink-0 text-white sm:text-[26px] ">
              Your beauty center place
            </h1>
            <p tw="w-full h-auto [font-weight: 500] tracking-[1.6px] shrink-0 text-text1 lg:mt-[16px] lg:mb-[41px] leading-[1.43]  md_max:my-4 md:w-11/12  md:mt-3 md:mb-3 md:mx-auto ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo,
              massa pellentesque arcu fusce et magna consequat neque vitae
              lobortis.
            </p>
            <Button $variant="outline" tw="w-[179px] px-0">
              More Details
            </Button>
          </div>
          <Button
            $variant="secondary"
            tw="w-fit h-fit flex items-center justify-center lg:mt-[66px] md_max:mt-[66px] sm:!mt-0"
          >
            <svg
              tw="w-[165px] h-auto shrink-0 lg:mr-[27px] sm:w-[120px] sm:mr-[10px]"
              xmlns="http://www.w3.org/2000/svg"
              width={165}
              height={165}
              viewBox="0 0 165 165"
              fill="none"
            >
              <path
                d="M102.5 77.4378C107.167 80.1321 107.167 86.8679 102.5 89.5622L77.75 103.852C73.0833 106.546 67.25 103.178 67.25 97.7894L67.25 69.2106C67.25 63.822 73.0833 60.4541 77.75 63.1484L102.5 77.4378Z"
                stroke="white"
                strokeWidth={2}
              />
              <g filter="url(#filter0_d_1191_5004)">
                <circle
                  cx="82.5"
                  cy="82.5"
                  r="62.5"
                  stroke="white"
                  strokeWidth={2}
                  shapeRendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1191_5004"
                  x={0}
                  y={0}
                  width={165}
                  height={165}
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius={7}
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_1191_5004"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation={6} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1191_5004"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1191_5004"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <span tw="text-white text-[16px] [font-weight: 600] leading-normal tracking-[1.6px]">
              Tour Video
            </span>
          </Button>
        </section>
      </Container>
    </div>
  )
}

export default HomeSlider
