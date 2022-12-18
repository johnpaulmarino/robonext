import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

import { XS, S, M, XL } from '../../../styles/breakpoints'
import SPACING from '../../../styles/spacing'
import TYPE, { TYPE_COLORS } from '../../../styles/type'

import Grid from '../atoms/Grid'
import Column from '../atoms/Column'

const Header = styled.header`
  position: relative;
  padding-top: 68px;
  width: 100%;
  height: 100vh;
`

const imageFadeIn = keyframes`
  from {opacity: 0}
  to {opacity: 1}
`

const BackgroundVideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70%;
  background: silver;
  overflow: hidden;
  background-color: white;

  @media (max-height: 700px) and (min-width: 1000px) {
    height: 72.5%;
  }
`

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0;
  animation: ${imageFadeIn} 0.7s forwards;
  animation-delay: 0.25s;
  object-fit: cover;
  object-position: center center;
`

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  object-fit: cover;
  object-position: center center;
  height: 100%;
  width: 100%;
  opacity: ${({ vidReady }) => (vidReady ? 1 : 0)};
  transition: opacity 0.1s;

  @media (max-width: ${XS}px) {
    display: none;
  }
`

const HeaderCardContainer = styled.div`
  position: absolute;
  bottom: 0%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderContainerInner = styled.div`
  position: relative;
  width: 100%;

  @media (max-height: 700px) and (min-width: 1000px) {
    width: 90%;
  }
`

const HeaderCard = styled.div`
  position: relative;
  width: 100%;
  background-color: white;
  text-align: center;
  padding: ${SPACING.xl + 1.2}rem ${SPACING.l}rem ${SPACING.xl + 1}rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media (max-width: ${XS}px) {
    padding: ${SPACING.s}rem;
  }

  @media (max-height: 700px) and (min-width: 1000px) {
    padding: ${SPACING.xl}rem ${SPACING.l}rem ${SPACING.l}rem;
  }
`

const Title = styled.h1`
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  font-size: 5vw;
  line-height: ${TYPE.jumbo.line};
  font-family: ${TYPE.jumbo.font};
  font-weight: ${TYPE.jumbo.weight};
  color: ${TYPE_COLORS.black};

  @media (max-width: ${XL}px) {
    font-size: 4.25rem;
  }

  @media (max-width: ${M}px) {
    font-size: 3rem;
  }

  @media (max-height: 700px) and (min-width: 1000px) {
    font-size: 2.625rem;
  }

  @media (max-width: ${XS}px) {
    font-size: 2.25rem;
  }
`

const fadeIn = keyframes`
  from { color: transparent; }
  to {color: black; }
`

const subFadeIn = keyframes`
  from { color: transparent; }
  to {color: ${TYPE_COLORS.grey}}
`

const dotFadeIn = keyframes`
  from { color: transparent; }
  to {color: rgb(119, 205, 211); }
`

const backgroundSlide = keyframes`
  from { background-position: -800px; }
  to { background-position: 800px; }
`

const TitleSpanContainer = styled.span`
  position: relative;
  display: inline;
  margin: 0 auto;
  background: linear-gradient(90deg, #f6f6f6 6%, #f0f0f0 23%, #f6f6f6 46%);
  background-size: 1000px 130px;
  background-position: 50vw 50vh;
  will-change: background-position;
  background-repeat: no-repeat;
  animation: ${backgroundSlide} 0.4s;
  animation-delay: 0.5s;
  animation-timing-function: linear;
  z-index: 100;
`

const TitleSpan = styled.span`
  position: relative;
  display: inline;
  margin: 0 auto;
  color: transparent;
  z-index: -1;
  animation: ${fadeIn} 0.4s forwards;
  animation-delay: 0.8s;
`
const TitleSpan1 = styled(TitleSpan)``
const TitleSpan2 = styled(TitleSpan)``
const TitleSpan3 = styled(TitleSpan)`
  color: transparent;
  animation: ${dotFadeIn} 0.4s forwards;
  animation-delay: 0.8s;
`

const Subtitle = styled.h2`
  color: transparent;
  font-size: 2rem;
  max-width: 700px;
  line-height: ${TYPE.lede.line};
  font-family: ${TYPE.lede.font};
  font-weight: ${TYPE.lede.weight};
  animation: ${subFadeIn} 0.5s forwards;
  animation-delay: 0.9s;

  @media (max-width: ${M}px) {
    font-size: 1.5rem;
    max-width: 550px;
  }

  @media (max-width: ${S}px) {
    max-width: 550px;
  }

  @media (max-width: ${XS}px) {
    font-size: 1.1rem;
  }

  @media (max-height: 700px) and (min-width: 1000px) {
    font-size: 1.5rem;
    max-width: 550px;
  }
`
export default function Component({ headerTitles, backgroundVideoUrl, backgroundImage }) {
  const [vidReady, setVidReady] = useState(false)
  const { titleOne, titleTwo, subtitle } = headerTitles
  return (
    <Header>
      <BackgroundVideoContainer>
        <BackgroundImage src={backgroundImage} />
        <BackgroundVideo
          url={backgroundVideoUrl}
          playsInline
          muted
          autoPlay
          loop
          onCanPlayThrough={() => {
            setTimeout(() => setVidReady(true), 200)
          }}
          vidReady={vidReady}
        >
          <source
            src={backgroundVideoUrl}
            type="video/mp4"
            media="all and (min-width: 768px)"
          />
        </BackgroundVideo>
      </BackgroundVideoContainer>
      <HeaderCardContainer>
        <HeaderContainerInner>
          <Grid>
            <Column width={1} smallWidth={12} />
            <Column width={10} smallWidth={12}>
              <HeaderCard>
                <Title>
                  <TitleSpanContainer>
                    <TitleSpan1>{titleOne}</TitleSpan1>
                    <TitleSpan2>{titleTwo}</TitleSpan2>
                    <TitleSpan3>.</TitleSpan3>
                  </TitleSpanContainer>
                </Title>
                <Subtitle>{subtitle}</Subtitle>
              </HeaderCard>
            </Column>
            <Column width={1} smallWidth={12} />
          </Grid>
        </HeaderContainerInner>
      </HeaderCardContainer>
    </Header>
  )
}
