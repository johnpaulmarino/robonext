import React from 'react';
import styled from 'styled-components';

import logoWhite from 'public/static/logo-white.svg';
import logo from 'public/static/logo.svg';
import Image from 'next/image';
import styles from 'styles/components/atoms/Logo.module.scss';
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
        className={styles.logo}
        alt="CTIA official logo"
      />
    </a>
  )
  
}
