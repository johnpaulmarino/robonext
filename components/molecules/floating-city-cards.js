import React from 'react';
import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';

import { S, XS } from 'styles/breakpoints';
import TYPE, { TYPE_COLORS } from 'styles/type';
import SPACING from 'styles/spacing';
import { TEEL, BLACK } from 'styles/colors';

const waypointOffsets = {
  top: '35%',
  bottom: '35%',
}

const CityCard = styled.div`
  position: relative;
  max-width: 450px;
  background-image: linear-gradient(245deg, #ffffff 0%, #c8e7f5 100%);
  border-radius: 4px;
  box-shadow: 10px 10px 0px -2px rgba(0, 0, 0, 0.05);
  padding: ${SPACING.xl}rem;
  overflow: hidden;
  transition: opacity 0.5s;

  &:not(:last-child) {
    margin-bottom: 150px;
  }

  @media (max-width: ${S}px) {
    &:not(:last-child) {
      margin-bottom: 0;
    }

    background: transparent;
    box-shadow: none;
    padding: 10px ${SPACING.xs}rem;
    opacity: 1;
  }
`;

const CityCardCircle = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0)
  );
  opacity: 1;
  left: 55%;
  top: -30%;

  @media (max-width: ${S}px) {
    display: none;
  }
`;

const CityCardContent = styled.div`
  position: relative;
  height: 100%;
`;

const CityCardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  h3 {
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-family: ${TYPE.m.font};
    font-size: ${TYPE.m.size}rem;
    line-height: ${TYPE.m.line};
  }

  @media (max-width: ${S}px) {
    h3 {
      width: 100%;
      text-align: center !important;
      padding-top: 40px;
    }
  }

  @media (max-width: ${XS}px) {
    h3 {
      font-size: 1.2rem;
    }
  }
`;

const CityCardNumber = styled.div`
  width: 40px;
  height: 32px;
  padding-right: 8px;
  flex-shrink: 0;

  div {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    background-color: ${({ active }) => (active ? TEEL : BLACK)};
    color: ${TYPE_COLORS.white};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.4s;
  }

  @media (max-width: ${S}px) {
    display: none;
  }
`;

const CityCardBody = styled.p`
  position: relative;
  margin: 0;
  padding: 0;
  font-family: ${TYPE.bodySerif.font};
  font-size: ${TYPE.bodySerif.size};
  line-height: ${TYPE.bodySerif.line};

  @media (max-width: ${S}px) {
    text-align: center;
    font-family: ${TYPE.bodySans.font};
    font-size: ${TYPE.bodySans.size}rem;
    line-height: ${TYPE.bodySans.line};
  }
`;

const CityCardImage = styled.div`
  display: none;

  @media (max-width: ${S}px) {
    display: block;
    background-image: url(${({ cardImage }) => cardImage});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    width: 100%;
    height: 60vw;
    margin-bottom: -1rem;
  }
`;

const handleCardOnEnter = (
  _wpObj,
  dispatchCurrentVehicle,
  cardNum,
  isScrolling,
  currentVehicle,
  dispatchIsScrolling
) => {
  if (!isScrolling) {
    dispatchCurrentVehicle({ currentVehicle: cardNum })
  }
  if (isScrolling && cardNum === currentVehicle) {
    dispatchIsScrolling({ isScrolling: false })
  }
}

const CityCardContentContainer = React.memo(function Component({ cardImage, cardNum, content, active  }) {
  return (
    <CityCardContent>
      <CityCardCircle />
      <CityCardImage cardImage={cardImage}>
        <span role="img" aria-label={content.altTag}></span>
      </CityCardImage>
      <CityCardHeader>
        <CityCardNumber active={active}>
          <div>
            <span>
              <strong>{cardNum}</strong>
            </span>
          </div>
        </CityCardNumber>
        <h3>{content.title}</h3>
      </CityCardHeader>
      <CityCardBody>{content.content}</CityCardBody>
    </CityCardContent>
  )
});


export default function Component({ cityContent,
  dispatchCurrentVehicle,
  isScrolling,
  currentVehicle,
  dispatchIsScrolling,
  mobileVehicles, }) {
    return (
      cityContent.map((content, i) => {
        const cardNum = i + 1
        return (
          <CityCard key={`city-card-${i}`} id={`city-card-${cardNum}`}>
            <Waypoint
              onEnter={wpObj =>
                handleCardOnEnter(
                  wpObj,
                  dispatchCurrentVehicle,
                  cardNum,
                  isScrolling,
                  currentVehicle,
                  dispatchIsScrolling
                )
              }
              topOffset={waypointOffsets.top}
              bottomOffset={waypointOffsets.bottom}
              fireOnRapidScroll={false}
            />
            <div>
              <CityCardContentContainer
                cardImage={mobileVehicles[i]}
                cardNum={cardNum}
                content={content}
                active={currentVehicle === i + 1}
              />
            </div>
          </CityCard>
        )
      })
    )
}

