import React from 'react';
import styled from 'styled-components';

import { S } from 'styles/breakpoints';
import TYPE, { TYPE_COLORS } from 'styles/type';
import SPACING from 'styles/spacing';

const FightingCardContainer = styled.div`
  height: 150%;
  width: 325px;
  padding: 16px;
  margin-right: 87px;
  flex-shrink: 0;

  @media (max-width: ${S - 1}px) {
    height: auto;
    margin: 2rem auto 0;
    margin-bottom: 0;
  }

  @media (min-width: ${S}px) and (max-height: 700px) {
    padding-top: 0;
  }
`;

const FightingCard = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  /* @media (min-width: ${S}px) and (max-height: 650px) {
    padding: ${SPACING.l}rem;
    height: auto;
  } */
`;

const FightingCardImage = styled.img`
  position: relative;
  height: 58%;
  width: auto;
  margin-bottom: 1rem;

  @media (max-width: ${S}px) {
    width: 75%;
    height: auto;
  }
`;

const FightingCardContent = styled.div`
  position: relative;
  height: 50%;
  width: 100%;
  color: ${TYPE_COLORS.white};
`;

const FightingCardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  h3 {
    margin: 0;
    padding: 0;
    font-family: ${TYPE.m.font};
    font-weight: ${TYPE.m.weight};
    font-size: ${TYPE.m.size - 0.2}rem;
    line-height: ${TYPE.m.line};
    text-align: center;
    width: 100%;
  }
`;

const FightingCardBody = styled.p`
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: ${TYPE.bodySans.font};
  font-weight: ${TYPE.bodySans.weight};
  font-size: ${TYPE.bodySans.size}rem;
  line-height: ${TYPE.bodySans.line};
  text-align: center;

  @media (max-width: ${S - 1}px) {
    width: 100%;
    text-align: center;
    font-family: ${TYPE.bodySans.font};
    font-weight: ${TYPE.bodySans.weight};
    font-size: ${TYPE.bodySans.size}rem;
    line-height: ${TYPE.bodySans.line};
  }
`;
export default function Component({  content, images, altTags  }) { 
  return(
    content.map((content, i) => (
      <FightingCardContainer key={`Fighting-${i}`}>
        <FightingCard>
          <FightingCardImage src={images[i]} alt={altTags[i]} />
          <FightingCardContent>
            <FightingCardHeader>
              <h3>{content.header}</h3>
            </FightingCardHeader>
            <FightingCardBody>{content.body}</FightingCardBody>
          </FightingCardContent>
        </FightingCard>
      </FightingCardContainer>
    ))
  )
}
