import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

import { WHITE } from '@/styles/colors';
import { XS, S, M, L, XL, XXL } from '@/styles/breakpoints';
import SPACING from '@/styles/spacing';
import TYPE, { TYPE_COLORS } from '@/styles/type';

import Grid from '@/components/atoms/Grid';
import Column from '@/components/atoms/Column';

const Header = styled.header`
  padding: 68px 0 0;
  min-height: 750px;
  height: 100vh;

  @media (max-width: ${S}px) {
    min-height: 500px;
    height: 100vh;
  }
`;

const HeaderBackground = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
  background-color: white;
  overflow: hidden;

  @media (max-width: ${M}px) {
    height: calc(100vh - 325px);
  }

  @media (max-width: ${S}px) {
    height: calc(100vh - 325px);
  }

  @media (max-width: 415px) {
    height: 65%;
  }

  @media (max-width: 375px) {
    height: 62%;
  }

  @media (max-width: 375px) and (min-height: 800px) {
    height: 70%;
  }

  @media (max-width: ${M}px) and (min-height: 1350px) {
    height: 67%;
  }

  @media (min-width: 1200px) and (max-width: ${L}px) and (min-height: 1024px) {
    height: calc(100vh - 425px);
  }
`;

const imageFadeIn = keyframes`
  from {opacity: 0}
  to {opacity: 1}
`;

const HeaderBackgroundImage = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  opacity: 0;
  animation: ${imageFadeIn} 0.7s forwards;

  @media (min-width: ${S + 1}px) {
    display: ${props => (props.backgroundVideoUrl ? 'none' : 'inline-block')};
  }
`;

const HeaderBackgroundVideoImage = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  opacity: 0;
  animation: ${imageFadeIn} 0.3s forwards;
  animation-delay: 0.4s;

  @media (min-width: 1500px) and (max-height: 850px) {
    height: 120%;
  }

  @media (min-width: 1400px) and (max-height: 775px) {
    height: 120%;
  }

  /* iPad Pro Verticle and long screens*/
  @media (max-width: 1900px) and (min-height: 1275px) {
    height: 120%;
    width: auto;
  }

  @media (max-width: ${S}px) {
    display: none;
  }
`;

const HeaderBackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  min-width: 100%;
  min-height: 100%;
  height: 110%;
  width: auto;
  opacity: ${({ vidReady }) => (vidReady ? 1 : 0)};

  ${props =>
    props.nonWideVideo &&
    css`
      min-width: auto;
      min-height: auto;
      height: auto;
      width: 100%;
    `}

  @media (min-width: 1500px) and (max-height: 850px) {
    height: 120%;
  }

  @media (min-width: 1400px) and (max-height: 775px) {
    height: 120%;
  }

  /* iPad Pro Verticle and long screens*/
  @media (max-width: 1900px) and (min-height: 1275px) {
    height: 120%;
    width: auto;
  }

  @media (max-width: ${S}px) {
    display: none;
  }
`;

const HeaderGridContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const HeaderCard = styled.div`
  position: relative;
  margin: 0;
  padding: ${SPACING.l}rem 0;
  width: 100%;
  background-color: ${WHITE};
  text-align: center;

  @media (max-width: ${L}px) {
    padding: ${SPACING.xl}rem 0;
  }

  @media (max-width: 374px) {
    padding: ${SPACING.l}rem 0;
  }

  @media (max-width: ${M}px) and (min-height: 1350px) {
    padding: ${SPACING.xl}rem 0 6rem;
  }
`;

const HeaderCardTitle = styled.h1`
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  padding: 0 1rem;
  font-size: 5vw;
  line-height: ${TYPE.jumbo.line};
  font-family: ${TYPE.jumbo.font};
  font-weight: ${TYPE.jumbo.weight};

  @media (min-width: 1900px) {
    max-width: 80%;
  }

  @media (max-width: ${XL}px) {
    font-size: ${TYPE.jumbo.size}rem;
    max-width: 75%;
  }

  @media (max-width: ${L}px) {
    max-width: 700px;
  }

  @media (max-width: ${M}px) {
    font-size: ${TYPE.jumbo.size}rem;
  }

  @media (max-width: ${S}px) {
    font-size: ${TYPE.jumbo.size}rem;
  }

  @media (max-width: ${XS + 150}px) {
    font-size: ${TYPE.jumbo.size - 1.5}rem;
    max-width: 450px;
  }

  @media (max-width: 374px) {
    padding: 0 0.5rem;
    font-size: 2.25rem;
  }

  @media (max-width: ${L}px) and (min-height: 1350px) {
    font-size: ${TYPE.jumbo.size + 1}rem;
  }

  @media (min-width: ${S}px) and (max-width: ${XXL}px) and (min-height: 1024px) {
    font-size: ${TYPE.jumbo.size + 1}rem;
    padding: 0 3rem;
  }
`;

