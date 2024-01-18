import React from 'react'
import styled from 'styled-components'

const CardList = styled.div`
  display: flex;
  width: 100%;
  column-gap: 5%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 767px) {
    flex-direction: column;
    flex-wrap: wrap;
    margin-bottom: 0px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    flex-wrap: wrap;
    row-gap: 32px;
    margin-bottom: 0px;
  }
`
export default CardList
