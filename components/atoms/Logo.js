import React from 'react';
import styled from 'styled-components';

import logoWhite from 'public/static/logo-white.svg';
import logo from 'public/static/logo.svg';
import Image from 'next/image';

const Logo = styled.img`
  height: auto;
  margin-left: 20px;
  width: 70px;
  padding-top: 3px;
`;

Logo.defaultProps = {
  alt: 'CTIA',
}
//<Logo src={props.white ? logoWhite : logo} alt="CTIA official logo" />
export default function Component(props) { 
  return (
    <a href="https://www.ctia.org/">
      
      <Image
        src={logo}
        alt="CTIA official logo"
        width={70}
      />
    </a>
  )
  
}
