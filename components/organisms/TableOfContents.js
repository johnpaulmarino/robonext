import React from 'react';
import styled from 'styled-components';
import { SOURCE, SOURCE_BOLD } from 'styles/type';
import { BLACK, WHITE, GRAY, MEDIUMGRAY, TEEL } from 'styles/colors';
import { S } from 'styles/breakpoints';
import arrowDown from 'public/static/arrows/long-arrow-down.svg';
import resilArrowDownActive from 'public/static/arrows/resil-long-arrow-down-active.svg';
import roboArrowDownActive from 'public/static/arrows/robo-long-arrow-down-active.svg';
import { navigate } from '@reach/router';
import Spacer from 'components/atoms/Spacer';
import dotPattern from 'public/static/background-textures/dot-pattern.svg';
import Image from 'next/image';

const OuterContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-bottom: 2rem;

  @media (max-width: ${S}px) {
    padding-bottom: 0 !important;
  }
`;

const Container = styled.div`
  position: relative;
  width: 80%;
  max-width: 750px;
  margin: 0 auto 40px;
  box-shadow: 0 20px 54px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 60px;

  @media (max-width: ${S}px) {
    margin-bottom: 0;
    width: 100%;
    box-shadow: 0 10px 27px 0 rgba(0, 0, 0, 0.04);
  }
`;

const DotPatternContainer = styled.div`
  position: absolute;
  background-image: url(${dotPattern});
  opacity: 0.5;
  filter: blur(0.8px);

  @media (max-width: ${S}px) {
    display: none;
  }
`;

const DotPatternContainer1 = styled(DotPatternContainer)`
  top: 50%;
  transform: translateY(-50%);
  left: -155px;
  width: 550px;
  height: 550px;
`;

const DotPatternContainer2 = styled(DotPatternContainer)`
  top: -75px;
  right: -140px;
  width: 475px;
  height: 475px;
`;

const ContentsArrow = styled.div`
  background-image: url(${arrowDown});
  height: 30px;
  width: 20px;

  @media (max-width: ${S}px) {
    display: none;
  }
`;

const TableContentsCardContainer = styled.div`
  position: relative;
  &:not(:last-child) {
    border-bottom: 1px solid ${MEDIUMGRAY};
  }
`;

const TableContentsCard = styled.a`
  position: relative;
  cursor: pointer;
  height: 130px;
  background-color: ${WHITE};
  display: flex;
  transition: transform 0.2s ease, box-shadow 0.4s ease !important;
  z-index: 0;
  text-decoration: none;
  transform: scale(1);

  &:focus {
    outline: none;
    border: 3px solid ${TEEL};
  }

  @media (min-width: ${S}px) {
    &:hover {
      margin-bottom: 0;
      transform: scale(1.06);
      border: 0;
      box-shadow: 0 5px 24px 0 rgba(0, 0, 0, 0.07);
      z-index: 1;
      transition: transform 0.2s ease, box-shadow 0.4s ease;
    }
    &:hover ${ContentsArrow} {
      background-image: ${props =>
        props.page === 'resiliency'
          ? `url(${resilArrowDownActive})`
          : `url(${roboArrowDownActive})`};
    }
  }
`;

const NumberContainer = styled.div`
  position: relative;
  width: 68px;
  margin-left: 48px;
  margin-right: 8%;
  text-align: center;
  align-self: center;

  @media (max-width: ${S}px) {
    margin-left: 16px;
    margin-right: 7%;
    width: 55px;
  }
`;

const NumberImage = ({ number, index }) => (
  <Image
    src={number}
    alt={`Section ${index}`}
    style={{ paddingTop: 5, width: '136%' }}
  />
);

const TitleContainer = styled.div`
  width: 66%;
  align-self: center;
`;

const Title = styled.div`
  font-family: ${SOURCE_BOLD};
  font-size: 1.7rem;
  margin-top: -7px;
  color: ${BLACK};

  @media (max-width: ${S}px) {
    font-size: 1.5rem;
    margin-top: 0px;
    line-height: 30px;
  }
`;

const Subtitle = styled.div`
  font-family: ${SOURCE};
  font-size: 1rem;
  color: ${GRAY};
  margin-top: -7px;

  @media (max-width: ${S}px) {
    display: none;
  }
`;

const Button = styled.div`
  align-self: center;
`;

const TableOfContents = React.memo(function TableOfContents({ sectionTitles, page, navigateSection, slugs }) { 
  return (
    <OuterContainer>
      <Spacer height={5} id={slugs[0]} />
      <Container>
        <DotPatternContainer1 />
        <DotPatternContainer2 />
        {sectionTitles.map((section, index) => {
          return index > 0 ? (
            <TableContentsCardContainer key={`toc-container-${index}`}>
              <TableContentsCard
                href={`#section-title-${index}`}
                page={page}
                onClick={e => {
                  const eventDetail = e.detail
                  e.preventDefault()
                  navigateSection(index, () => {
                    navigate(`#${slugs[index]}`)
                    if (eventDetail === 0)
                      document.querySelector(`#section-title-${index}`).focus()
                  })
                }}
                id={`toc-card-${index}`}
              >
                <NumberContainer>
                  <NumberImage number={section.number} index={index} />
                </NumberContainer>
                <TitleContainer>
                  <Title>{section.title}</Title>
                  <Subtitle>{section.linkSubtitle}</Subtitle>
                </TitleContainer>
                <Button>
                  <ContentsArrow></ContentsArrow>
                </Button>
              </TableContentsCard>
            </TableContentsCardContainer>
          ) : null
        })}
      </Container>
    </OuterContainer>
  )
 });
export default TableOfContents;
