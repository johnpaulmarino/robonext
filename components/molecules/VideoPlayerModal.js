import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

import { BLACK, WHITE } from 'styles/colors';
import TYPE, { TYPE_COLORS } from 'styles/type';
import { S } from 'styles/breakpoints';
import playIcon from 'public/static/media-icons/play.svg';

const VideoComponentWrapper = styled.div`
  height: calc(100vh - 68px);
  position: relative;
`;
const VideoLaunchPanel = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;
const VideoModal = styled.div`
  background-color: ${BLACK};
  position: fixed;
  top: 0px;
  height: 100vh;
  z-index: 2000;
  width: 100vw;

  &.slide-enter {
    transform: translateY(-300%);
    -webkit-transform: translateY(-300%);
    transition: 0.5s cubic-bezier(0, 1, 0.5, 1);
    -moz-transition: 0.5s cubic-bezier(0, 1, 0.5, 1);
    -webkit-transition: 0.5s cubic-bezier(0, 1, 0.5, 1);
  }

  &.slide-enter-active {
    transform: translateY(0%);
    -webkit-transform: translateY(0%);
  }

  &.slide-exit {
    transform: translateY(0%);
    -webkit-transform: translateY(0%);
    transition: 0.5s ease-in-out;
  }

  &.slide-exit-active {
    transform: translateY(-100%);
    -webkit-transform: translateY(-100%);
  }
`;
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const VideoPlayer = styled.div`
  padding: 0% 16%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  opacity: 1;
  animation: ${fadeIn};
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 2s;

  @media (max-width: ${S}px) {
    padding: 0;
  }
`;

const CloseButtonWrapper = styled.div`
  color: ${WHITE};
  cursor: pointer;
  display: flex;
  line-height: 2.5rem;
  margin-left: auto;
  padding-top: 6px;

  @media (max-width: ${S}px) {
    width: 100%;
    margin: 0;
    padding: 12px 0 4px 0px;
    justify-content: center;
  }
`;

const CloseX = styled.div`
  font-size: 1.5rem;
  position: relative;
  top: 1px;
  left: -5px;
  font-weight: bold;

  @media (max-width: ${S}px) {
    font-size: 2rem;
    position: relative;
    top: -6px;
  }
`;

const Close = styled.div`
  position: relative;
  margin-left: 0px;
  font-family: ${TYPE.labelTiny.font};
  font-weight: ${TYPE.labelTiny.weight};

  @media (max-width: ${S}px) {
    font-size: 1.45rem;
    top: -6.5px;
  }
`;

const BlockBox = styled.div`
  width: 100%;
  max-width: 352px;

  @media (max-width: ${S}px) {
    max-width: none;
  }
`;

const BlockBoxHeader = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  margin: 0;
  width: fit-content;
  padding: 0.4rem 1.1rem;
  font-size: ${TYPE.labelTiny.size}rem;
  line-height: ${TYPE.labelTiny.line};
  font-family: ${TYPE.labelTiny.font};
  font-weight: ${TYPE.labelTiny.weight};
  color: ${TYPE_COLORS.white};
  background: ${BLACK};

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
  font-size: ${TYPE.s.size}rem;
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

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 53.5%;
  padding-top: 25px;
  height: 0;

  @media (max-width: ${S}px) {
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

const VideoIFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const scrollHandler = () => {
  const bodyElement = document.querySelector('body')
  bodyElement.classList.toggle('scrollHidden')
}

const VideoPlayerModal = props => {
  const [showMessage, setShowMessage] = useState(false)
  return (
    <VideoComponentWrapper>
      <VideoLaunchPanel>
        <BlockBox>
          <BlockBoxHeader onClick={() => setShowMessage(true)}>
            <PlayIcon>
              <Image src={playIcon} alt="Play the Video"  width={16} />
            </PlayIcon>
            <PlayTheVideo>Play the Video</PlayTheVideo>
          </BlockBoxHeader>
          {props.videoDescription ? (
            <BlockBoxParagraph
              dangerouslySetInnerHTML={{ __html: props.videoDescription }}
            ></BlockBoxParagraph>
          ) : null}
        </BlockBox>
      </VideoLaunchPanel>

      <CSSTransition
        in={showMessage}
        timeout={500}
        classNames="slide"
        unmountOnExit
        onEnter={() => {
          scrollHandler()
        }}
      >
        <VideoModal
          variant="primary"
          dismissible={1}
          onClose={() => setShowMessage(false)}
        >
          <VideoPlayer>
            <CloseButtonWrapper
              className="closeButton"
              onClick={() => {
                setShowMessage(false)
                scrollHandler()
              }}
            >
              <CloseX>&times;</CloseX>
              <Close>Close</Close>
            </CloseButtonWrapper>
            <VideoWrapper>
              <VideoIFrame
                title="How Wireless Works"
                width="560"
                height="349"
                src="https://www.youtube.com/embed/DhGZ31oviZY?autoplay=1&rel=0"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></VideoIFrame>
            </VideoWrapper>
          </VideoPlayer>
        </VideoModal>
      </CSSTransition>
    </VideoComponentWrapper>
  )
}

export default VideoPlayerModal;
