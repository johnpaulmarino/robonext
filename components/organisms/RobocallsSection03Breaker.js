import React from 'react';
import { Waypoint } from 'react-waypoint';
import styled from 'styled-components';

import Grid from 'components/atoms/Grid';
import Column from 'components/atoms/Column';

import { S } from 'styles/breakpoints';
import TYPE, { TYPE_COLORS } from 'styles/type';

import { Section } from 'components/styled/Section';


import { techHeader } from 'cms/robocalls/develop-new-tech';
import { techContent } from 'cms/robocalls/develop-new-tech';

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

const BackgroundImageOverlayPurple1 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: linear-gradient(0deg, #7555a0 0%, #9773c7 100%);
  background-size: cover;
  background-position: center;
`;

const BackgroundImageOverlayPurple2 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.3;
  background-image: linear-gradient(
    184deg,
    rgba(250, 252, 255, 0.48) 0%,
    rgba(250, 252, 255, 0) 77%
  );
  background-size: cover;
  background-position: center;
`;

const SectionBackground = ({ bgImage }) => (
  <BackgroundContainer>
    <BackgroundContainerInner>
      <BackgroundFullHeight>
        <BackgroundImageOverlayPurple1 />
        <BackgroundImageOverlayPurple2 />
        <BackgroundImageOverlay bgImage={bgImage} />
      </BackgroundFullHeight>
    </BackgroundContainerInner>
  </BackgroundContainer>
);

const PhoneContainer = styled.div`
  width: 100%;
  position: sticky;
  height: 100vh;
  top: 0;
  padding: 10% 10% 0 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: ${S}px) {
    position: relative;
    height: 320px;
  }
`;

const PhoneHeaderContainer = styled.div`
  @media (min-height: 690px) {
    top: 0vh;
  }
`;

const PhoneHeader = styled.div`
  font-family: ${TYPE.jumbo.font};
  font-size: 2.5rem;
  line-height: ${TYPE.label.line};
  color: ${TYPE_COLORS.white};
  text-align: center;
  margin-top: 70px;
  margin-bottom: 10px;

  @media (max-width: ${S}px) {
    font-size: 2.2rem;
    margin-bottom: 20px;
  }

  @media (max-width: 320px) {
    font-size: 1.7rem;
  }
`;

const PhoneSubHeader = styled.div`
  color: ${TYPE_COLORS.white};
  font-family: ${TYPE.bodySerif.font};
  font-size: ${TYPE.bodySerif.size}rem;
  line-height: ${TYPE.bodySerif.line};
  text-align: center;
  margin-bottom: 18px;
  padding: 6px 45px;

  @media (max-width: ${970}px) {
    padding: 2px 0;
  }
`;

const PhoneImageContainer = styled.div`
  position: relative;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-height: 690px) {
    height: 60vh;
  }

  /* iPad Pro (Verticle)  */
  @media (max-width: 1024px) and (min-height: 690px) {
    height: 40vh;
  }
`;

const PhoneImage = styled.img`
  @media (max-width: ${S}px) {
    display: none;
  }
`;

const TechCardsContainer = styled.div`
  position: relative;
  padding-top: 286px;
  padding-bottom: 50px;
  margin-left: 50px;

  /* @media (min-height: 690px) {
    padding-top: 30vh;
  } */

  @media (max-width: ${S}px) {
    padding: 10px 20px;
    margin-left: 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

const TechCard = styled.div`
  position: relative;
  /* height: 200%; */
  display: flex;
  max-width: 450px;
`;

const DottedLine = styled.div`
  position: absolute;
  height: 100%;
  width: 2px;
  left: 15px;
  border-left: 2px dashed ${TYPE_COLORS.white};
`;

const SolidLine = styled.div`
  position: absolute;
  height: 100%;
  width: 4px;
  left: 13px;
  width: 5px;
  background-color: ${TYPE_COLORS.white};
  transition: transform 0.6s ease-in-out;
  will-change: transform;
  transform: scaleY(${props => (props.visible ? 1 : 0)});
  transform-origin: 50% 0;
`;

const TechCardNumber = styled.div`
  position: relative;
  width: 40px;
  height: 32px;
  padding-right: 8px;
  flex-shrink: 0;

  div {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    background-color: ${TYPE_COLORS.white};
    color: ${TYPE_COLORS.black};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const TechCardBody = styled.p`
  color: ${TYPE_COLORS.white};
  margin: 0;
  padding: 0 0 20vh 8%;
  font-family: ${TYPE.bodySerif.font};
  font-size: ${TYPE.bodySerif.size};
  line-height: ${TYPE.bodySerif.line};
`;
class RobocallsBreaker extends React.Component {
  state = { currentSection: null }
  render() {
    const mapContentCards = techContent =>
      techContent.map((content, i) => {
        const cardNum = i + 1
        return (
          <TechCard key={i}>
            <div>
              <Waypoint
                key={i}
                topOffset="400px"
                bottomOffset="300px"
                onEnter={() => {
                  this.setState({ currentSection: i })
                }}
                fireOnRapidScroll={false}
              />
            </div>
            {i < techContent.length - 1 ? <DottedLine /> : null}
            <SolidLine visible={this.state.currentSection >= i + 1} />
            <TechCardNumber>
              <div>
                <span>
                  <strong>{cardNum}</strong>
                </span>
              </div>
            </TechCardNumber>
            <TechCardBody>{content.content}</TechCardBody>
          </TechCard>
        )
      })

    return (
      <Section>
        <SectionBackground bgImage="/static/background-textures/transparent-grain.png" />
        <Grid>
          <Column width={6} smallWidth={12} align="top">
            <PhoneContainer>
              <PhoneHeaderContainer>
                <PhoneHeader>{techHeader.header}</PhoneHeader>
                <PhoneSubHeader>{techHeader.subtitle}</PhoneSubHeader>
              </PhoneHeaderContainer>
              <PhoneImageContainer>
                <PhoneImage
                  src="/static/new-tech-vertical-scroll/new-tech-phone.png"
                  height="100%"
                  width="auto"
                  display="block"
                  margin-left="auto"
                  margin-right="auto"
                  alt="Phone receiving possible incoming spam call"
                />
              </PhoneImageContainer>
            </PhoneContainer>
          </Column>
          <Column width={5} smallWidth={12}>
            <TechCardsContainer>
              {mapContentCards(techContent)}
            </TechCardsContainer>
          </Column>
        </Grid>
      </Section>
    )
  }
}

export default RobocallsBreaker;
