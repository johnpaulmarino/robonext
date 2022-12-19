import React, { useReducer, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

import TYPE, { TYPE_COLORS } from '@/styles/type';
import SPACING from '@/styles/spacing';
import { S } from '@/styles/breakpoints';
import { BLACK, WHITE } from '@/styles/colors';

import { dyk } from '@/cms/robocalls/fighting-content';

const DynamicHeightContainer = styled.div.attrs(({ dynamicHeight }) => {
  const height = `${dynamicHeight}px`
  return { style: { height } }
})`
  position: relative;
  width: 100%;
`;

const HorizontalObjectContainer = styled.div`
  position: sticky;
  top: 68px;
  height: calc(100vh - 68px);
  width: 100%;
  padding-bottom: 3rem;
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

  @media (min-width: ${S}px) and (max-height: 700px) {
    padding-top: 0;
  }
`;

const HorizontalObject = styled.div.attrs(({ translate }) => ({
  style: { transform: `translateX(${translate}px)` },
}))`
  position: relative;
  height: 50%;
  display: flex;
  flex-flow: column nowrap;
  padding: 0 150px 0 250px;
  flex-grow: 1;
  will-change: transform;
  /* padding-top: 4rem; */
`;

const HorizontalObjectTop = styled.div`
  position: relative;
  height: 68%;
  width: 2000px;
  display: flex;
  flex-flow: row nowrap;
`;
const HorizontalObjectBottom = styled.div`
  position: relative;
  height: 32%;
  width: 2000px;
`;

const HorizontalBar = styled.div`
  position: absolute;
  top: 48%;
  transform: translateY(-48%);
  height: 20px;
  width: ${({ width }) => width - 800}px;
  background-color: #7b6fb1;
  opacity: 0.32;
  border-radius: 20px;
`;

const BlockBoxContainer = styled.div`
  margin-top: 36px;
  position: relative;
  width: 325px;
  height: 110%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const BlockBox = styled.div`
  position: relative;
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
  padding: ${SPACING.s}rem;
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
    dispatch({ type: 'SET_DELTA_X_OFFSET_TOP', offsetTop })
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
  height: 100%;
  position: relative;
  display: flex;
  align-items: flex-start;
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
export default function Component({  cards, header, active }) {
  const [translate, dispatch] = useReducer(translateReducer, {
    scrollY: 0,
    deltaX: 0,
    dynamicHeight: null,
    objectWidth: null,
    enabled: false,
  })

  const containerRef = useRef(null)
  const objectRef = useRef(null)

  useEffect(() => {
    dispatch({ type: 'SET_ENABLED' })
    setDynamicHeight(objectRef, dispatch)
    applyScrollListener(dispatch, containerRef)
    window.addEventListener('resize', () => {
      setDynamicHeight(objectRef, dispatch)
    })
  }, [])

  return (
    <DynamicHeightContainer dynamicHeight={translate.dynamicHeight}>
      <HorizontalObjectContainer ref={containerRef} enabled={translate.enabled}>
        {header}
        <HorizontalObject translate={translate.deltaX} ref={objectRef}>
          <HorizontalObjectInner active={active}>
            <HorizontalObjectTop>
              <HorizontalBar width={translate.objectWidth} />
              {cards}
              <BlockBoxContainer>
                <BlockBox>
                  <BlockBoxHeader>Did You Know?</BlockBoxHeader>
                  <BlockBoxParagraph>{dyk}</BlockBoxParagraph>
                </BlockBox>
              </BlockBoxContainer>
            </HorizontalObjectTop>
            <HorizontalObjectBottom></HorizontalObjectBottom>
          </HorizontalObjectInner>
        </HorizontalObject>
      </HorizontalObjectContainer>
    </DynamicHeightContainer>
  )
}