const backgroundSlide = keyframes`
  from { background-position: -800px; }
  to { background-position: 800px; }
`;

const fadeIn = keyframes`
  from { color: transparent; }
  to {color: black; }
`;
const subFadeIn = keyframes`
  from { color: transparent; }
  to {color: ${TYPE_COLORS.grey}}
`;

const dotFadeIn = keyframes`
  from { color: transparent; }
  to {color: rgb(119, 205, 211); }
`;

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
`;

const TitleSpan = styled.span`
  position: relative;
  display: inline;
  margin: 0 auto;
  color: transparent;
  z-index: -1;
  animation: ${fadeIn} 0.4s forwards;
  animation-delay: 0.8s;
`;
const TitleSpan1 = styled(TitleSpan)``
const TitleSpan2 = styled(TitleSpan)``
const TitleSpan3 = styled(TitleSpan)`
  color: transparent;
  animation: ${dotFadeIn} 0.4s forwards;
  animation-delay: 0.8s;
`;

const HeaderCardSubtitle = styled.h2`
  color: transparent;
  font-size: ${TYPE.lede.size}rem;
  line-height: ${TYPE.lede.line};
  font-family: ${TYPE.lede.font};
  font-weight: ${TYPE.lede.weight};
  margin: 1.5rem auto 0;
  padding: 0 0.9rem;
  max-width: ${props => (props.page === 'robocalls' ? '700px' : '750px')};
  animation: ${subFadeIn} 0.5s forwards;
  animation-delay: 0.9s;

  @media (max-width: ${XL}px) {
    max-width: ${props => (props.page === 'robocalls' ? '700px' : '750px')};
    font-size: ${TYPE.lede.size + 0.2}rem;
  }

  @media (max-width: ${M}px) {
    font-size: ${TYPE.lede.size}rem;
    max-width: 675px;
  }

  @media (max-width: ${S}px) {
    margin-top: 1rem;
    font-size: ${TYPE.lede.size + 0.5}rem;
  }

  @media (max-width: ${XS + 150}px) {
    font-size: ${TYPE.lede.size - 0.2}rem;
  }

  @media (max-width: 415px) {
    margin-top: 1.25rem;
    font-size: ${TYPE.lede.size - 0.5}rem;
  }

  @media (max-width: 374px) {
    font-size: 1.134rem;
  }

  @media (max-width: ${M}px) and (min-height: 1350px) {
    font-size: ${TYPE.lede.size + 0.7}rem;
  }

  @media (min-width: 1200px) and (max-width: ${XXL}px) and (min-height: 1024px) {
    font-size: ${TYPE.lede.size + 0.3}rem;
  }
`;

const HeaderBackgroundContainer = ({
  backgroundImage,
  backgroundVideoUrl,
  backgroundVideoImage,
  videoTitle,
}) => {
  const [vidReady, setVidReady] = useState(false)
  return (
    <HeaderBackground>
      {backgroundImage && (
        <HeaderBackgroundImage
          backgroundImage={backgroundImage}
          backgroundVideoUrl={backgroundVideoUrl}
        />
      )}
      {backgroundVideoUrl && (
        <div>
          <HeaderBackgroundVideoImage
            src={backgroundVideoImage}
            alt="Phone with animated incoming robocalls"
          />
          <HeaderBackgroundVideo
            playsInline
            muted
            autoPlay
            loop
            onCanPlayThrough={() => {
              setTimeout(() => setVidReady(true), 200)
            }}
            vidReady={vidReady}
            nonWideVideo
          >
            <source
              src={backgroundVideoUrl}
              type="video/mp4"
              media="all and (min-width: 768px)"
              title={videoTitle}
            ></source>
          </HeaderBackgroundVideo>
        </div>
      )}
    </HeaderBackground>
  )
}

const header = React.memo(function header({
  headerTitles,
  backgroundImage,
  backgroundVideoUrl,
  backgroundVideoImage,
  videoTitle,
  page,
}) { const { titleOne, titleTwo, subtitle } = headerTitles
return (
  <Header>
    <HeaderBackgroundContainer
      backgroundImage={backgroundImage}
      backgroundVideoUrl={backgroundVideoUrl}
      backgroundVideoImage={backgroundVideoImage}
    />
    <HeaderGridContainer>
      <Grid>
        <Column width={1} smallWidth={12} />
        <Column width={10} smallWidth={12}>
          <HeaderCard>
            <HeaderCardTitle>
              <TitleSpanContainer>
                <TitleSpan1>{titleOne}</TitleSpan1>
                <TitleSpan2>{titleTwo}</TitleSpan2>
                <TitleSpan3>.</TitleSpan3>
              </TitleSpanContainer>
            </HeaderCardTitle>
            <HeaderCardSubtitle page={page}>{subtitle}</HeaderCardSubtitle>
          </HeaderCard>
        </Column>
        <Column width={1} smallWidth={12} />
      </Grid>
    </HeaderGridContainer>
  </Header>
)});

export default header;
