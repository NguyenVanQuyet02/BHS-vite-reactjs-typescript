import React, { ReactNode } from 'react'
import { styled } from 'twin.macro'
const Description = styled.span`
  display: block;
  width: 90%;
  margin: 0 auto;
  height: auto;
  flex-shrink: 0;
  color: var(--secondary-text-color);
  font-size: var(--font-size-16);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.6px;
  margin-top: 19px;
  @media (max-width: 767px) {
    margin-bottom: 36px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
  }
`

export default Description
