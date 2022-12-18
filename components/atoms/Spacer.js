import React from 'react'
import styled from 'styled-components'
import { XL, L, M, S } from '../../../styles/breakpoints'

const StyledSpacer = styled.div`
  height: ${props => props.height}rem;
  width: 100%;

  @media screen and (max-width: ${XL}px) {
    height: ${props => props.largeHeight}rem;
  }

  @media screen and (max-width: ${L}px) {
    height: ${props => props.medHeight}rem;
  }

  @media screen and (max-width: ${M}px) {
    height: ${props => props.smallHeight}rem;
  }

  @media screen and (max-width: ${S}px) {
    height: ${props => props.xSmallHeight}rem;
  }
`

const Spacer = props => {
  const {
    height,
    largeHeight = height,
    medHeight = largeHeight,
    smallHeight = medHeight,
    xSmallHeight = smallHeight,
    ...rest
  } = props
  return (
    <StyledSpacer
      height={height}
      largeHeight={largeHeight}
      medHeight={medHeight}
      smallHeight={smallHeight}
      xSmallHeight={xSmallHeight}
      {...rest}
    />
  )
}

export default Spacer
