import React from 'react';
import styled, { css } from 'styled-components';
import Grid from '@/components/atoms/Grid';
import Column from '@/components/atoms/Column';

import SPACING from '@/styles/spacing';
import { XS, S, M } from '@/styles/breakpoints';
import TYPE, { TYPE_COLORS } from '@/styles/type';
import { TEEL } from '@/styles/colors';

export const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

export const SectionTitleContainer = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  padding: ${({ noPadding }) => (noPadding ? 0 : `${SPACING.m}rem`)};
  opacity: 0;
  transform: translateY(40px);

  ${({ active }) =>
    active &&
    css`
      transform: translateY(0px);
      opacity: 1;
      transition: opacity 0.5s, transform 0.5s;
      transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
    `}

  @media (max-width: ${XS}px) {
    padding-top: 0;
  }

  @media (min-width: ${S}px) and (max-height: 700px) {
    padding-bottom: 0;
  }
`;

export const SectionNumber = styled.img`
  height: 75px;
  width: auto;
  margin: 0;
  padding: 0;

  @media (max-width: ${XS}px) {
    height: 59px;
  }
`;

export const SectionTitle = styled.h2`
  color: ${({ inverse }) => (!inverse ? TYPE_COLORS.black : TYPE_COLORS.white)};
  font-family: ${TYPE.xl.font};
  font-size: ${TYPE.xl.size}rem;
  font-weight: ${TYPE.xl.weight};
  margin: 0;
  padding: 0;
  line-height: ${TYPE.xl.line};

  &:focus {
    outline: none;
    text-decoration: underline;
    text-decoration-color: ${TEEL};
  }

  @media (max-width: ${S}px) {
    font-size: 2rem;
  }
`;

export const SectionSubtitle = styled.h3`
  color: ${({ inverse }) => (!inverse ? TYPE_COLORS.grey : TYPE_COLORS.white)};
  font-size: ${TYPE.lede.size}rem;
  line-height: ${TYPE.lede.line};
  font-family: ${TYPE.lede.font};
  font-weight: ${TYPE.lede.weight};
  margin: 0.8rem auto 0;
  padding: 0;
  max-width: ${props =>
    props.largeMaxWidth ? `${props.largeMaxWidth}px` : '750px'};

  @media (max-width: ${M + 75}px) {
    font-size: 1.35rem;
    max-width: ${props =>
      props.medMaxWidth ? `${props.medMaxWidth}px` : '750px'};
  }

  @media (max-width: ${S}px) {
    font-size: 1.35rem;
    max-width: ${props =>
      props.smallMaxWidth ? `${props.smallMaxWidth}px` : '750px'};
  }
`;

export const SectionContent = styled.div`
  position: relative;
  width: 100%;
  margin: ${SPACING.xl}rem 0 0;
  opacity: 0;
  transform: translateY(40px);

  ${({ active }) =>
    active &&
    css`
      transform: translateY(0px);
      opacity: 1;
      transition: opacity 0.45s, transform 0.45s;
      transition-delay: 0.15s, 0.15s;
      transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
    `}
`;

const BackgroundContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  @media (max-width: ${S}px) {
    display: ${({ mobileHide }) => (mobileHide ? 'none' : 'block')};
  }
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
  background-image: url(${({ bgImage }) => (bgImage ? bgImage : 'unset')});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: ${S}px) {
    display: none;
  }
`;

export const SectionBackground = ({ bgColor, bgImage, mobileHide }) => (
  <BackgroundContainer mobileHide={mobileHide}>
    <BackgroundContainerInner bgColor={bgColor}>
      <BackgroundFullHeight bgImage={bgImage} />
    </BackgroundContainerInner>
  </BackgroundContainer>
);

export const StyledSectionTitleContainer = ({
  section,
  inverse,
  active,
  sectionNum,
  largeMaxWidth,
  medMaxWidth,
  smallMaxWidth,
  noPadding,
}) => {
  const { number, title, subtitle, altTag } = section
  return (
    <Grid>
      <Column width={12} medWidth={12} />
      <Column width={12} largeWidth={12} medWidth={12}>
        <SectionTitleContainer active={active} noPadding={noPadding}>
          <SectionNumber src={number} alt={altTag} />
          <SectionTitle
            inverse={inverse}
            tabIndex="0"
            id={`section-title-${sectionNum}`}
          >
            {title}
          </SectionTitle>
          <SectionSubtitle
            inverse={inverse}
            dangerouslySetInnerHTML={{ __html: subtitle }}
            largeMaxWidth={largeMaxWidth}
            medMaxWidth={medMaxWidth}
            smallMaxWidth={smallMaxWidth}
          ></SectionSubtitle>
        </SectionTitleContainer>
      </Column>
      <Column width={12} medWidth={12} />
    </Grid>
  )
}
