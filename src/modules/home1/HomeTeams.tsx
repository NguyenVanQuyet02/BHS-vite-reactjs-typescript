import React from 'react'
import {
  BlockTextSection,
  Category,
  Container,
  Description,
  Label,
} from '../../components'
import { ICard } from '../../interface/interface'
import { CardItem, CardList } from '../../components/cards'
import tw from 'twin.macro'
const listCardTeams: ICard[] = [
  {
    index: 1,
    img: 'public/assets/imgs/home1/unsplash_pTrhfmj2jDA.png',
    category: 'Surgeon',
    title: 'Briyan Nevalli',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
    socialIcon: [
      'public/assets/icons/home1/twitter.png',
      'public/assets/icons/home1/facebook_f.png',
      'public/assets/icons/home1/instagram.png',
    ],
  },
  {
    index: 2,
    img: 'public/assets/imgs/home1/unsplash_FVh_yqLR9eA.png',
    category: 'Dermatologist',
    title: 'Bella sebastian',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
    socialIcon: [
      'public/assets/icons/home1/twitter.png',
      'public/assets/icons/home1/facebook_f.png',
      'public/assets/icons/home1/instagram.png',
    ],
  },
  {
    index: 3,
    img: 'public/assets/imgs/home1/unsplash_mEZ3PoFGs_k.png',
    category: 'Stylist expert',
    title: 'Lilly Adams',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
    socialIcon: [
      'public/assets/icons/home1/twitter.png',
      'public/assets/icons/home1/facebook_f.png',
      'public/assets/icons/home1/instagram.png',
    ],
  },
]

const HomeTeams = () => {
  return (
    <Container tw="mb-[145px] md:mb-20 sm:mb-10">
      <section tw="w-full">
        <BlockTextSection tw="mb-[115px] md:mb-10 sm:mb-4">
          <Category>Professional Teams</Category>
          <Label>The Professional expert</Label>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
          </Description>
        </BlockTextSection>
        {listCardTeams.length > 0 && (
          <CardList tw="sm:gap-y-9">
            {listCardTeams.map((item, index) => (
              <CardItem
                css={[
                  tw`w-[24%] h-[626px] shrink-0 rounded-[42px] pt-[91px] text-center bg-transparent shadow-none md:w-4/5 md:h-auto md:pb-[10%] md:bg-white md:shadow-sdprimary sm:w-4/5 sm:h-auto sm:py-[26px] sm:bg-white sm:shadow-sdprimary`,
                  index === 1 ? tw`w-[37%] bg-white shadow-sdprimary` : '',
                ]}
                key={item.index || index}
              >
                <img
                  css={[
                    tw`w-[53.88%] md_max:w-[50%] sm:w-[50%] mx-auto mb-[52px]`,
                    index === 1 ? tw`w-[34.88%]` : '',
                  ]}
                  src={item.img}
                  alt="img card home teams"
                />
                <Category>{item.category}</Category>
                <h3 tw="w-4/5 mx-auto h-auto shrink-0 text-primary text-center text-lg sm:text-sm font-[600] mb-0 mt-[12px]">
                  {item.title}
                </h3>
                <p
                  css={[
                    tw`w-[94%] mx-auto h-auto mt-[18px] mb-[50px] shrink-0 text-secondary text-sm sm:text-[10px] [font-weight: 400] font-normal leading-normal tracking-[1.4px]`,
                    index === 1 ? tw`w-[72%]` : '',
                  ]}
                >
                  {item.desc}
                </p>

                <div
                  css={[
                    tw`flex items-center justify-center gap-x-[12.68%]`,
                    index === 1 && tw`gap-x-[8%]`,
                  ]}
                >
                  {item.socialIcon?.map(icon => (
                    <div
                      key={icon}
                      tw="w-[49px] h-[49px] shrink-0 bg-white rounded-full flex items-center justify-center shadow-sdsecondary cursor-pointer"
                    >
                      <img
                        src={icon}
                        tw="w-[25px] object-contain h-[25px] shrink-0 m-0"
                        alt="image social"
                      />
                    </div>
                  ))}
                </div>
              </CardItem>
            ))}
          </CardList>
        )}
      </section>
    </Container>
  )
}

export default HomeTeams
