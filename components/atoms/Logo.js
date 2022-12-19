import React from 'react';
import styled from 'styled-components';

import logoWhite from '@/static/logo-white.svg';
import logo from '@/static/logo.svg';

const Logo = styled.img`
  height: auto;
  margin-left: 20px;
  width: 70px;
  padding-top: 3px;
`;

Logo.defaultProps = {
  alt: 'CTIA',
}
export default function Component(props) { 
  return (
    <a href="https://www.ctia.org/">
      <Logo src={props.white ? logoWhite : logo} alt="CTIA official logo" />
    </a>
  )
  
}
