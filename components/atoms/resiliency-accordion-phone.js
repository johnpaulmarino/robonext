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
`;

const PhoneGroupE = ({ active }) => (
  <BaseG active={active} clipPath="url(#j)">
    <image
      alt="Weather app showing alert for hurricane watch"
      width="2135"
      height="2068"
      overflow="visible"
      transform="matrix(.48 0 0 .48 -207.18 -111.38)"
      xlinkHref="/static/resiliency-accordion-phone/F026551A0CA5AB5E.png"
    />
  </BaseG>
);

const PhoneGroup0 = ({ active }) => (
  <BaseG active={active} clipPath="url(#h)">
    <image
      alt="Text messages reading 'I am safe' and 'Glad to hear that"
      width="1640"
      height="1535"
      overflow="visible"
      transform="matrix(.48 0 0 .48 1.62 125.26)"
      xlinkHref="/static/resiliency-accordion-phone/F026551A0CA5AB50.png"
    />
  </BaseG>
);

const PhoneGroup1 = ({ active }) => (
  <BaseG active={active} clipPath="url(#d)">
    <image
      alt="Outgoing call to 911"
      width="2500"
      height="2569"
      overflow="visible"
      transform="matrix(.48 0 0 .48 -226.42 -95.015)"
      xlinkHref="/static/resiliency-accordion-phone/F026551A0CA5AB51.png"
    />
  </BaseG>
);

const PhoneGroup3 = ({ active }) => (
  <BaseG active={active} clipPath="url(#f)">
    <image
      alt="List of contacts in phone, including Emergency Contact"
      width="2323"
      height="2733"
      overflow="visible"
      transform="matrix(.48 0 0 .48 -223.98 -95.54)"
      xlinkHref="/static/resiliency-accordion-phone/F026551A0CA5AB53.png"
    />
  </BaseG>
);

const PhoneGroup4 = ({ active }) => (
  <BaseG active={active} clipPath="url(#p)">
    <image
      alt="Battery with lots of charge remaining"
      width="2119"
      height="2293"
      overflow="visible"
      transform="matrix(.48 0 0 .48 -75.66 -145.94)"
      xlinkHref="/static/resiliency-accordion-phone/F026551A0CA5AB54.png"
    />
  </BaseG>
);

const PhoneGroup5 = ({ active }) => (
  <BaseG active={active} clipPath="url(#l)">
    <image
      alt="Cellphone emergency alert"
      width="1840"
      height="1969"
      overflow="visible"
      transform="matrix(.48 0 0 .48 -89.1 -124.34)"
      xlinkHref="/static/resiliency-accordion-phone/F026551A0CA5AB55.png"
    />
  </BaseG>
);

const PhoneGroup7 = ({ active }) => (
  <BaseG active={active} clipPath="url(#n)">
    <image
      alt="Emergency contact information on phone"
      width="1839"
      height="1892"
      overflow="visible"
      transform="matrix(.48 0 0 .48 -130.38 -84.5)"
      xlinkHref="/static/resiliency-accordion-phone/F026551A0CA5AB57.png"
    />
  </BaseG>
);
export default function Component({ currentPhone }) { 
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0"
      y="0"
      enableBackground="new 0 0 795 1053"
      viewBox="0 0 795 1053"
      width="100%"
      height="100%"
    >
      <image
        width="1106"
        height="1942"
        overflow="visible"
        transform="matrix(.48 0 0 .48 141.3 48.46)"
        xlinkHref="/static/resiliency-accordion-phone/F026551A0CA5AB52.png"
      />
      <defs>
        <path id="a" d="M1 0.17H793.84V1052.44H1z" />
      </defs>
      <clipPath id="b">
        <use overflow="visible" xlinkHref="#a" />
      </clipPath>
      <g clipPath="url(#b)">
        <image
          width="2892"
          height="3214"
          overflow="visible"
          transform="matrix(.48 0 0 .48 -268.14 -240.98)"
          xlinkHref="/static/resiliency-accordion-phone/F026551A0CA5AB56.png"
        />
      </g>
      <defs>
        <path id="c" d="M1 0.17H793.84V1052.44H1z" />
      </defs>
      <clipPath id="d">
        <use overflow="visible" xlinkHref="#c" />
      </clipPath>
      <PhoneGroup1 active={currentPhone === 5} />
      <defs>
        <path id="e" d="M1 0.17H793.84V1052.44H1z" />
      </defs>
      <clipPath id="f">
        <use overflow="visible" xlinkHref="#e" />
      </clipPath>
      <PhoneGroup3 active={currentPhone === 6} />
      <g>
        <defs>
          <path id="g" d="M1 0.17H793.84V1052.44H1z" />
        </defs>
        <clipPath id="h">
          <use overflow="visible" xlinkHref="#g" />
        </clipPath>
        <PhoneGroup0 active={currentPhone === 4} />
      </g>
      <g>
        <defs>
          <path id="i" d="M1 0.17H793.84V1052.44H1z" />
        </defs>
        <clipPath id="j">
          <use overflow="visible" xlinkHref="#i" />
        </clipPath>
        <PhoneGroupE active={currentPhone === 3} />
      </g>
      <g>
        <defs>
          <path id="k" d="M1 0.17H793.84V1052.44H1z" />
        </defs>
        <clipPath id="l">
          <use overflow="visible" xlinkHref="#k" />
        </clipPath>
        <PhoneGroup5 active={currentPhone === 2} />
      </g>
      <g>
        <defs>
          <path id="m" d="M1 0.17H793.84V1052.44H1z" />
        </defs>
        <clipPath id="n">
          <use overflow="visible" xlinkHref="#m" />
        </clipPath>
        <PhoneGroup7 active={currentPhone === 1} />
      </g>
      <g>
        <defs>
          <path id="o" d="M1 0.17H793.84V1052.44H1z" />
        </defs>
        <clipPath id="p">
          <use overflow="visible" xlinkHref="#o" />
        </clipPath>
        <PhoneGroup4 active={currentPhone === 0} />
      </g>
    </svg>
  )
}
