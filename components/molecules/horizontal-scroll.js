import React, { useReducer, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

import dotPattern from 'public/static/background-textures/dot-pattern.svg';
import { S } from 'styles/breakpoints';

const DynamicHeightContainer = styled.div.attrs(({ dynamicHeight }) => {
  const height = `${dynamicHeight}px`
  return { style: { height } }
})`
  position: relative;
  width: ${({ enabled }) => (enabled ? '100%' : 'auto')};
`;

const HorizontalObjectContainer = styled.div`
  position: sticky;
  top: 68px;
  height: calc(100vh - 68px);
  width: 100%;
  padding-bottom: 1rem;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  overflow-x: ${({ enabled }) => (enabled ? 'hidden' : 'auto')};

  @media (min-height: 1000px) {
    padding-bottom: 8rem;
    padding-top: 6rem;
  }
`;

const DotPatternContainer = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  background-image: url(${dotPattern});
  opacity: 0.7;

  @media (max-width: ${S}px) {
    display: none;
  }
`;

const DotPatternContainer1 = styled(DotPatternContainer)`
  bottom: 0;
  left: 100px;
`;

const DotPatternContainer2 = styled(DotPatternContainer)`
  top: -125px;
  right: -300px;
`;

const HorizontalObject = styled.div.attrs(({ translate }) => ({
  style: { transform: `translateX(${translate}px)` },
}))`
  height: 50%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0 150px 0 250px;
  flex-grow: 1;
  will-change: transform;
`;

const calcDynamicHeight = objectWidth => {
  const vw = window.innerWidth
  const vh = window.innerHeight
  return objectWidth - vw + vh + 100
}

const setDynamicHeight = (ref, dispatch) => {
  const objectWidth = ref.current.scrollWidth
  dispatch({ type: 'SET_OBJECT_WIDTH', objectWidth })
  const dynamicHeight = calcDynamicHeight(objectWidth)
  dispatch({ type: 'SET_DYNAMIC_HEIGHT', dynamicHeight })
}

const applyScrollListener = (dispatch, containerRef) => {
  window.addEventListener('scroll', () => {
    const offsetTop = containerRef.current.offsetTop
    if (offsetTop > 0) dispatch({ type: 'SET_DELTA_X_OFFSET_TOP', offsetTop })
  })
}

const translateReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ENABLED':
      return { ...state, enabled: true }
    case 'SET_DELTA_X_OFFSET_TOP':
      const deltaX = -action.offsetTop
      return { ...state, deltaX }
    case 'SET_OBJECT_WIDTH':
      return { ...state, objectWidth: action.objectWidth }
    case 'SET_DYNAMIC_HEIGHT':
      return { ...state, dynamicHeight: action.dynamicHeight }
    default:
      return { ...state }
  }
}

const HorizontalObjectInner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
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

export default function Component({  cards, header, page, active }) {
  const [translate, dispatch] = useReducer(translateReducer, {
    scrollY: 0,
    deltaX: 0,
    dynamicHeight: null,
    objectWidth: null,
    enabled: false,
  });

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  useEffect(() => {
    dispatch({ type: 'SET_ENABLED' })
    setDynamicHeight(objectRef, dispatch)
    applyScrollListener(dispatch, containerRef)
    window.addEventListener('resize', () => {
      setDynamicHeight(objectRef, dispatch)
    })
  }, []);

  return (
    <DynamicHeightContainer
      dynamicHeight={translate.dynamicHeight}
      enabled={translate.enabled}
    >
      <HorizontalObjectContainer ref={containerRef} enabled={translate.enabled}>
        {page === 'resiliency' ? (
          <>
            <DotPatternContainer1 />
            <DotPatternContainer2 />
          </>
        ) : null}

        {header}
        <HorizontalObject translate={translate.deltaX} ref={objectRef}>
          <HorizontalObjectInner active={active}>{cards}</HorizontalObjectInner>
        </HorizontalObject>
      </HorizontalObjectContainer>
    </DynamicHeightContainer>
  )
}
