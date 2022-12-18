import React, { useState } from 'react'
import styled from 'styled-components'
import { Waypoint } from 'react-waypoint'

import sectionTitles from '../../../cms/robocalls/section-titles'
import whatIsContent from '../../../cms/robocalls/what-is-robocall'
import roboSlugs from '../../../cms/robocalls/slugs'

import Spacer from '../atoms/Spacer'
import Grid from '../atoms/Grid'
import Column from '../atoms/Column'

import lightgreyTexture from '../../../static/background-textures/lightgrey-texture.jpg'
import { TEEL } from '../../../styles/colors'
import TYPE, { TYPE_COLORS } from '../../../styles/type'
import { S } from '../../../styles/breakpoints'

import TypesCallsPhone from '../atoms/types-of-calls-phone'

import mobileImage1 from '../../../static/types-of-calls/types-of-calls-mobile-4.png'
import mobileImage2 from '../../../static/types-of-calls/types-of-calls-mobile-3.png'
import mobileImage3 from '../../../static/types-of-calls/types-of-calls-mobile-2.png'
import mobileImage4 from '../../../static/types-of-calls/types-of-calls-mobile-1.png'

import {
  Section,
  StyledSectionTitleContainer,
  SectionContent,
} from '../styled/Section'

const mobileImages = [mobileImage1, mobileImage2, mobileImage3, mobileImage4]
const mobileImageAltTags = [
  'Computer with keyboard connected to drives and networks with cables',
  'Icon of airplane with "On Time" status',
  'Outside of financial building',
  'Warning triangle with exclamation mark',
]

const BackgroundContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`

const BackgroundContainerInner = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`

const BackgroundFullHeight = styled.div`
  position: sticky;
  top: 68px;
  height: 100vh;
  width: 100%;
`

const BackgroundImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url(${({ bgImage }) => bgImage});
  background-size: cover;
  background-position: center;
`

const SectionBackground = ({ bgImage }) => (
  <BackgroundContainer>
    <BackgroundContainerInner>
      <BackgroundFullHeight>
        <BackgroundImageOverlay bgImage={bgImage} />
      </BackgroundFullHeight>
    </BackgroundContainerInner>
  </BackgroundContainer>
)

const PhoneContainer = styled.div`
  width: 100%;
  height: calc(100vh - 68px);
  position: sticky;
  top: 8rem;
  display: flex;
  justify-content: center;
  @media (max-width: ${S}px) {
    display: none;
  }
`

const PhoneContainerInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  svg {
    height: 80%;
    max-width: 100%;
    width: auto;
  }
`

const ContentBlockContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  @media (max-width: ${S}px) {
    height: auto;
    text-align: center;
    display: block;
    justify-content: unset;
    align-items: unset;
    margin: 0 auto 4rem;
    max-width: 375px;
  }
`

const ContentBlock = styled.div`
  max-width: 450px;
`

const BlockProgress = styled.h3`
  margin: 0 0 0.5rem 1px;
  padding: 0;
  color: ${TEEL};
  font-family: ${TYPE.label.font};
  font-size: ${TYPE.label.size}rem;
  line-height: ${TYPE.label.line};
  letter-spacing: ${TYPE.label.letterSpacing}px;
`
const BlockHeader = styled.h2`
  margin: 0;
  padding: 0;
  color: ${TYPE_COLORS.black};
  font-family: ${TYPE.l.font};
  font-size: ${TYPE.l.size}rem;
  line-height: ${TYPE.l.line};
  font-weight: ${TYPE.l.weight};
  @media (max-width: ${S}px) {
    font-size: 1.5rem;
  }
`
const BlockBody = styled.p`
  margin: 0;
  padding: 8px 0 0;
  color: ${TYPE_COLORS.black};
  font-family: ${TYPE.bodySerif.font};
  font-size: ${TYPE.bodySerif.size}rem;
  line-height: ${TYPE.bodySerif.line};
  @media (max-width: ${S}px) {
    font-family: ${TYPE.bodySans.font};
    font-size: ${TYPE.bodySerif.size}rem;
    line-height: ${TYPE.bodySerif.line};
  }
`

const BlockImageMobile = styled.div`
  position: relative;
  display: none;
  margin: 0 auto;
  width: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  @media (max-width: ${S}px) {
    display: flex;
  }
  img {
    width: 100%;
    height: auto;
  }
`

const ContentContainer = styled.div`
  position: relative;
  height: auto;
  margin-top: -20vh;
  padding-bottom: 5rem;
  @media (max-width: ${S}px) {
    margin-top: 0;
  }
`

const waypointOffsets = {
  top: '30%',
  bottom: '30%',
}

const ContentBlocks = ({ content, setCurrentPhone }) =>
  content.map(({ header, body }, i) => (
    <ContentBlockContainer key={`what-content-${i}`}>
      <ContentBlock>
        <Waypoint
          onEnter={() => setCurrentPhone(i)}
          topOffset={waypointOffsets.top}
          bottomOffset={waypointOffsets.bottom}
          fireOnRapidScroll={false}
        />
        <BlockImageMobile>
          <img src={mobileImages[i]} alt={mobileImageAltTags[i]} />
        </BlockImageMobile>
        <BlockProgress>{i + 1}/4</BlockProgress>
        <BlockHeader>{header}</BlockHeader>
        <BlockBody>{body}</BlockBody>
      </ContentBlock>
    </ContentBlockContainer>
  ))

export default function Component({ checkSectionVisited }) {
  const [currentPhone, setCurrentPhone] = useState(-1)

  const section = sectionTitles[1]
  const visited = checkSectionVisited(1)
  return (
    <Section>
      <SectionBackground bgImage={lightgreyTexture} />
      <Spacer height={5} id={roboSlugs[1]} />
      <StyledSectionTitleContainer
        section={section}
        active={visited}
        largeMaxWidth={500}
        medMaxWidth={400}
        smallMaxWidth={400}
        sectionNum={1}
      />
      <SectionContent style={{ paddingBottom: '4rem' }} active={visited}>
        <Grid>
          <Column width={1} smallWidth={0} />
          <Column width={5} smallWidth={0} align={'top'}>
            <PhoneContainer>
              <PhoneContainerInner>
                <TypesCallsPhone currentPhone={currentPhone} />
              </PhoneContainerInner>
            </PhoneContainer>
          </Column>
          <Column width={6} smallWidth={12} align={'top'}>
            <ContentContainer>
              <ContentBlocks
                content={whatIsContent}
                setCurrentPhone={setCurrentPhone}
              />
            </ContentContainer>
          </Column>
        </Grid>
      </SectionContent>
    </Section>
  )
}
