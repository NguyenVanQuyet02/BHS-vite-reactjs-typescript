import React from 'react'
import tw, { styled } from 'twin.macro'

const CardItem = styled.section`
  width: 100%;
  min-width: 261px;
  height: 458px;
  text-align: center;
  flex-shrink: 0;
  border-radius: 42px;
  background: var(--white-text-color);
  box-shadow: 0px 25px 50px 25px #f6f7ff;
  padding-top: 59px;
  @media (max-width: 767px) {
    width: 80%;
    height: auto;
    margin: 0 auto;
    padding-bottom: 32px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding-bottom: 32px;
  }
`
export default CardItem
