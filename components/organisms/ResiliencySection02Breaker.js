import React from 'react';
import styled from 'styled-components';
import { BLACK, WHITE } from 'styles/colors';
import TYPE, { TYPE_COLORS } from 'styles/type';
import { S } from 'styles/breakpoints';
import playIcon from 'public/static/media-icons/play.svg';
import imageBreaker from 'public/static/image-breaker/resiliency-section02-breaker.jpg';
import { section02video } from 'cms/resiliency/video-desriptions';
import Image from 'next/image';

import VideoPlayerSingleModal from 'components/molecules/VideoPlayerSingleModal';

const BreakerContainer = styled.div`
  height: calc(100vh - 68px);
  width: 100%;
  position: relative;
  background-image: url(${imageBreaker});
  // background-image: url(//img.youtube.com/vi/4gj79lYuDuc/maxresdefault.jpg);
  background-size: cover;
  background-position: center;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.06);
`;

const VideoLaunchPanel = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const BlockBox = styled.div`
  width: 100%;
  max-width: 456px;

  @media (max-width: ${S}px) {
    max-width: none;
  }
`;

const BlockBoxHeader = styled.h4`
  cursor: pointer;
  display: flex;
  margin: 0;
  width: fit-content;
  padding: 0.4rem 1.1rem;
  font-size: ${TYPE.labelMedium.size}rem;
  line-height: ${TYPE.labelMedium.line};
  font-family: ${TYPE.labelMedium.font};
  font-weight: ${TYPE.labelMedium.weight};
  color: ${TYPE_COLORS.white};
  background-color: ${BLACK};

  @media (max-width: ${S}px) {
    font-size: ${TYPE.mobileBlockBox.size}rem;
    letter-spacing: ${TYPE.mobileBlockBox.letterSpacing}px;
    padding: 0.75rem 1rem 1.1em;
    height: 3rem;
  }
`;

const PlayIcon = styled.div`
  margin: 3px 6px 0 0;

  @media (max-width: ${S}px) {
    margin: 5px 6px 0 0;
  }
`;

const PlayTheVideo = styled.div`
  padding: 4.5px 0 0 2px;
`;

const BlockBoxParagraph = styled.p`
  background-color: ${WHITE};
  margin: 0;
  padding: 0.75rem 1rem 1rem;
  border-style: solid;
  border-color: ${BLACK};
  border-width: 2px 0px 0px 2px;
  font-size: ${TYPE.ms.size}rem;
  font-family: ${TYPE.bodySans.font};
  font-weight: ${TYPE.bodySans.weight};
  line-height: ${TYPE.bodySans.line};
  letter-spacing: ${TYPE.bodySans.letterSpacing}px;

  @media (max-width: ${S}px) {
    border-width: 2px 0px 0px 0px;
    font-size: ${TYPE.mobileBlockBox.size}rem;
    letter-spacing: ${TYPE.mobileBlockBox.letterSpacing}px;
    padding: 0.75rem 1rem 1em;
  }
`;

export default class ResiliencyBreaker extends React.Component {
  state = { showVideoModal: false }

  setShowVideoModal = () => {
    this.setState({ showVideoModal: !this.state.showVideoModal })
    if (this.state.showVideoModal) {
      const bodyElement = document.querySelector('body')
      bodyElement.classList.remove('scrollHidden')
    }
  }

  render() {
    return (
      <BreakerContainer>
        <span role="img" aria-label="Crew maintaining networks"></span>
        <VideoPlayerSingleModal
          isShowing={this.state.showVideoModal}
          setShowVideoModal={this.setShowVideoModal}
          videoUrl={
            'https://www.youtube.com/embed/4gj79lYuDuc?autoplay=1&rel=0'
          }
          //Below is with restricted GUI (no controls other than play/pause)
          // videoUrl={"https://www.youtube.com/embed/4gj79lYuDuc?rel=0?version=3&autoplay=1&controls=0&&showinfo=0&loop=1"}
          videoTitle="How the Wireless Industry Prepares for Emergencies"
        />
        <VideoLaunchPanel>
          <BlockBox>
            <BlockBoxHeader onClick={() => this.setShowVideoModal()}>
              <PlayIcon>
                <Image src={playIcon} alt="Play the Video" width={16}/>
              </PlayIcon>
              <PlayTheVideo>Play the Video</PlayTheVideo>
            </BlockBoxHeader>
            <BlockBoxParagraph
              dangerouslySetInnerHTML={{ __html: section02video }}
            />
          </BlockBox>
        </VideoLaunchPanel>
      </BreakerContainer>
    )
  }
}
