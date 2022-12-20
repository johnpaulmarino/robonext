import React from 'react';
import styled from 'styled-components';

import TYPE, { TYPE_COLORS } from 'styles/type';
import SPACING from 'styles/spacing';
import { XS, S } from 'styles/breakpoints';

import whiteSpeckle from 'public/static/horizontal-dr/white-speckle.png';

const RecoveryCardContainer = styled.div`
  max-width: 500px;
  min-width: 500px;
  padding: 16px;
  margin-right: 50px;
  height: 300px;

  @media (max-width: ${S - 1}px) {
    margin-right: 0;
    max-height: unset;
    min-width: unset;
  }

  @media (min-width: ${S}px) and (max-height: 650px) {
    max-height: 275px;
    min-width: 475px;
  }

  @media (max-width: ${S - 1}px) {
    margin: 0 auto;
  }

  @media (max-width: ${XS}px) {
    margin: 0 auto;
  }
`;

const RecoveryCard = styled.div`
  position: relative;
  background-image: linear-gradient(246deg, #6cd099 0%, #0faeb8 83%);
  border-radius: 4px;
  box-shadow: 10px 10px 0px -2px rgba(0, 0, 0, 0.05);
  padding: ${SPACING.xl}rem;
  opacity: 0.9;
  z-index: 10;

  height: 100%;
  width: 100%;

  @media (max-width: ${S}px) {
    padding: ${SPACING.xl}rem 30px;
  }

  @media (max-width: 320px) {
    padding: ${SPACING.xl}rem ${SPACING.s}rem;
  }

  @media (min-width: ${S}px) and (max-height: 650px) {
    padding: ${SPACING.l}rem;
  }
`;

const RecoveryCardCircle = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0)
  );
  opacity: 0.2;
  left: 65%;
  top: 10px;
`;

const RecoveryCardSpeckle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${whiteSpeckle});
  background-size: cover;
  background-position: center;
`;

const RecoveryCardImgContainer = styled.div`
  position: absolute;
  right: -75px;
  top: 50%;
  transform: translateY(-50%);
  /* height: 100%; */
  width: auto;

  @media (max-width: ${S - 1}px) {
    position: relative;
    display: block !important;
    height: 50px;
    top: unset;
    right: unset;
    width: 50vw;
    max-width: 275px;
    min-width: 225px;
    transform: unset;
    margin: 0 auto;
  }
`;

const RecoveryCardImg = styled.img`
  position: relative;
  height: 100%;
  max-height: 242px;
  width: auto;

  @media (max-width: ${S - 1}px) {
    position: absolute;
    height: auto;
    width: 100%;
    bottom: -30px;
  }
`;

const RecoveryCardContent = styled.div`
  height: 100%;
  color: ${TYPE_COLORS.white};

  @media (max-width: ${S}px) {
    padding-top: 30px;
  }

  @media (max-width: 320px) {
    padding-top: 5px;
  }
`;

const RecoveryCardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  &:before {
    content: ${props => props.num};
  }

  span:first-child {
    display: block;
    text-align: center;
    font-size: 1rem;
    margin: 0;
    border-radius: 50%;
    height: 24px;
    width: 24px;
    line-height: 24px;
    background-color: ${TYPE_COLORS.white};
    color: ${TYPE_COLORS.black};
    font-weight: bold;
  }

  h3 {
    margin: 0 0 0 0.5rem;
    padding: 0;
    font-family: ${TYPE.m.font};
    font-size: ${TYPE.m.size}rem;
    line-height: ${TYPE.m.line};
    font-weight: normal;
  }

  @media (max-width: ${S - 1}px) {
    span:first-child {
      display: none;
    }

    h3 {
      margin: 0;
      width: 100%;
      text-align: center;
    }
  }
`;

const RecoveryCardBody = styled.p`
  width: 80%;
  margin: 0;
  padding: 0;
  font-family: ${TYPE.bodySerif.font};
  font-size: ${TYPE.bodySerif.size};
  line-height: ${TYPE.bodySerif.line};

  @media (max-width: ${S - 1}px) {
    width: 100%;
    text-align: center;
    font-family: ${TYPE.bodySans.font};
    font-size: ${TYPE.bodySans.size};
    line-height: ${TYPE.bodySans.line};
  }
`;
const recoveryCards = React.memo(function recoveryCards({ recoveryContent, drImages }) {
  return recoveryContent.map((content, i) => (
    <div key={`recovery-${i}`}>
      <RecoveryCardContainer>
        <RecoveryCard>
          <RecoveryCardCircle />
          <RecoveryCardSpeckle />
          <RecoveryCardImgContainer>
            <RecoveryCardImg src={drImages[i]} alt={content.altTag} />
          </RecoveryCardImgContainer>
          <RecoveryCardContent>
            <RecoveryCardHeader>
              <span>{i + 1}</span>
              <h3>{content.header}</h3>
            </RecoveryCardHeader>
            <RecoveryCardBody>{content.body}</RecoveryCardBody>
          </RecoveryCardContent>
        </RecoveryCard>
      </RecoveryCardContainer>
    </div>
  )) }
);

export default recoveryCards;
