import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import Ms1 from '@/components/images/media-scroll-01';
import Ms2 from '@/components/images/media-scroll-02';
import Ms3 from '@/components/images/media-scroll-03';

const imgArray = [Ms1, Ms2, Ms3];

const MediaObjectsOuter = styled.div`
  position: sticky;
  display: block;
  top: 68px;
  right: 0;
  height: calc(100vh - 68px);
  width: 100%;
`;

const MediaObject = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: block;
  transform: scale(0.8) translate(-75px, -150px);
  transition: transform 300ms ease-out 0s, box-shadow 300ms ease-in-out 0s;
  will-change: transform;
  overflow: hidden;
  z-index: 100;

  ${({ inView }) =>
    inView &&
    css`
      transform: scale(1) translate(0, 0);
      transition: transform 300ms ease-in-out 0s,
        box-shadow 300ms ease-in-out 0s;
    `}

  ${({ active }) =>
    active &&
    css`
      z-index: 200;
    `}
`;

const leavingAboveAnimation = keyframes`
  0% {transform: translateY(0);}
  100% {transform: translateY(-80%);}
`;

const leavingBelowAnimation = keyframes`
  0% {transform: translateY(0);}
  100% {transform: translateY(80%);}
`;

const MediaObjectInner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  will-change: transform;
  transition: transform 1s;

  ${({ active }) =>
    active &&
    css`
      transform: translateY(0%);
    `}

  ${({ above }) =>
    above &&
    css`
      animation: ${leavingAboveAnimation} 1s;
      animation-delay: 0.01s;
      transform: translateY(-100%);
    `}

  ${({ below }) =>
    below &&
    css`
      animation: ${leavingBelowAnimation} 1s;
      animation-delay: 0.01s;
      transform: translateY(100%);
    `}

`;

const MediaObjects = ({ inView, currentMedia }) =>
  imgArray.map((Media, i) => (
    <MediaObject
      key={`media-object-${i}`}
      active={currentMedia === i}
      inView={inView}
    >
      <MediaObjectInner
        active={currentMedia === i}
        above={currentMedia > i}
        below={currentMedia < i}
      >
        <Media />
      </MediaObjectInner>
    </MediaObject>
  ))

  export default function Component({ inView, currentMedia}) { 
    return (
      <MediaObjectsOuter>
        <MediaObjects inView={inView} currentMedia={currentMedia} />
      </MediaObjectsOuter>
    )
  }

