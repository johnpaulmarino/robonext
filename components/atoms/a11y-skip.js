import React from 'react';
import styled from 'styled-components';

import TYPE, { TYPE_COLORS } from '@/styles/type';

const SkipMain = styled.a`
  position: absolute;
  left: -999px;
  top: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: 9999;

  &:active,
  &:focus {
    position: fixed;
    left: 150px;
    width: auto;
    height: 68px;
    overflow: auto;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: white;
    text-decoration: none;
    color: ${TYPE_COLORS.black} !important;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${TYPE.label.font};
    outline: none;
    border: 3px solid #70cad6;
  }

  &:visited {
    color: ${TYPE_COLORS.black} !important;
  }
`;
export default function Component({ text, navigate, href }) { 
  return(
    <SkipMain
      href={href}
      onClick={e => {
        e.preventDefault()
        navigate()
      }}
    >
      <span>{text}</span>
    </SkipMain>
  )
}

