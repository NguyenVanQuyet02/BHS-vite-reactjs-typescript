import React from 'react'
import { styled } from 'twin.macro'

const BlockTextSection = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 auto;

  @media (min-width: 768px) and (max-width: 1024px) {
    text-align: center !important;
    margin: 0 auto;
  }
`
export default BlockTextSection
