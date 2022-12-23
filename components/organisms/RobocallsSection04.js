import React from 'react';
import styled from 'styled-components';

import sectionTitles from 'cms/robocalls/section-titles';
import roboSlugs from 'cms/robocalls/slugs';
import Spacer from 'components/atoms/Spacer';

import { S } from 'styles/breakpoints';


import HorizontalScroll from 'components/molecules/horizontal-scroll';
import EnforcementCards from 'components/molecules/enforcement-cards';
import enforcementContent, { sixthCardContent } from 'cms/robocalls/enforcement-content';


import {
  Section,
  StyledSectionTitleContainer,
  SectionContent,
} from 'components/styled/Section';

const BackgroundContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const BackgroundContainerInner = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const BackgroundFullHeight = styled.div`
  position: sticky;
  top: 68px;
  height: 100vh;
  width: 100%;
`;

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
`;

export const SectionBackground = ({ bgColor, bgGradient, bgImage }) => (
  <BackgroundContainer>
    <BackgroundContainerInner bgColor={bgColor}>
      <BackgroundFullHeight bgGradient={bgGradient}>
        <BackgroundImageOverlay bgImage={bgImage} />
      </BackgroundFullHeight>
    </BackgroundContainerInner>
  </BackgroundContainer>
);

const HorizontalContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% + 5rem);
  padding-bottom: 5rem;

  @media (max-width: ${S - 1}px) {
    display: none;
  }
`;

const MobileContainer = styled.div`
  display: none;
  overflow: hidden;

  @media (max-width: ${S - 1}px) {
    display: block;
  }
`;

const StyledSectionContent = styled(SectionContent)`
  opacity: 1;
  transform: translateY(0%);
`;

export default function Component({ checkSectionVisited }) {
  const section = sectionTitles[4];
  const visited = checkSectionVisited(4);
  return (
    <Section>
      <SectionBackground bgImage="/static/background-textures/lightgrey-texture.jpg" />
      <Spacer height={0} id={roboSlugs[4]} style={{ paddingTop: '1rem' }} />

      <StyledSectionContent>
        <HorizontalContainer>
          <HorizontalScroll
            header={
              <StyledSectionTitleContainer
                section={section}
                active={visited}
                largeMaxWidth={925}
                medMaxWidth={710}
                smallMaxWidth={710}
                sectionNum={4}
                noPadding
              />
            }
            cards={
              <EnforcementCards
                content={enforcementContent}
                sixthCard={sixthCardContent}
              />
            }
            page={'robocalls'}
            active={visited}
          />
        </HorizontalContainer>
        <MobileContainer>
          <StyledSectionTitleContainer section={section} active={visited} />
          <EnforcementCards
            content={enforcementContent}
            sixthCard={sixthCardContent}
          />
        </MobileContainer>
      </StyledSectionContent>
    </Section>
  )
}
