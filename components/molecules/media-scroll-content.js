import React from 'react'
import styled from 'styled-components'
import { Waypoint } from 'react-waypoint'
import { debounce } from 'lodash'

import TYPE, { TYPE_COLORS } from '../../../styles/type'
import SPACING from '../../../styles/spacing'
import { S, L } from '../../../styles/breakpoints'
import { WHITE, TEEL, BLACK } from '../../../styles/colors'

import arrowRight from '../../../static/arrows/arrow-right.svg'

import ms1Mobile from '../../../static/media-scroll-mobile/ms-1-mobile.jpg'
import ms2Mobile from '../../../static/media-scroll-mobile/ms-2-mobile.jpg'
import ms3Mobile from '../../../static/media-scroll-mobile/ms-3-mobile.jpg'

const imgArrayMobile = [ms1Mobile, ms2Mobile, ms3Mobile]

const TextBlockContainer = styled.div`
  position: relative;
  width: 60%;
  min-height: calc(100vh - 68px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;

  @media (max-width: ${S}px) {
    width: 100%;
    min-height: initial;
  }
`

const TextBlock = styled.div`
  position: relative;
  padding: 1rem;
  width: 100%;
  max-width: 525px;

  @media (max-width: ${S}px) {
    padding: 1.3rem;
  }

  @media (min-height: 700px) and (min-width: ${L}px) {
    /* margin-top: -10vh; */
  }

  @media (min-height: 900px) and (min-width: ${L}px) {
    margin-top: -15vh;
  }
`

const BlockPreheader = styled.h4`
  position: relative;
  color: ${TEEL};
  text-transform: uppercase;
  font-size: ${TYPE.label.size}rem;
  letter-spacing: ${TYPE.label.letterSpacing}px;
  margin: ${SPACING.s}rem 0 ${SPACING.s}rem;
  font-family: ${TYPE.label.font};
  font-weight: ${TYPE.label.weight};
`

const BlockHeader = styled.h3`
  position: relative;
  font-family: ${TYPE.l.font};
  letter-spacing: 0.01px;
  line-height: ${TYPE.l.line};
  font-size: ${TYPE.l.size}rem;
  font-weight: normal;
  margin: ${SPACING.s}rem 0 ${SPACING.m}rem;

  @media (max-width: ${S}px) {
    font-family: ${TYPE.m.font};
    font-weight: ${TYPE.m.weight};
    font-size: ${TYPE.m.size}rem;
    letter-spacing: 0.01px;
    line-height: ${TYPE.m.line};
    margin: ${SPACING.s}rem 0 ${SPACING.m}rem;
  }

  @media (max-height: 750px) {
    font-size: 3.5vh;
  }
`

const BlockBox = styled.div`
  position: relative;
  border: 2px solid black;
  border-radius: 4px;
  width: 100%;
  max-width: 325px;
  margin: 1.8rem 0;
  box-shadow: 10px 10px 0px -2px rgba(0, 0, 0, 0.05);

  @media (max-width: ${S}px) {
    max-width: none;
  }
`

const BlockBoxHeader = styled.h4`
  position: relative;
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
  position: relative;
  margin: 0;
  padding: ${props =>
    props.learnMoreUrl ? '0.75rem 1rem 1.5rem' : '0.75rem 1rem .9rem'};
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

const BlockBoxButton = styled.a`
  cursor: pointer;
  position: absolute;
  width: 135px;
  left: 1rem;
  bottom: -1rem;
  height: 1.4rem;
  font-size: ${TYPE.s.size}rem;
  font-family: ${TYPE.s.font};
  line-height: ${TYPE.s.line};
  letter-spacing: ${TYPE.s.letterSpacing}px;
  text-decoration: none;
  background-color: ${BLACK};
  color: ${TYPE_COLORS.white};
  border-radius: 4rem;
  padding: 0.9rem 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid transparent;
  transition: background-color 0.3s !important;

  &:hover {
    background-color: ${TEEL};
    color: white !important;
  }

  @media (max-width: ${S}px) {
    width: 140px;
    height: 2rem;
    letter-spacing: ${TYPE.mobileBlockBox.letterSpacing}px;
    line-height: 1;
  }

  &:focus {
    outline: none;
    border: 3px solid #70cad6;
    /* box-sizing: content-box; */
  }
`

const LearnMore = styled.div`
  position: relative;
  top: -0.92px;

  @media (max-width: ${S}px) {
    top: -1px;
  }
`

const LearnMoreArrow = styled.div`
  position: relative;
  top: 1.5px;
  margin-left: 10px;

  @media (max-width: ${S}px) {
    top: 0.5px;
  }
`

const debounceSetCurrentMedia = debounce(
  (currentMedia, dispatchCurrentMedia) =>
    dispatchCurrentMedia({ currentMedia }),
  200,
  { leading: false }
)

const wpOffsets = {
  top: '10%',
  bottom: '10%',
}

export const LargeScreenContent = React.memo(
  ({ sectionContent, dispatchCurrentMedia }) =>
    sectionContent.map((content, i) => (
      <TextBlockContainer key={`content-${i}`}>
        <TextBlock>
          <BlockPreheader>{content.preHeader}</BlockPreheader>
          <BlockHeader>{content.header}</BlockHeader>
          <Waypoint
            onEnter={() => debounceSetCurrentMedia(i, dispatchCurrentMedia)}
            fireOnRapidScroll={false}
            topOffset={wpOffsets.top}
            bottomOffset={wpOffsets.bottom}
          />
          <BlockBox>
            <BlockBoxHeader>{content.boxHeader}</BlockBoxHeader>
            <BlockBoxParagraph
              learnMoreUrl={content.learnMoreUrl}
              dangerouslySetInnerHTML={{ __html: content.boxParagraph }}
            ></BlockBoxParagraph>
            {content.learnMoreUrl ? (
              <BlockBoxButton
                href={content.learnMoreUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LearnMore>Learn More</LearnMore>
                <LearnMoreArrow>
                  <img src={arrowRight} alt="Learn More" width="12.5px" />
                </LearnMoreArrow>
              </BlockBoxButton>
            ) : null}
          </BlockBox>
        </TextBlock>
      </TextBlockContainer>
    ))
)

export const SmallScreenContent = React.memo(({ sectionContent }) =>
  sectionContent.map((content, i) => (
    <TextBlockContainer key={`content-${i}`}>
      <TextBlock>
        <div style={{ paddingTop: '10px' }}>
          <img src={imgArrayMobile[i]} width="100%" alt="" />
        </div>
        <BlockPreheader>{content.preHeader}</BlockPreheader>
        <BlockHeader>{content.header}</BlockHeader>
        <BlockBox>
          <BlockBoxHeader>{content.boxHeader}</BlockBoxHeader>
          <BlockBoxParagraph
            learnMoreUrl={content.learnMoreUrl}
            dangerouslySetInnerHTML={{ __html: content.boxParagraph }}
          ></BlockBoxParagraph>
          {content.learnMoreUrl ? (
            <BlockBoxButton
              href={content.learnMoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LearnMore>Learn More</LearnMore>
              <LearnMoreArrow>
                <img src={arrowRight} alt="Learn More" width="14.5px" />
              </LearnMoreArrow>
            </BlockBoxButton>
          ) : null}
        </BlockBox>
      </TextBlock>
    </TextBlockContainer>
  ))
)
