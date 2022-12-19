import React from 'react';
import styled, { css } from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import Ms1 from '@/components/images/media-scroll-01';
import Ms2 from '@/components/images/media-scroll-02';
import Ms3 from '@/components/images/media-scroll-03';

const mediaImages = [Ms1, Ms2, Ms3];

const MediaObjectsContainer = styled.div`
  position: sticky;
  display: block;
  top: 68px;
  right: 0;
  height: calc(100vh - 68px);
  width: 100%;
`

const MediaObjectsOuter = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
  transform: scale(0.8) translate(-75px, -150px);
  transition: transform 300ms ease-in-out, box-shadow 300ms ease-in-out;
  will-change: transform;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 25px 51px 0px;

  ${({ inView }) =>
    inView &&
    css`
      box-shadow: none;
      transform: scale(1) translate(0, 0);
      transition: transform 300ms ease-in-out, box-shadow 300ms easeout;
    `}
`

const MediaObject = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: block;
  z-index: 200;

  &.media-below-enter {
    transform: translateY(100%);
  }

  &.media-below-enter-active {
    transition: transform 0.7s ease-in-out;
    transform: translateY(0%);
  }

  &.media-below-exit {
    transform: translateY(0%);
    z-index: 100;
  }

  &.media-below-exit-active {
    transition: transform 0.7s ease-in-out;
    transform: translateY(-80%);
    z-index: 100;
  }

  &.media-above-enter {
    transform: translateY(-100%);
  }

  &.media-above-enter-active {
    transition: transform 0.7s ease-in-out;
    transform: translateY(0%);
  }

  &.media-above-exit {
    transform: translateY(0%);
    z-index: 100;
  }

  &.media-above-exit-active {
    transition: transform 0.7s ease-in-out;
    transform: translateY(80%);
    z-index: 100;
  }

  &.notInView-enter {
    transform: translateY(0%);
  }
  &.notInView-enter-active {
    transform: translateY(0%);
  }
  &.notInView-exit {
    transform: translateY(100%);
  }
  &.notInView-exit-active {
    transform: translateY(100%);
  }
`

const calcTranslatePositions = (currentMedia, previousMedia, inView) => {
  if (!inView) {
    return {
      timeout: 0,
      className: 'notInView',
    }
  } else {
    const className =
      currentMedia > previousMedia ? 'media-below' : 'media-above'
    return {
      timeout: 700,
      className,
    }
  }
}

const Medias = ({ mediaImages, currentMedia, previousMedia, inView }) => {
  const transitionProperties = calcTranslatePositions(
    currentMedia,
    previousMedia,
    inView
  )
  return mediaImages.map((MediaImage, i) => (
    <CSSTransition
      in={currentMedia === i}
      timeout={transitionProperties.timeout}
      classNames={transitionProperties.className}
      unmountOnExit
      key={`transition-${i}`}
    >
      <MediaObject>
        <MediaImage />
      </MediaObject>
    </CSSTransition>
  ))
}
export default function Component({  currentMedia, inView, previousMedia }) {
  return (
    <>
      <MediaObjectsContainer>
        <MediaObjectsOuter inView={inView}>
          {inView ? (
            <Medias
              mediaImages={mediaImages}
              currentMedia={currentMedia}
              previousMedia={previousMedia}
              inView={inView}
            />
          ) : (
            <Ms1 />
          )}
        </MediaObjectsOuter>
      </MediaObjectsContainer>
    </>
  )
}
