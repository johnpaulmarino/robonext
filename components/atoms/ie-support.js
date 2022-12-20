import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import { TEEL, BLACK } from 'styles/colors';
import TYPE, { TYPE_COLORS } from 'styles/type';

const detect = () => {
  const ua = window.navigator.userAgent

  const msie = ua.indexOf('MSIE ')
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10)
  }

  const trident = ua.indexOf('Trident/')
  if (trident > 0) {
    // IE 11 => return version number
    const rv = ua.indexOf('rv:')
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10)
  }

  const edge = ua.indexOf('Edge/')
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10)
  }

  // other browser
  return false
}

const SupportNoticeContainer = styled.div`
  position: fixed;
  top: -250px;
  left: 50%;
  transform: translateX(-50%);
  /* height: 200px; */
  width: 350px;
  padding: 1rem;
  margin: 0;
  z-index: 2147483638;
  background-color: white;
  text-align: center;
  border: 3px solid ${TEEL};
  font-family: ${TYPE.s.font};
  font-size: ${TYPE.s.size}rem;
  font-weight: ${TYPE.s.weight};
  visibility: hidden;

  h3 {
    padding: 0;
    margin: 0;
  }

  h4 {
    padding: 0;
    margin: 1rem 0;
  }

  ${({ supported }) =>
    !supported &&
    css`
      visibility: visible;
      top: 1rem;
    `}
`;

const SupportNoticeButton = styled.button`
  border: 3px solid transparent;
  padding: 0.5rem 2rem;
  font-size: ${TYPE.s.size}rem;
  font-family: ${TYPE.s.font};
  font-weight: ${TYPE.s.weight};
  line-height: ${TYPE.s.line};
  letter-spacing: ${TYPE.s.letterSpacing}px;
  text-decoration: none;
  background-color: ${BLACK};
  color: ${TYPE_COLORS.white};
  border-radius: 4rem;
  cursor: pointer;
`
export default function Component() { 
  const [supported, setSupported] = useState(true)
  useEffect(() => {
    const version = detect()
    version && version < 11 && setSupported(false)
  }, [])

  return (
    <SupportNoticeContainer supported={supported}>
      <h3>Your browser is not supported.</h3>
      <h4>
        We recommend browsing this site on Internet Explorer 11, Edge, and other
        Modern Browsers
      </h4>
      <SupportNoticeButton onClick={() => setSupported(true)}>
        OK
      </SupportNoticeButton>
    </SupportNoticeContainer>
  )
}
