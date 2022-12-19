import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import sectionTitles from '@/cms/resiliency/section-titles';
import resiliencySlugs from '@/cms/resiliency/slugs';
import testimonialContent from '@/cms/resiliency/testimonial-content';

import TYPE, { TYPE_COLORS } from '@/styles/type';
import { BLACK, TEEL } from '@/styles/colors';
import { S, XS } from '@/styles/breakpoints';
import Image from 'next/image';

import Testimonials from '@/components/molecules/testimonial-slider';
import playIcon from '@/static/media-icons/play.svg';

import {
  Section,
  StyledSectionTitleContainer,
  SectionContent,
} from '@/components/styled/Section';

import Spacer from '@/components/atoms/Spacer';

import VideoPlayerSingleModal from '@/components/molecules/VideoPlayerSingleModal';

const GlobalTestimonialStyles = createGlobalStyle`
  .testimonial-card-container.swiper-slide-active .testimonial-card-quote {
    display: block;
    transform: translateY(0);
    opacity: 1;
    transition: transform 0.7s 0.1s, opacity 0.7s 0.1s;
  }
  .testimonial-card-container.swiper-slide-active .testimonial-card-button {
    display: inline-block;
    transform: translateY(0);
    opacity: 1;
    transition: transform 0.7s 0.1s, opacity 0.7s 0.1s, background-color 0.3s;
    visibility: visible !important;
  }

`;

const TestimonialCardContainer = styled.div`
  /* .swiper-slide-active {
    border: 1px solid red;
    background-color: red;
  } */

  @media (max-width: ${S}px) {
    margin-bottom: 14px;
  }
`;

const TestimonialCard = styled.div`
  position: relative;
  height: 375px;
  background-image: ${props => `url(${props.videoThumbnail})`};
  /* max-width: 650px; */
  margin: 0 auto;
  background-size: cover;
  background-position: center;

  @media (max-width: ${S}px) {
    background-position: right;
  }
`;

const TestimonialCardInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding-left: 20px;
  margin-left: -1px;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );

  @media (max-width: ${S}px) {
    margin-left: 0;
    padding-left: 0;
    background-image: linear-gradient(
      to top,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    );
  }
`;

const TestimonialCardQuote = styled.div`
  position: relative;
  max-width: 55%;
  font-family: ${TYPE.m.font};
  font-size: ${TYPE.m.size}rem;
  line-height: ${TYPE.m.line};
  transform: translateY(-10px);
  opacity: 0;
  transition: transform 0.7s 0.1s, opacity 0.7s 0.1s;

  &:before {
    content: '“';
    display: block;
    line-height: 0.5;
    color: ${TEEL};
    font-size: 3.5rem;
  }

  @media (max-width: ${S}px) {
    max-width: fit-content;
    font-size: 1.4rem;
    position: absolute;
    text-align: center;
    padding: 0.7rem;
    bottom: 50px !important;

    &:before {
      display: inline-block;
      line-height: 0.5;
      color: ${BLACK};
      font-size: 1.4rem;
    }

    &:after {
      content: '”';
      display: inline;
      line-height: 0.5;
      color: ${BLACK};
      font-size: 1.4rem;
    }
  }
`;

const TestimonialCardButton = styled.button`
  width: 180px;
  border: none;
  cursor: pointer;
  display: inline-block;
  margin-top: 3rem;
  padding: 0.6rem 1.5rem;
  border-radius: 3px;
  color: ${TYPE_COLORS.white};
  background-color: ${BLACK};
  position: relative;
  font-family: ${TYPE.s.font};
  font-size: ${TYPE.s.size}rem;
  line-height: ${TYPE.s.line};
  opacity: 0;
  transform: translateY(-10px);
  transition: transform 0.7s 0.1s, opacity 0.7s 0.1s, background-color 0.3s;
  visibility: hidden;
  border: 3px solid transparent;

  &:hover {
    background-color: ${TEEL};
    transition: background-color 0.3s;
  }

  &:focus {
    outline: none;
    border: 3px solid #70cad6;
  }

  @media (max-width: ${S}px) {
    position: absolute;
    align-self: center;
    bottom: -20px !important;
  }
