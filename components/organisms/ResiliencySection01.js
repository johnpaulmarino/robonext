import React, { useReducer } from 'react';
import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';

import { GRAYGRAIN_BACKGROUND } from 'styles/colors';

import { S } from 'styles/breakpoints'


import sectionTitles from 'cms/resiliency/section-titles';
import { section01 } from 'cms/resiliency/section-content';
import resiliencySlugs from 'cms/resiliency/slugs';

import {
  Section,
  StyledSectionTitleContainer,
  SectionContent,
  SectionBackground,
} from 'components/styled/Section';

import MediaScroll from 'components/molecules/media-scroll-transition';
import {
  LargeScreenContent,
  SmallScreenContent,
} from 'components/molecules/media-scroll-content';

import Spacer from 'components/atoms/Spacer';

const Section01Section = styled(Section)`
  padding-top: 20px;
  @media (max-width: ${S}px) {
    padding-top: 0;
    padding-bottom: 60px;
    box-shadow: inset 0px 40px 20px -30px #f5f5f5;
  }
`;

const Section01SectionContent = styled(SectionContent)`
  @media (min-width: ${S}px) {
    margin-top: 0;
  }
`;

const MediaContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 40%;
  z-index: 200;
`;

const LargeScreen = styled.div`
  @media (max-width: ${S}px) {
    display: none;
  }
`;

const SmallScreen = styled.div`
  @media (min-width: ${S + 1}px) {
    display: none;
  }
`;

const MobileBackgroundContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  @media (min-width: ${S + 1}px) {
    display: none;
  }
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

const TopWaypoint = React.memo(function TopWaypoint({ dispatchInView}) {
  return(
    <div style={{ position: 'absolute', top: 0 }}>
    <Waypoint
      onEnter={wpObj => {
        if (wpObj.previousPosition === 'above')
          dispatchInView({ inView: false })
      }}
      onLeave={wpObj => {
        if (wpObj.currentPosition === 'above') dispatchInView({ inView: true })
      }}
      topOffset={'75px'}
      fireOnRapidScroll={false}
    />
  </div>
  )
 });

const BottomWaypoint = React.memo(function BottomWaypoint({ dispatchInView, dispatchCurrentMedia  }) { 
  return(
    <div style={{ position: 'absolute', bottom: 0 }}>
      <Waypoint
        onEnter={_wpObj => {
          dispatchInView({ inView: true })
          dispatchCurrentMedia({ currentMedia: 2 })
        }}
        fireOnRapidScroll={false}
      />
    </div>
  )
});


const inViewReducer = (_state, { inView }) => inView
const currentMediaReducer = (state, { currentMedia }) => {
  return {
    previous: state.current,
    current: currentMedia,
  }
}

const ShortMediaSpacer = styled.div`
  position: relative;
  display: none;
  height: 1.5rem;

  @media (min-width: ${S}px) and (max-height: 700px) {
    display: block;
  }
`;

export default function Component({ checkSectionVisited }) {
  const [inView, dispatchInView] = useReducer(inViewReducer, false);
  const [currentMedia, dispatchCurrentMedia] = useReducer(currentMediaReducer, {
    current: 0,
    previous: -1,
  });

  const visited = checkSectionVisited(1);

  return (
    <div>
      <Section01Section style={{ zIndex: 200 }}>
        <Waypoint
          onEnter={() => {
            dispatchInView({ inView: false })
            dispatchCurrentMedia({ currentMedia: 0 })
          }}
        />
        <MobileSectionBackground bgImage="/static/background-textures/lightgrey-texture.jpg" />
        <Spacer height={6} id={resiliencySlugs[1]} />
        <StyledSectionTitleContainer
          section={sectionTitles[1]}
          active={visited}
          sectionNum={1}
        />
        <Spacer height={4} />
        <ShortMediaSpacer />
        <Section01SectionContent active={visited}>
          <SectionBackground
            bgColor={GRAYGRAIN_BACKGROUND}
            bgImage="/static/background-textures/lightgrey-texture.jpg"
            mobileHide={true}
          />
          <LargeScreen>
            <TopWaypoint dispatchInView={dispatchInView} />
            <BottomWaypoint
              dispatchInView={dispatchInView}
              dispatchCurrentMedia={dispatchCurrentMedia}
            />
            <MediaContainer>
              <MediaScroll
                inView={inView}
                currentMedia={currentMedia.current}
                previousMedia={currentMedia.previous}
              />
            </MediaContainer>
            <LargeScreenContent
              sectionContent={section01}
              dispatchCurrentMedia={dispatchCurrentMedia}
            />
          </LargeScreen>
          <SmallScreen>
            <SmallScreenContent sectionContent={section01} />
          </SmallScreen>
        </Section01SectionContent>
      </Section01Section>
    </div>
  )
}
