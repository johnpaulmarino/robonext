import React from 'react'
import styled from 'styled-components'

import sectionTitles from '../../../cms/robocalls/section-titles'
import Spacer from '../atoms/Spacer'
import { S } from '../../../styles/breakpoints'
import TYPE, { TYPE_COLORS } from '../../../styles/type'
import { BLACK, WHITE } from '../../../styles/colors'
import SPACING from '../../../styles/spacing'

import HorizontalScroll from '../molecules/horizontal-scroll-fighting'
import FightingCards from '../molecules/fighting-cards'
import fightingContent, { dyk } from '../../../cms/robocalls/fighting-content'
import roboSlugs from '../../../cms/robocalls/slugs'


import backgroundGrid from '../../../static/background-textures/s03-grid.png'
import fightImg01 from '../../../static/horizontal-fighting/S-03-Robo_ICONS_01.png'
import fightImg02 from '../../../static/horizontal-fighting/S-03-Robo_ICONS-02.png'
import fightImg03 from '../../../static/horizontal-fighting/S-03-Robo_ICONS-03.png'
import fightImg04 from '../../../static/horizontal-fighting/S-03-Robo_ICONS-05.png'
import fightImg05 from '../../../static/horizontal-fighting/S-03-Robo_ICONS-04.png'

import {
  Section,
  StyledSectionTitleContainer,
  SectionContent,
} from '../styled/Section'

const fightingImages = [
  fightImg01,
  fightImg02,
  fightImg03,
  fightImg04,
  fightImg05,
]

const fightingImagesAltTags = [
  'Cellphone with incoming caller getting blocked',
  'List of illegal and scam robocallers',
  'Computer system under a magnifying glass',
  'Partially artificial brain with binary numbers behind it',
  'Network of callers and receivers',
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
  background-size: cover;
  background-position: center;
  background: radial-gradient(#333e57, #1d2435);
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

const HorizontalContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% + 5rem);
  padding-bottom: 5rem;

  @media (max-width: ${S - 1}px) {
    display: none;
  }
`

const MobileContainer = styled.div`
  display: none;
  padding-bottom: 5rem;

  @media (max-width: ${S - 1}px) {
    display: block;
  }
`

const BlockBoxContainer = styled.div`
  margin: 2rem auto 0;
  position: relative;
  width: 325px;
  height: 110%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`

const BlockBox = styled.div`
  position: relative;
  border: 2px solid black;
  border-radius: 4px;
  width: 100%;
  margin: 1.8rem 0;
  box-shadow: 10px 10px 0px -2px rgba(0, 0, 0, 0.05);

  @media (max-width: ${S}px) {
    max-width: none;
  }

  @media (max-width: 320px) {
    width: 90%;
  }
`

const BlockBoxHeader = styled.h4`
  margin: 0;
  padding: ${SPACING.xs}rem ${SPACING.xs}rem;
  font-size: ${TYPE.labelTiny.size}rem;
  letter-spacing: ${TYPE.labelTiny.letterSpacing}px;
  line-height: ${TYPE.labelTiny.line};
  font-family: ${TYPE.labelTiny.font};
  font-weight: ${TYPE.labelTiny.weight};
  color: ${TYPE_COLORS.white};
  background-color: ${BLACK};
  text-transform: uppercase;
`

const BlockBoxParagraph = styled.p`
  margin: 0;
  padding: ${SPACING.s}rem;
  font-size: ${TYPE.s.size}rem;
  font-family: ${TYPE.s.font};
  font-weight: ${TYPE.s.weight};
  line-height: ${TYPE.blockBoxParagraph.line};
  letter-spacing: ${TYPE.s.letterSpacing}px;
  background-color: ${WHITE};

  @media (max-width: ${S}px) {
    font-size: ${TYPE.mobileBlockBox.size}rem;
    letter-spacing: ${TYPE.mobileBlockBox.letterSpacing}px;
    padding: ${props =>
      props.learnMoreUrl ? '0.75rem 1rem 2em' : '0.75rem 1rem .9em'};
  }
`

const StyledSectionContent = styled(SectionContent)`
  opacity: 1;
  transform: translateY(0%);
`

export default function Component({ checkSectionVisited }) {
  const section = sectionTitles[3]

  const visited = checkSectionVisited(3)
  return (
    <Section>
      <SectionBackground bgImage={backgroundGrid} />
      <Spacer height={0} id={roboSlugs[3]} style={{ paddingTop: '1rem' }} />

      <StyledSectionContent>
        <HorizontalContainer>
          <HorizontalScroll
            header={
              <StyledSectionTitleContainer
                section={section}
                active={visited}
                sectionNum={3}
                inverse
                largeMaxWidth={770}
                medMaxWidth={600}
                smallMaxWidth={600}
              />
            }
            cards={
              <FightingCards
                content={fightingContent}
                images={fightingImages}
                altTags={fightingImagesAltTags}
              />
            }
            active={visited}
          />
        </HorizontalContainer>
        <MobileContainer>
          <StyledSectionTitleContainer
            section={section}
            inverse
            active={visited}
          />
          <FightingCards
            content={fightingContent}
            images={fightingImages}
            altTags={fightingImagesAltTags}
          />
          <BlockBoxContainer>
            <BlockBox>
              <BlockBoxHeader>Did You Know?</BlockBoxHeader>
              <BlockBoxParagraph>{dyk}</BlockBoxParagraph>
            </BlockBox>
          </BlockBoxContainer>
        </MobileContainer>
      </StyledSectionContent>
    </Section>
  )
}
