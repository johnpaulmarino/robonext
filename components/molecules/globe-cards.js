import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Waypoint } from 'react-waypoint';

import SPACING from 'styles/spacing';
import TYPE, { TYPE_COLORS } from 'styles/type';
import { S } from 'styles/breakpoints';
import { BLACK, WHITE } from 'styles/colors';
import styles from 'styles/components/molecules/mobileGlobeImage.module.scss';


const mobileGlobeImgs = [
  "/static/rotating-globe/rotatingglobe-mobile-1.png",
  "/static/rotating-globe/rotatingglobe-mobile-2.png",
  "/static/rotating-globe/rotatingglobe-mobile-3.png",
  "/static/rotating-globe/rotatingglobe-mobile-4.png"
];

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  @media (max-width: ${S}px) {
    height: auto;
    margin: 0 0 1.5rem;
    padding: 0;
    border-radius: 0.5rem;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(to bottom, #e6f5f8 0%, #c4e6fa 100%);
  }
`;

const CardContainerInner = styled.div`
  position: relative;
  width: 100%;
  @media (max-width: ${S}px) {
    width: 100%;
    padding: 1rem;
  }
`;

const GlobeCard = styled.div`
  position: relative;
  max-width: 450px;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 10px 10px 0px -2px rgba(0, 0, 0, 0.05);
  padding: ${SPACING.xl}rem ${SPACING.l}rem;
  background-image: linear-gradient(180deg, #4f376d 0%, #26144c 100%);
  color: white;
  @media (max-width: ${S}px) {
    width: 100%;
    padding: ${SPACING.l}rem;
    max-width: none;
    box-shadow: none;
  }
`;

const GlobeCardCircle = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-image: linear-gradient(
    180deg,
    rgba(187, 180, 226, 0) 7%,
    #867dc1 66%
  );
  opacity: 0.2;
  left: 50%;
  top: 10px;
`;

const GlobeCardContent = styled.div`
  height: 100%;
  color: ${TYPE_COLORS.white};
  width: 90%;
  @media (max-width: ${S}px) {
    width: 100%;
    text-align: center;
  }
`;

const GlobeCardHeader = styled.div`
  display: flex;
  margin: 0;
  margin-bottom: 0.5rem;
  h3 {
    margin: 0;
    padding: 0;
    font-family: ${TYPE.m.font};
    font-size: ${TYPE.m.size}rem;
    line-height: ${TYPE.m.line};
    font-weight: ${TYPE.m.weight};
  }
  @media (max-width: ${S}px) {
    h3 {
      font-size: 19px;
    }
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
`;

const GlobeCardBody = styled.p`
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: ${TYPE.bodySerif.font};
  font-weight: ${TYPE.bodySerif.weight};
  font-size: ${TYPE.bodySerif.size};
  line-height: ${TYPE.bodySerif.line};
  @media (max-width: ${S}px) {
    width: 100%;
    font-family: ${TYPE.bodySans.font};
    font-weight: ${TYPE.bodySans.weight};
    font-size: ${TYPE.bodySans.size};
    line-height: ${TYPE.bodySans.line};
  }
`;

const MobileGlobeImage = styled.img`
  display: none;
  @media (max-width: ${S}px) {
    margin-top: 4rem;
    display: block;
    width: calc(100%);
    height: auto;
  }
`;

const BlockBoxContainer = styled.div`
  position: absolute;
  top: calc(100% + 1rem);
  left: 0;
  z-index: 100;
  width: 50%;
  max-width: 450px;
  color: ${TYPE_COLORS.black};
  @media (max-width: ${S}px) {
    top: calc(100% - 74px);
    width: 80%;
  }
`;

const BlockBox = styled.div`
  border: 2px solid black;
  border-radius: 4px;
  width: 100%;
  margin: 1.8rem 0;
  box-shadow: 10px 10px 0px -2px rgba(0, 0, 0, 0.05);
  background-color: ${WHITE};
  @media (max-width: ${S}px) {
    display: none;
  }
`;

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
`;

const BlockBoxParagraph = styled.p`
  margin: 0;
  padding: 0.75rem 1rem 0.9rem;
  max-width: 425px;
  font-size: ${TYPE.s.size}rem;
  font-family: ${TYPE.s.font};
  font-weight: ${TYPE.s.weight};
  line-height: ${TYPE.blockBoxParagraph.line};
  letter-spacing: ${TYPE.s.letterSpacing}px;

  @media (max-width: ${S}px) {
    font-size: ${TYPE.mobileBlockBox.size}rem;
    letter-spacing: ${TYPE.mobileBlockBox.letterSpacing}px;
  }
`;
//export default React.memo(({ content, dispatch }) =>

const globeCards = React.memo(function globeCards({ content, dispatch }) {
  return content.map(({ header, body, dyk }, i) => (
    <CardContainer key={`globe-card-${i}`}>
      <CardContainerInner>
        <GlobeCard>
          <GlobeCardCircle />
          <GlobeCardContent>
            <GlobeCardHeader>
              <h3>{header}</h3>
            </GlobeCardHeader>
            <Waypoint
              topOffset="30%"
              bottomOffset="30%"
              onEnter={() => dispatch({ position: i })}
              fireOnRapidScroll={false}
            />
            <GlobeCardBody>{body}</GlobeCardBody>
          </GlobeCardContent>
        </GlobeCard>
        {dyk && (
          <BlockBoxContainer>
            <BlockBox>
              <BlockBoxHeader>Did You Know?</BlockBoxHeader>
              <BlockBoxParagraph>{dyk}</BlockBoxParagraph>
            </BlockBox>
          </BlockBoxContainer>
        )}
      </CardContainerInner>
      <Image
        src={mobileGlobeImgs[i]}
        className={styles.mobileGlobeImage}
        alt="globe image"
        width="500"
        height="500"
      />
    </CardContainer>
  ))}
);

export default globeCards;
