import React from 'react'
import {
  BlockTextSection,
  Category,
  Container,
  Description,
  Label,
} from '../../components'
import tw from 'twin.macro'
import { CardItem, CardList } from '../../components/cards'
import { ICard } from '../../interface/interface'

const listCardBlog: ICard[] = [
  {
    index: 1,
    img: '/assets/imgs/home2/c1.jpg',
    title: 'How much does a consultation cost at our clinic?',
    desc: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...',
  },
  {
    index: 2,
    img: '/assets/imgs/home2/c2.jpg',
    title: "Watch out! don't choose the wrong beauty product",
    desc: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...',
  },
  {
    index: 3,
    img: '/assets/imgs/home2/c3.jpg',
    title: 'About skin care you need to know',
    desc: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...',
  },
]
const HomeBlog = () => {
  return (
    <Container tw="mb-[172px] md:mb-20 sm:mb-10">
      <section tw="w-full">
        <BlockTextSection tw="mb-[86px] md:mb-[36px] sm:mb-6">
          <Category>The Blog</Category>
          <Label tw="sm:my-2">Our latest news</Label>
          <Description tw="sm:my-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Description>
        </BlockTextSection>
        {listCardBlog.length > 0 && (
          <CardList tw="gap-x-[4.4%]">
            {listCardBlog.map((item, index) => (
              <div
                key={item.index || index}
                tw="w-[30.4%] min-w-[255px] sm:w-[86%] sm:mb-8"
              >
                <CardItem tw="max-h-[600px] h-[543px] shrink-0 rounded-[25px] bg-white shadow-sdprimary p-0 sm:h-fit">
                  <img
                    tw=" w-full h-[46%] md:max-h-[249px] sm:max-h-[249px] object-cover shrink-0 rounded-tl-[25px] rounded-tr-[25px] m-0"
                    src={item.img}
                    alt="img card home blog"
                  />
                  <div tw="w-full py-[56px] pl-[38px] md:p-0 md:py-[36px] md:px-[16px] sm:px-[16px] sm:py-[16px]">
                    <h4 tw="w-[94%] text-left h-auto shrink-0 text-primary text-[18px] font-normal [font-weight: 600] leading-[125%] m-0 md:text-center sm:text-[14px] sm:w-full sm:text-center sm:mt-8 sm:mx-auto sm:mb-2 ">
                      {item.title}
                    </h4>
                    <p tw="w-[84%] sm:w-[94%] md:w-[94%] m-0 text-left mt-[14px] mb-[24px] h-auto shrink-0 text-secondary text-[14px] font-normal [font-weight: 400] leading-normal tracking-[1.4px] md:text-center md:mx-auto md:my-4 sm:text-[12px] sm:text-center sm:mx-auto sm:my-6">
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
                  </div>
                </CardItem>
              </div>
            ))}
          </CardList>
        )}
      </section>
    </Container>
  )
}

export default HomeBlog
