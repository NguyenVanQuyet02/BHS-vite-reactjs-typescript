import React from 'react'
import { styled } from 'twin.macro'

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 150px;
  @media (max-width: 767px) {
    padding: 0 16px;
    margin-bottom: 40px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 0 16px;
    margin-bottom: 80px;
  }
`
export default Container
