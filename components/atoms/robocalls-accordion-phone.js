import React from 'react';
import styled, { css } from 'styled-components';


const BaseG = styled.g`
  opacity: 0;
  transform: scale(0.5);
  transition: opacity 0.4s ease, transform 0.4s ease;
  transform-origin: center;

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
      transform: scale(1);
    `}
`

const PhoneGroup7 = ({ active }) => (
  <BaseG active={active}>
    <image
      alt="Robocall complaint being submitted to FTC via cellphone"
      width="1837"
      height="2122"
      overflow="visible"
      transform="matrix(.48 0 0 .48 -138.082 231.276)"
      xlinkHref="/static/robocalls-accordion-phone/E2A60BE62A60BEE7.png"
    />
  </BaseG>
)

const PhoneGroup0 = ({ active }) => (
  <BaseG active={active}>
    <image
      alt="Cellphone with blocked number"
      width="2933"
      height="3363"
      overflow="visible"
      transform="matrix(.48 0 0 .48 -462.082 -314.484)"
      xlinkHref="/static/robocalls-accordion-phone/E2A60BE62A60BEE0.png"
    />
  </BaseG>
)

const PhoneGroupE = ({ active }) => (
  <BaseG active={active}>
    <image
      alt="Magnifying glass hovering over incoming call"
      width="2246"
      height="2150"
      overflow="visible"
      transform="matrix(.48 0 0 .48 -34.402 27.276)"
      xlinkHref="/static/robocalls-accordion-phone/E2A60BE62A60BEEE.png"
    />
  </BaseG>
)

const PhoneGroupF = ({ active }) => (
  <BaseG active={active}>
    <image
      alt="Call-blocking app icon"
      width="895"
      height="1236"
      overflow="visible"
      transform="matrix(.48 0 0 .48 183.518 236.556)"
      xlinkHref="/static/robocalls-accordion-phone/E2A60BE62A60BEEF.png"
    />
  </BaseG>
)

const PhoneGroup2 = ({ active }) => (
  <BaseG active={active}>
    <image
      alt="List of phone numbers on the Do-Not-Call Registry"
      width="3128"
      height="2944"
      overflow="visible"
      transform="matrix(.48 0 0 .48 -338.242 -170.964)"
      xlinkHref="/static/robocalls-accordion-phone/E2A60BE62A60BEE2.png"
    />
  </BaseG>
)

const PhoneGroup5 = ({ active }) => (
  <BaseG active={active}>
    <image
      alt="Cellphone settings with toggle switches"
      width="2612"
      height="2591"
      overflow="visible"
      transform="matrix(.48 0 0 .48 -184.162 50.796)"
      xlinkHref="/static/robocalls-accordion-phone/E2A60BE62A60BEE5.png"
    />
  </BaseG>
)

export default function Component({ currentPhone }) { 
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0"
      y="0"
      enableBackground="new 0 0 795 1053"
      viewBox="0 0 795 1053"
    >
      <image
        width="1106"
        height="1942"
        overflow="visible"
        transform="matrix(.48 0 0 .48 181.118 61.356)"
        xlinkHref="/static/robocalls-accordion-phone/E2A60BE62A60BEE3.png"
      />
      <image
        alt="Cellphone"
        width="2937"
        height="3311"
        overflow="visible"
        transform="matrix(.48 0 0 .48 -252.322 -274.644)"
        xlinkHref="/static/robocalls-accordion-phone/E2A60BE62A60BEE1.png"
      />
      <PhoneGroup7 active={currentPhone === 4} />
      <PhoneGroup0 active={currentPhone === 2} />
      <PhoneGroupE active={currentPhone === 5} />
      <PhoneGroupF active={currentPhone === 1} />
      <PhoneGroup2 active={currentPhone === 3} />
      <PhoneGroup5 active={currentPhone === 0} />
    </svg>
  )
}
