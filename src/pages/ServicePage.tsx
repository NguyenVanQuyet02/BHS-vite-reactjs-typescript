import React from 'react'
import { Layout } from '../layouts'
import tw from 'twin.macro'
import { SectionBeautyConsultation, SectionService } from '../modules/service'
import SectionVideo from '../modules/service/SectionVideo'
import { Button } from '../components'

const ServicePage = () => {
  return (
    <Layout>
      <SectionService />
      <SectionBeautyConsultation />
      {/* SectionSkinTreatements */}
      <SectionBeautyConsultation
        stylesContainer={tw`mt-0`}
        stylesSection={tw`flex-row-reverse justify-between`}
        img="public/assets/imgs/service/img_skin_treatements.png"
        category="Skin Treatements"
        label="Skin care and treatment by expert"
      />
      {/* Section Beauty Product */}
      <SectionBeautyConsultation
        stylesContainer={tw`mt-0`}
        img="public/assets/imgs/service/img_beauty_product.png"
        category="Beauty Product"
        label="We present quality beauty products"
      />
      <SectionVideo
      // button={
      //   <Button
      //     $variant="secondary"
      //     tw="w-fit h-fit flex items-center justify-center lg:mt-[66px] md_max:mt-[66px] sm:!mt-0"
      //   >
      //     <svg
      //       tw="w-[165px] h-auto shrink-0 lg:mr-[27px] sm:w-[120px] sm:mr-[10px]"
      //       xmlns="http://www.w3.org/2000/svg"
      //       width={165}
      //       height={165}
      //       viewBox="0 0 165 165"
      //       fill="none"
      //     >
      //       <path
      //         d="M102.5 77.4378C107.167 80.1321 107.167 86.8679 102.5 89.5622L77.75 103.852C73.0833 106.546 67.25 103.178 67.25 97.7894L67.25 69.2106C67.25 63.822 73.0833 60.4541 77.75 63.1484L102.5 77.4378Z"
      //         stroke="white"
      //         strokeWidth={2}
      //       />
      //       <g filter="url(#filter0_d_1191_5004)">
      //         <circle
      //           cx="82.5"
      //           cy="82.5"
      //           r="62.5"
      //           stroke="white"
      //           strokeWidth={2}
      //           shapeRendering="crispEdges"
      //         />
      //       </g>
      //       <defs>
      //         <filter
      //           id="filter0_d_1191_5004"
      //           x={0}
      //           y={0}
      //           width={165}
      //           height={165}
      //           filterUnits="userSpaceOnUse"
      //           colorInterpolationFilters="sRGB"
      //         >
      //           <feFlood floodOpacity={0} result="BackgroundImageFix" />
      //           <feColorMatrix
      //             in="SourceAlpha"
      //             type="matrix"
      //             values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      //             result="hardAlpha"
      //           />
      //           <feMorphology
      //             radius={7}
      //             operator="dilate"
      //             in="SourceAlpha"
      //             result="effect1_dropShadow_1191_5004"
      //           />
      //           <feOffset />
      //           <feGaussianBlur stdDeviation={6} />
      //           <feComposite in2="hardAlpha" operator="out" />
      //           <feColorMatrix
      //             type="matrix"
      //             values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"
      //           />
      //           <feBlend
      //             mode="normal"
      //             in2="BackgroundImageFix"
      //             result="effect1_dropShadow_1191_5004"
      //           />
      //           <feBlend
      //             mode="normal"
      //             in="SourceGraphic"
      //             in2="effect1_dropShadow_1191_5004"
      //             result="shape"
      //           />
      //         </filter>
      //       </defs>
      //     </svg>
      //     <span tw="text-white text-[16px] [font-weight: 600] leading-normal tracking-[1.6px]">
      //       Treatments Videos
      //     </span>
      //   </Button>
      // }
      />
      <div tw="mb-[2000px]"></div>
    </Layout>
  )
}

export default ServicePage
