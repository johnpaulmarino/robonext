import React, { useReducer } from 'react';
import styled from 'styled-components';

import cityContent from 'cms/resiliency/floating-city';
import resiliencySlugs from 'cms/resiliency/slugs';

import { S } from 'styles/breakpoints';
import { LIGHTBLUE } from 'styles/colors';

import sectionTitles from 'cms/resiliency/section-titles';
import Grid from 'components/atoms/Grid';
import Column from 'components/atoms/Column';

import FloatingCityUpgrade, { vehicles } from 'components/atoms/floating-city-upgrade';
import FloatingCityCards from 'components/molecules/floating-city-cards';



import Spacer from 'components/atoms/Spacer';

import {
  Section,
  StyledSectionTitleContainer,
  SectionContent,
} from 'components/styled/Section';

const mobileVehicles = [
  "/static/floating-cities/floating-city-mobile-1.png",
  "/static/floating-cities/floating-city-mobile-2.png",
  "/static/floating-cities/floating-city-mobile-3.png",
  "/static/floating-cities/floating-city-mobile-4.png",
  "/static/floating-cities/floating-city-mobile-5.png",
  "/static/floating-cities/floating-city-mobile-6.png",
  "/static/floating-cities/floating-city-mobile-7.png",
  "/static/floating-cities/floating-city-mobile-8.png",
];

const ContentInner = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 48px;
`;

const CityContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 150px;
`;

const CityContainerInner = styled.div`
  position: relative;
  width: 100%;
  margin-top: -85px;

  @media (min-height: 1050px) {
    margin-top: 50px;
  }

  @media (max-height: 800px) {
    margin-top: -100px;
  }
`;

const CityCardsContainer = styled.div`
  position: relative;
  min-height: 800px;
  padding-top: 160px;
  padding-bottom: 125px;

  @media (max-width: ${S}px) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding-top: 0;
    margin-top: -1rem;
  }

  @media (min-height: 1050px) {
    padding-top: 300px;
  }

  @media (min-height: 900px) {
    padding-top: 200px;
  }
`;

const Vehicles = ({
  vehicles,
  currentVehicle,
  dispatchCurrentVehicle,
  dispatchIsScrolling,
}) =>
  vehicles.map((Vehicle, i) => {
    const vehicleNum = i + 1
    return (
      <Vehicle
        key={`vehicle-${vehicleNum}`}
        vehicleNum={vehicleNum}
        active={currentVehicle === vehicleNum}
        dispatchCurrentVehicle={dispatchCurrentVehicle}
        dispatchIsScrolling={dispatchIsScrolling}
      />
    )
  })

const StyledFloatingCity = styled(FloatingCityUpgrade)`
  width: 100%;
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

  @media (max-width: ${S}px) {
    background: ${({ bgColor }) => (bgColor ? bgColor : 'unset')};
    opacity: 82%;
  }
`;

const BackgroundFullHeight = styled.div`
  position: sticky;
  top: 68px;
  height: 100vh;
  width: 100%;
  z-index: -1;
  background-image: ${({ bgGradient }) => bgGradient};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: ${S}px) {
    display: none;
  }
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
    <span role="img" aria-label="Clouds in a blue sky"></span>
    <BackgroundContainerInner bgColor={bgColor}>
      <BackgroundFullHeight bgGradient={bgGradient}>
        <BackgroundImageOverlay bgImage={bgImage} />
      </BackgroundFullHeight>
    </BackgroundContainerInner>
  </BackgroundContainer>
);

const StyledSectionContent = styled(SectionContent)`
  @media (min-height: 1100px) {
    margin-top: -4rem;
  }
`;
export default function Component({ checkSectionVisited }) {
  const section = sectionTitles[2];

  const [currentVehicle, dispatchCurrentVehicle] = useReducer(
    (_state, { currentVehicle }) => currentVehicle,
    1
  );
  const [isScrolling, dispatchIsScrolling] = useReducer(
    (_state, { isScrolling }) => isScrolling,
    false
  );

  const bgGradient = 'linear-gradient(to right, #ECF7F8, #B2DFFB);';

  const visited = checkSectionVisited(2);

  return (
    <Section style={{ zIndex: 300 }}>
      <SectionBackground
        bgColor={LIGHTBLUE}
        bgImage="/static/background-textures/disaster-background-clouds-transparent.png"
        bgGradient={bgGradient}
      >
        <span role="img" aria-label="Clouds with rain pouring down"></span>
      </SectionBackground>
      <Spacer height={6} id={resiliencySlugs[2]} />
      <StyledSectionTitleContainer
        section={section}
        active={visited}
        largeMaxWidth={850}
        sectionNum={2}
      />
      <StyledSectionContent active={visited}>
        <ContentInner>
          <Grid>
            <Column width={5} smallWidth={12}>
              <CityCardsContainer>
                <FloatingCityCards
                  cityContent={cityContent}
                  dispatchCurrentVehicle={dispatchCurrentVehicle}
                  isScrolling={isScrolling}
                  currentVehicle={currentVehicle}
                  dispatchIsScrolling={dispatchIsScrolling}
                  mobileVehicles={mobileVehicles}
                />
              </CityCardsContainer>
            </Column>
            <Column width={7} smallWidth={0} align={'top'}>
              <CityContainer>
                <CityContainerInner>
                  <StyledFloatingCity>
                    {visited && (
                      <Vehicles
                        vehicles={vehicles}
                        currentVehicle={currentVehicle}
                        dispatchCurrentVehicle={dispatchCurrentVehicle}
                        dispatchIsScrolling={dispatchIsScrolling}
                      />
                    )}
                  </StyledFloatingCity>
                </CityContainerInner>
              </CityContainer>
            </Column>
          </Grid>
        </ContentInner>
      </StyledSectionContent>
    </Section>
  )
}
