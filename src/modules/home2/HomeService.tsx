import React from 'react'
import tw from 'twin.macro'
import {
  BlockTextSection,
  Category,
  Container,
  Description,
  Label,
} from '../../components'
import { ICard } from '../../interface/interface'
import { CardItem, CardList } from '../../components/cards'
const listCardService: ICard[] = [
  {
    index: 1,
    img: '/assets/imgs/home2/icon_service_1.png',
    title: 'Beauty consultation',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  },
  {
    index: 2,
    img: '/assets/imgs/home2/icon_service_2.png',
    title: 'Skin treatments',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  },
  {
    index: 3,
    img: '/assets/imgs/home2/icon_service_3.png',
    title: 'Beauty product',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  },
]
const HomeService = () => {
  return (
    <Container tw="mb-[396px] md:mb-[210px] sm:mb-[130px]">
      <section tw="w-full">
        <BlockTextSection tw="mb-20 md:mb-[36px] sm:mb-6">
          <Category>Main Services</Category>
          <Label tw="sm:my-2">Our focus services</Label>
          <Description tw="sm:my-0">Lorem ipsum dolor sit amet.</Description>
        </BlockTextSection>
        {listCardService.length > 0 && (
          <CardList tw="flex-wrap w-full gap-x-[5.8%] gap-y-6 md:flex-col md:items-center">
            {listCardService.map((item, index) => (
              <div
                key={item.index || index}
                tw="w-[23%] min-w-[261px] md:w-4/5 sm:w-[94%] h-fit"
              >
                <CardItem tw="max-h-[303px] border border-solid border-[#9BA2E0] rounded-[25px] px-[34px] py-[31px] text-left bg-white md:text-center sm:text-center">
                  <img
                    tw="m-0 mb-[17px] w-[64px] h-auto shrink-0 object-cover md:w-[20%] md:mx-auto sm:w-[20%] sm:mx-auto"
                    src={item.img}
                    alt="img card home service"
                  />
                  <h3 tw="w-full mx-0 h-auto shrink-0 text-primary text-lg sm:text-sm font-[600] mb-[6px]">
                    {item.title}
                  </h3>
                  <p tw="w-full mx-0 h-auto mt-[14px] mb-[17px] shrink-0 text-secondary text-sm sm:text-[10px] [font-weight: 400] font-normal leading-normal tracking-[1.4px]">
                    {item.desc}
                  </p>
                  <p tw="w-full flex items-center md:justify-center sm:justify-center text-pink text-[16px] sm:text-[12px] font-normal [font-weight: 600] leading-[125%] mb-[15px]">
                    <span tw="w-fit h-auto block text-[14px] sm:text-[12px] font-normal [font-weight: 600] leading-[125%] mr-[10px]">
                      Learn more
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={17}
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M8.00938 9.0644L3.75938 13.58C3.46563 13.8921 2.99063 13.8921 2.7 13.58L1.99375 12.8296C1.7 12.5175 1.7 12.0128 1.99375 11.7041L5.00625 8.50327L1.99375 5.30249C1.7 4.99038 1.7 4.48569 1.99375 4.1769L2.69687 3.41987C2.99062 3.10776 3.46562 3.10776 3.75625 3.41987L8.00625 7.9355C8.30312 8.24761 8.30312 8.75229 8.00938 9.0644ZM14.0094 7.9355L9.75937 3.41987C9.46562 3.10776 8.99062 3.10776 8.7 3.41987L7.99375 4.17026C7.7 4.48237 7.7 4.98706 7.99375 5.29585L11.0063 8.49663L7.99375 11.6974C7.7 12.0095 7.7 12.5142 7.99375 12.823L8.7 13.5734C8.99375 13.8855 9.46875 13.8855 9.75937 13.5734L14.0094 9.05776C14.3031 8.75229 14.3031 8.24761 14.0094 7.9355Z"
                        fill="#FF64AE"
                      />
                    </svg>
                  </p>
                </CardItem>
              </div>
            ))}
          </CardList>
        )}
      </section>
    </Container>
  )
}

export default HomeService
