import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { S } from 'styles/breakpoints';
import TYPE, { TYPE_COLORS } from 'styles/type';
import SPACING from 'styles/spacing';
import { BLACK, WHITE } from 'styles/colors';
import styles from 'styles/components/molecules/enforcement-cards.module.scss';

import sixthCardImage from 'public/static/enforcement/enforcement-icon.png';

const cardGradients = [
  'linear-gradient(180deg, #A992CC, #795BA4)',
  'linear-gradient(180deg, #A090D1, #605AA8)',
  'linear-gradient(180deg, #9BA9E5, #707FC6)',
  'linear-gradient(180deg, #9EC7EE, #6495D2)',
  'linear-gradient(180deg, #93CEE7, #45A2CE)',
  'linear-gradient(180deg, #BBEBF0, #58B2C5)',
];

const EnforcementCardContainer = styled.div`
  position: relative;
  width: 545px;
  height: 340px;
  padding: 16px;
  margin-right: 50px;
  @media (min-width: ${S}px) and (max-height: 690px) {
    max-height: 300px;
    min-width: 475px;
  }
  @media (max-width: ${S - 1}px) {
    width: 100%;
    height: auto;
    margin: 0 auto 10rem;
    padding: 8px;
    max-width: 500px;
  }

  &:nth-child(3) {
    width: 640px !important;

    @media (max-width: ${S - 1}px) {
      width: 100% !important;
    }
  }
`;

const EnforcementCard = styled.div`
  position: relative;
  background: ${({ gradient }) => gradient};
  border-radius: 4px;
  box-shadow: 10px 10px 0px -2px rgba(0, 0, 0, 0.05);
  padding: ${SPACING.xl}rem;
  /* padding-bottom: ${1.5 * SPACING.xl}rem; */
  opacity: 0.9;
  z-index: 50;
  height: 100%;
  width: 100%;
  @media (min-width: ${S}px) and (max-height: 690px) {
    padding: ${SPACING.l}rem;
  }
  @media (max-width: ${S - 1}px) {
    padding: ${SPACING.l}rem;
    padding-bottom: 3rem;
    min-height: 225px;
  }
`;

const EnforcementCardNumber = styled.div`
  position: absolute;
  opacity: 0.2;
  right: -8%;
  top: 50%;
  transform: translateY(-50%);
  z-index: -1;
  color: white;
  font-size: 20rem;
  font-family: ${TYPE.jumbo.font};
  font-weight: ${TYPE.jumbo.weight};
  @media (max-height: ${S - 1}) {
    font-size: 12rem;
  }
`;

const EnforcementCardContent = styled.div`
  height: 100%;
  color: ${TYPE_COLORS.white};
  width: 90%;
  @media (max-width: ${S - 1}px) {
    width: 100%;
  }
`;

const EnforcementCardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  h3 {
    margin: 0;
    padding: 0;
    font-family: ${TYPE.m.font};
    font-weight: ${TYPE.m.weight};
    font-size: ${TYPE.m.size}rem;
    line-height: ${TYPE.m.line};
  }
  @media (max-width: ${S - 1}px) {
    h3 {
      margin: 0;
      width: 100%;
    }
  }
`;

const EnforcementCardBody = styled.p`
  width: 90%;
  margin: 0;
  padding: 0;
  font-family: ${TYPE.bodySerif.font};
  font-weight: ${TYPE.bodySerif.weight};
  /* font-size: ${TYPE.bodySerif.size}rem; */
  font-size: 15px;
  line-height: ${TYPE.bodySerif.line};
  @media (max-width: ${S - 1}px) {
    width: 100%;
    font-family: ${TYPE.bodySans.font};
    font-weight: ${TYPE.bodySans.weight};
    font-size: ${TYPE.bodySans.size};
    line-height: ${TYPE.bodySans.line};
  }
`;

const BlockBoxContainer = styled.div`
  position: absolute;
  top: calc(100% - 90px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  width: 70%;
  @media (max-width: ${S - 1}px) {
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
  @media (max-width: ${S}px) {
    max-width: none;
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
  padding: ${props =>
    props.learnMoreUrl ? '0.75rem 1rem 1.5rem' : '0.75rem 1rem .9rem'};
  font-size: ${TYPE.s.size}rem;
  font-family: ${TYPE.s.font};
  font-weight: ${TYPE.s.weight};
  line-height: ${TYPE.blockBoxParagraph.line};
  letter-spacing: ${TYPE.s.letterSpacing}px;
  background-color: ${WHITE};
  @media (max-width: ${S}px) {
    font-size: ${TYPE.mobileBlockBox.size}rem;
    letter-spacing: ${TYPE.mobileBlockBox.letterSpacing}px;
    padding: ${props =>
      props.learnMoreUrl ? '0.75rem 1rem 2em' : '0.75rem 1rem .9em'};
  }
`;

const SixthCardBody = styled.div`
  color: ${TYPE_COLORS.white};
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  h3 {
    margin: 2.5rem 0 0 0;
    padding: 0;
    font-family: ${TYPE.m.font};
    font-weight: ${TYPE.m.weight};
    font-size: ${TYPE.m.size + 0.25}rem;
    line-height: ${TYPE.m.line};
    text-align: center;

    @media (max-width: ${S}px) {
      margin-top: 3.5rem;
      font-size: ${TYPE.m.size}rem;
    }
  }
`;

const SixthCardImage = styled.img`
  position: absolute;
  top: -40px;
  height: 140px;
  width: auto;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: ${S}px) {
    top: -65px;
  }
`;

export const SixthCard = ({ content }) => (
  <EnforcementCardContainer>
    <EnforcementCard gradient={cardGradients[5]}>
      <Image
        src={sixthCardImage}
        className={styles.sixthCardImage}
        alt="Signed petition to support Congress in fighting illegal robocalls"
      />
      <SixthCardBody>
        <h3>{content}</h3>
      </SixthCardBody>
    </EnforcementCard>
  </EnforcementCardContainer>
);
export default function Component({  content, sixthCard }) { 
  const arr = content.map((content, i) => (
    <EnforcementCardContainer key={`enforcement-${i}`}>
      <EnforcementCard gradient={cardGradients[i]}>
        <EnforcementCardNumber>{i + 1}</EnforcementCardNumber>
        <EnforcementCardContent style={{ width: '100%' }}>
          <EnforcementCardHeader>
            <h3>{content.header}</h3>
          </EnforcementCardHeader>
          <EnforcementCardBody>{content.body}</EnforcementCardBody>
        </EnforcementCardContent>
      </EnforcementCard>
      {content.dyk && (
        <BlockBoxContainer>
          <BlockBox>
            <BlockBoxHeader>Did You Know?</BlockBoxHeader>
            <BlockBoxParagraph>{content.dyk}</BlockBoxParagraph>
          </BlockBox>
        </BlockBoxContainer>
      )}
    </EnforcementCardContainer>
  ))
  arr.push(<SixthCard key={`sixth-card`} content={sixthCard} />)
  return arr;
}
