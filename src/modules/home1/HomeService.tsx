import React from 'react'
import {
  BlockTextSection,
  Category,
  Container,
  Description,
  Label,
} from '../../components'
import { CardItem, CardList } from '../../components/cards'
import { ICard } from '../../interface/interface'
import tw, { styled } from 'twin.macro'
const listCardService: ICard[] = [
  {
    index: 1,
    img: '/assets/imgs/home1/animation1.png',
    title: 'Beauty consultation',
    desc: 'Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.',
  },
  {
    index: 2,
    img: '/assets/imgs/home1/animation2.png',
    title: 'Skin treatments',
    desc: 'Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.',
  },
  {
    index: 3,
    img: '/assets/imgs/home1/animation3.png',
    title: 'Beauty product',
    desc: 'Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.',
  },
]

const HomeService = () => {
  return (
    <Container tw="mb-[134.44px] md:mb-[80px] sm:mb-[40px]">
      <section tw="w-full text-center mx-auto">
        <BlockTextSection tw="mb-[82px] md:mb-[50px] sm:mb-10">
          <Category>Main Services</Category>
          <Label tw="lg:w-[40%]">Learn services to focus on your beauty</Label>
          <Description tw="lg:w-[75%]">
            Porta rhoncus orci condimentum vitae lobortis eu dignissim non
            massa. Non parturient amet, feugiat tellus sagittis, scelerisque
            eget nulla turpis.
          </Description>
        </BlockTextSection>
        {listCardService.length > 0 && (
          <CardList>
            {listCardService.map((item, index) => (
              <div
                tw="w-[30%] min-w-[268px] h-fit sm:w-[80%]  sm:mb-8"
                key={item.index || index}
              >
                <CardItem>
                  <img
                    tw="mx-auto mb-[58px] w-[48%] h-auto shrink-0 object-contain"
                    src={item.img}
                    alt="img card service"
                  />
                  <h3 tw="w-4/5 mx-auto h-auto shrink-0 text-primary text-center text-lg sm:text-sm font-[600] mb-[6px]">
                    {item.title}
                  </h3>
                  <p tw="w-[82%] mx-auto h-auto mt-[17px] shrink-0 text-secondary text-sm sm:text-[10px] [font-weight: 400] font-normal leading-normal tracking-[1.4px]">
                    {item.desc}
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
