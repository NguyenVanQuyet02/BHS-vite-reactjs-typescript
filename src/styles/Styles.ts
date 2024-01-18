import tw, { css } from 'twin.macro'

// styles header
export const stylesNav = css`
  ${tw`flex items-center justify-end`}
  @media (min-width: 1265px) {
    ${tw`h-[63px]`}
  }
  @media (max-width: 1264px) {
    ${tw`w-full h-fit fixed top-[140px] right-0 m-0 flex flex-col justify-start items-start bg-white z-10 py-6`}
  }

  @media (min-width: 768px) and (max-width: 1023px) {
  }
  @media (max-width: 767px) {
  }
`
export const stylesLinkHeader = css`
  ${tw`no-underline text-[16px]  font-normal [font-weight: 600] leading-normal tracking-[1.6px] md_max:py-5 md_max:!pl-[30px] md_max:block md_max:text-left md_max:w-full
  md_max:text-[18px]
  `}
`
export const stylesLiHeader = css`
  ${tw`min-h-[24px] md_max:m-0 md_max:h-auto md_max:w-full md_max:hover:bg-[#e2e4f5]`}
`
export const stylesDropdownHomeHeader = css`
  ${tw`absolute min-w-[100px] z-50 w-auto h-auto top-full lg:py-4 lg:left-[-32px] rounded-[8px] overflow-hidden bg-[#e2e4f5]`}

  @media (max-width: 1264px) {
    ${tw`left-0 top-0 w-full relative`}
  }
`
// style home 2;
// style home why choosing
export const stylesStatistical_wrap = css`
  ${tw`flex items-center justify-center mb-[48px] sm:mb-3 sm:items-center sm:justify-center`}
`
export const stylesStatistical_img = css`
  ${tw`w-[64px] sm:w-8 sm:mr-1 shrink-0 mr-[11px]`}
`
export const stylesstatistical_title = css`
  ${tw`w-[122px] h-[41px] shrink-0 text-white text-[36px] sm:text-[12px] sm:max-w-[46px] sm:h-auto font-normal [font-weight: 600] leading-[125%] mb-[2px]`}
`
export const stylesstatistical_desc = css`
  ${tw`w-[132px] h-[23px] shrink-0 text-text1 text-[16px] sm:text-[10px] sm:block sm:w-[80px] sm:h-auto font-normal [font-weight: 600] leading-[125%]`}
`
