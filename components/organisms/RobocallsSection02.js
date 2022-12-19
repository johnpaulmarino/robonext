import React, { useReducer } from 'react';
import styled from 'styled-components';

import { S } from '@/styles/breakpoints';
import Grid from '@/components/atoms/Grid';
import Column from '@/components/atoms/Column';

import sectionTitles from '@/cms/robocalls/section-titles';
import Spacer from '@/components/atoms/Spacer';
import {
  Section,
  StyledSectionTitleContainer,
  SectionContent,
} from '@/components/styled/Section';

import HowRobocallsWork from '@/cms/robocalls/how-robocalls-work';
import roboSlugs from '@/cms/robocalls/slugs';

import RotatingGlobe from '@/components/molecules/rotating-globe-final';
import GlobeContent from '@/components/molecules/globe-cards';

import globeBackground from '@/static/background-textures/rotating-globe-bg.png';

const GlobeContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
  @media (max-width: ${S}px) {
    display: none;
  }
`;

const GlobeContainerInner = styled.div`
  position: sticky;
  top: 68px;
  width: 100%;
  height: calc(100vh - 68px);
`;

const ContentContainer = styled.div`
  position: relative;
  /* width: 50%; */
  margin-top: -30vh;
  @media (max-width: ${S}px) {
    width: 100%;
    margin-top: 0;
    padding-bottom: 6rem;
  }
`;

const BackgroundContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const BackgroundContainerInner = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-image: ${({ bgGradient }) => bgGradient};

  @media (max-width: ${S}px) {
    display: none;
  }
`;

const BackgroundFullHeight = styled.div`
  position: sticky;
  top: 68px;
  height: 100vh;
  width: 100%;
  /* z-index: -1; */
  background-image: url(${({ bgImage }) => (bgImage ? bgImage : 'unset')});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;

  @media (max-width: ${S}px) {
    display: none;
  }
`;

export const SectionBackground = ({ bgGradient, bgImage }) => (
  <BackgroundContainer>
    <BackgroundContainerInner bgGradient={bgGradient}>
      <BackgroundFullHeight bgImage={bgImage} />
    </BackgroundContainerInner>
  </BackgroundContainer>
);

const globePositionReducer = (_state, { position }) => ({ position });

export default function Component({ checkSectionVisited }) {
  const [globePosition, dispatch] = useReducer(globePositionReducer, {
    position: 0,
  });

  const visited = checkSectionVisited(2);

  return (
    <Section>
      <SectionBackground
        bgGradient={'linear-gradient(to right, #ECF7F8, #B2DFFB)'}
        bgImage={globeBackground}
      />
      <Spacer height={5} id={roboSlugs[2]} />
      <StyledSectionTitleContainer
        section={sectionTitles[2]}
        active={visited}
        largeMaxWidth={1200}
        medMaxWidth={510}
        smallMaxWidth={400}
        sectionNum={2}
      />
      <GlobeContainer>
        <GlobeContainerInner>
          <RotatingGlobe globePosition={globePosition} />
        </GlobeContainerInner>
      </GlobeContainer>
      <SectionContent active={visited} style={{ zIndex: 100 }}>
        <Grid>
          <Column width={12}>
            <ContentContainer>
              <GlobeContent content={HowRobocallsWork} dispatch={dispatch} />
            </ContentContainer>
          </Column>
        </Grid>
      </SectionContent>
    </Section>
  )
}
