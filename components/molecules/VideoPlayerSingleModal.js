import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styled, { keyframes } from 'styled-components';

import { BLACK, WHITE } from 'styles/colors';
import TYPE from 'styles/type';
import { S } from 'styles/breakpoints';

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
`

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
  bodyElement.classList.add('scrollHidden')
}

const VideoPlayerSingleModal = props => {
  return (
    <div>
      <CSSTransition
        in={props.isShowing}
        timeout={500}
        classNames="slide"
        unmountOnExit
        onEnter={() => {
          scrollHandler()
        }}
      >
        <VideoModal>
          <VideoPlayer>
            <CloseButtonWrapper
              className="closeButton"
              onClick={() => {
                props.setShowVideoModal()
              }}
            >
              <CloseX>&times;</CloseX>
              <Close>Close</Close>
            </CloseButtonWrapper>
            <VideoWrapper>
              <VideoIFrame
                title={props.videoTitle}
                width="560"
                height="349"
                src={props.videoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></VideoIFrame>
            </VideoWrapper>
          </VideoPlayer>
        </VideoModal>
      </CSSTransition>
    </div>
  )
}

export default VideoPlayerSingleModal;