`;

const SwiperOuterContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 2rem 0 100px;
`;
const SwiperInnerContainer = styled.div`
  width: 150%;
  margin-left: -25%;

  .swiper-container {
    overflow: unset !important;
  }

  .swiper-pagination {
    bottom: -50px !important;
  }

  span.page-bullet {
    padding: 0 0.5rem;
    font-family: ${TYPE.labelTiny.font};
    font-size: ${TYPE.labelTiny.size}rem;
    line-height: ${TYPE.labelTiny.line};
    letter-spacing: ${TYPE.labelTiny.letterSpacing}px;
    color: ${TYPE_COLORS.grey};
    width: unset !important;
    height: unset !important;
    border-radius: unset !important;
    background: unset !important;
    opacity: unset !important;
    border: 3px solid transparent;

    &:focus {
      outline: none;
      border: 3px solid #70cad6;
    }
  }

  span.swiper-pagination-bullet-active {
    color: ${TEEL} !important;
  }

  span.swiper-pagination-bullet {
    background: none !important;
  }

  div.swiper-button-next {
    right: 20% !important;
    transform: scale(0.8);
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E") !important;
    border: 3px solid transparent;

    &:focus {
      outline: none;
      border: 3px solid #70cad6;
    }
  }
  div.swiper-button-prev {
    left: 20% !important;
    transform: scale(0.8);
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E");
    &:focus {
      outline: none;
      border: 3px solid #70cad6;
    }
  }

  @media (max-width: 1023px) {
    width: 200%;
    margin-left: -50%;

    div.swiper-button-prev {
      display: none;
    }
    div.swiper-button-next {
      display: none;
    }
  }

  @media (max-width: ${XS}px) {
    width: 230%;
    margin-left: -65%;
  }
`;

const PlayVideoWrapper = styled.div`
  display: flex;
`;

const PlayIcon = styled.div`
  margin: 3px 6px 0 0;
`;

const PlayButtonText = styled.div`
  position: relative;
  top: 2.5px;
`;

const StyledSection = styled(Section)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

const NoJsNotice = styled.h3`
  position: relative;
  display: inline-block;
  margin: 0 auto;
  text-align: center;
  font-family: ${TYPE.m.font};
  font-size: ${TYPE.m.size}rem;
  line-height: ${TYPE.m.line};
  font-weight: ${TYPE.m.weight};
  color: ${TYPE_COLORS.black};
`;

class ResiliencySection04 extends React.Component {
  state = {
    showVideoModal: false,
    videoUrl: null,
    videoTitle: null,
    noJs: true,
  }

  componentDidMount = () => this.setState({ noJs: false });

  setShowVideoModal = (url, title) => {
    if (this.state.showVideoModal) {
      const bodyElement = document.querySelector('body')
      bodyElement.classList.remove('scrollHidden')
    }
    this.setState({
      showVideoModal: !this.state.showVideoModal,
      videoUrl: url,
      videoTitle: title,
    })
  }

  mapTestimonials = content =>
    content.map((testimonial, i) => (
      <TestimonialCardContainer
        key={`testimonial-${i}`}
        className="testimonial-card-container"
      >
        <TestimonialCard videoThumbnail={testimonial.videoThumbnail}>
          <TestimonialCardInner>
            <TestimonialCardQuote
              className="testimonial-card-quote"
              dangerouslySetInnerHTML={{ __html: testimonial.videoQuote }}
            />
            <TestimonialCardButton
              className="testimonial-card-button"
              onClick={() =>
                this.setShowVideoModal(
                  testimonial.videoUrl,
                  testimonial.videoTitle
                )
              }
            >
              <PlayVideoWrapper>
                <PlayIcon>
                  <Image src={playIcon} alt="Play the Video" width={Image} />
                </PlayIcon>
                <PlayButtonText>Hear Their Story</PlayButtonText>
              </PlayVideoWrapper>
            </TestimonialCardButton>
          </TestimonialCardInner>
        </TestimonialCard>
      </TestimonialCardContainer>
    ))

  render() {
    const section = sectionTitles[4]
    const visited = this.props.checkSectionVisited(4)
    return (
      <StyledSection>
        <Spacer height={6} id={resiliencySlugs[4]} />
        <VideoPlayerSingleModal
          isShowing={this.state.showVideoModal}
          setShowVideoModal={this.setShowVideoModal}
          videoUrl={this.state.videoUrl}
          videoTitle={this.state.videoTitle}
        />
        <GlobalTestimonialStyles />
        <StyledSectionTitleContainer
          section={section}
          active={visited}
          sectionNum={4}
        />
        <SectionContent
          style={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            marginTop: 0,
          }}
          active={visited}
        >
          {!this.state.noJs ? (
            <SwiperOuterContainer>
              <SwiperInnerContainer>
                <Testimonials>
                  {this.mapTestimonials(testimonialContent)}
                </Testimonials>
              </SwiperInnerContainer>
            </SwiperOuterContainer>
          ) : (
            <NoJsNotice>
              Testimonial Videos not viewable without JavaScript enabled.
            </NoJsNotice>
          )}
        </SectionContent>
      </StyledSection>
    )
  }
}

export default ResiliencySection04;
