import React from 'react';
import styled from 'styled-components';

import { XS, S } from 'styles/breakpoints';



import lightgreyTexture from 'public/static/background-textures/lightgrey-texture.jpg';

import sectionTitles from 'cms/resiliency/section-titles';
import resiliencySlugs from 'cms/resiliency/slugs';
import recoveryContent from 'cms/resiliency/horizontal-dr-content';

import HorizontalScroll from 'components/molecules/horizontal-scroll';
import RecoveryCards from 'components/molecules/recovery-cards';

import {
  Section,
  StyledSectionTitleContainer,
  SectionContent,
  SectionBackground,
} from 'components/styled/Section';

import Spacer from 'components/atoms/Spacer';

const drImages = ["/static/horizontal-dr/disaster-recovery-sm-1.png", 
"/static/horizontal-dr/disaster-recovery-sm-2.png", "/static/horizontal-dr/disaster-recovery-sm-3.png", 
"/static/horizontal-dr/disaster-recovery-sm-4.png", "/static/horizontal-dr/disaster-recovery-sm-5.png"];

const MobileContainer = styled.div`
  display: none;
  overflow: hidden;

  @media (max-width: ${S - 1}px) {
    display: block;
  }

  > div:not(:last-child) {
    @media (max-width: ${S - 1}px) {
      margin: 0 auto 8rem;
      max-width: 550px;
    }

    @media (max-width: ${XS}px) {
      margin: 0 auto 7rem;
    }
  }
`;

const HorizontalContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  @media (max-width: ${S - 1}px) {
    display: none;
  }
`;

const MobileBackgroundContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const MobileBackgroundContainerInner = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const MobileBackgroundFullHeight = styled.div`
  position: sticky;
  top: 68px;
  height: 100vh;
  width: 100%;
  z-index: -1;
  background-image: url(${({ bgImage }) => (bgImage ? bgImage : 'unset')});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const MobileSectionBackground = ({ bgImage }) => (
  <MobileBackgroundContainer>
    <MobileBackgroundContainerInner>
      <MobileBackgroundFullHeight bgImage={bgImage} />
    </MobileBackgroundContainerInner>
  </MobileBackgroundContainer>
);

const StyledSectionContent = styled(SectionContent)`
  opacity: 1;
  transform: translateY(0%);
`;

export default function Component({ checkSectionVisited }) {
  const section = sectionTitles[3];

  const visited = checkSectionVisited(3);

  return (
    <Section>
      <MobileSectionBackground bgImage={lightgreyTexture} />
      <SectionBackground bgImage={lightgreyTexture} mobileHide={true} />
      <Spacer height={6} id={resiliencySlugs[3]} />
      <StyledSectionContent style={{ marginTop: 0 }}>
        <HorizontalContainer>
          <HorizontalScroll
            // cards={mapRecoveryCards(recoveryContent)}
            cards={
              <RecoveryCards
                recoveryContent={recoveryContent}
                drImages={drImages}
              />
            }
            header={
              <StyledSectionTitleContainer
                section={section}
                style={{ paddingTop: 125 }}
                active={visited}
                sectionNum={3}
              />
            }
            page={'resiliency'}
            active={visited}
          />
        </HorizontalContainer>
        <MobileContainer>
          <StyledSectionTitleContainer section={section} active={visited} />
          <RecoveryCards
            recoveryContent={recoveryContent}
            drImages={drImages}
          />
        </MobileContainer>
      </StyledSectionContent>
    </Section>
  )
}
