import React from 'react';
import styled, { css, keyframes } from 'styled-components';


const spot = keyframes`
  0% {
    transform: translateY(0);
  }
  60% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const MasterGroup = styled.g`
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

const BaseG = styled.g`
  animation-name: ${spot};
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 4s;

  &:first-child {
    animation-duration: 3.2s;
  }

  &:last-child {
    animation-duration: 5.4s;
  }
`;

const PhoneGroup1 = ({ active }) => (
  <MasterGroup active={active}>
    <BaseG clipPath="url(#v)">
      <image
        alt="Cursor clicking on 'Make Calls' button"
        width="3235"
        height="2026"
        overflow="visible"
        transform="translate(-35.815 113.613) scale(.2061)"
        xlinkHref="/static/types-of-calls/69AF19779C80144C.png"
      />
    </BaseG>
    <BaseG className="st0">
      <image
        width="1210"
        height="1277"
        overflow="visible"
        transform="matrix(.174 0 0 .174 20.534 137.386)"
        xlinkHref="/static/types-of-calls/69AF19779C80144F.png"
      />
      <image
        alt="Microphone with audio wave"
        width="3156"
        height="3344"
        overflow="visible"
        transform="matrix(.174 0 0 .174 -249.126 -89.327)"
        xlinkHref="/static/types-of-calls/69AF19779C80144D.png"
      />
    </BaseG>
    <BaseG clipPath="url(#y)">
      <image
        alt="Computer with keyboard connected to drives and networks with cables"
        width="2843"
        height="2863"
        overflow="visible"
        transform="translate(140.706 317.062) scale(.2257)"
        xlinkHref="/static/types-of-calls/69AF19779C801453.png"
      />
    </BaseG>
  </MasterGroup>
);
const PhoneGroup2 = ({ active }) => (
  <MasterGroup active={active}>
    <BaseG clipPath="url(#p)">
      <image
        alt="Icon of Rx prescription medicine with 'Ready' status"
        width="2466"
        height="2143"
        overflow="visible"
        transform="translate(52.769 329.292) scale(.1741)"
        xlinkHref="/static/types-of-calls/2DB380A26D30772.png"
      />
    </BaseG>
    <BaseG clipPath="url(#r)">
      <image
        alt="Icon of airplane with 'On Time' status"
        width="1929"
        height="1744"
        overflow="visible"
        transform="matrix(.24 0 0 .24 -21.242 65.965)"
        xlinkHref="/static/types-of-calls/69AF19779C801434.png"
      />
    </BaseG>
    <BaseG clipPath="url(#t)">
      <image
        alt="Icon of snow falling outside building with 'Closed' status"
        width="3203"
        height="1338"
        overflow="visible"
        transform="translate(265.202 291.61) scale(.1605)"
        xlinkHref="/static/types-of-calls/69AF19779C801433.png"
      />
    </BaseG>
  </MasterGroup>
);
const PhoneGroup3 = ({ active }) => (
  <MasterGroup active={active}>
    <BaseG clipPath="url(#j)">
      <image
        alt="Pencil checking off items in a list"
        width="1891"
        height="1808"
        overflow="visible"
        transform="translate(155.752 16.13) scale(.2281)"
        xlinkHref="/static/types-of-calls/2DB380A26D3077C.png"
      />
    </BaseG>
    <BaseG clipPath="url(#l)">
      <image
        alt="Headphones with microphone"
        width="2115"
        height="2481"
        overflow="visible"
        transform="translate(-52.32 182.116) scale(.2171)"
        xlinkHref="/static/types-of-calls/2DB380A26D30774.png"
      />
    </BaseG>
    <BaseG clipPath="url(#n)">
      <image
        alt="Outside of financial building"
        width="3461"
        height="3584"
        overflow="visible"
        transform="matrix(.179 0 0 .179 183.17 277.759)"
        xlinkHref="/static/types-of-calls/2DB380A26D30776.png"
      />
    </BaseG>
  </MasterGroup>
);
const PhoneGroup4 = ({ active }) => (
  <MasterGroup active={active}>
    <BaseG clipPath="url(#f)">
      <image
        width="2999"
        height="2827"
        overflow="visible"
        transform="translate(273.865 85.946) scale(.1604)"
        xlinkHref="/static/types-of-calls/2DB380A26D3077B.png"
      />
    </BaseG>
    <BaseG clipPath="url(#d)">
      <image
        width="2786"
        height="2268"
        overflow="visible"
        transform="rotate(6.714 -2226.84 3023.601) scale(.1604)"
        xlinkHref="/static/types-of-calls/2DB380A26D30775.png"
      />
    </BaseG>
    <BaseG clipPath="url(#h)">
      <image
        width="1778"
        height="1760"
        overflow="visible"
        transform="rotate(-3.699 3633.88 323.606) scale(.24)"
        xlinkHref="/static/types-of-calls/2DB380A26D3077D.png"
      />
    </BaseG>
    <BaseG clipPath="url(#h)">
      <image
        width="3347"
        height="3280"
        overflow="visible"
        transform="rotate(-3.699 1294.657 5862.185) scale(.24)"
        xlinkHref="/static/types-of-calls/2DB380A26D3077F.png"
      />
    </BaseG>
  </MasterGroup>
)

export default function Component({ currentPhone }) { 
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0"
      y="0"
      enableBackground="new 0 0 685.69 820.92"
      viewBox="0 0 685.69 820.92"
    >
      <defs>
        <path id="a" d="M44.65 -52.91H598.92V820.39H44.65z" />
      </defs>
      <clipPath id="b">
        <use overflow="visible" xlinkHref="#a" />
      </clipPath>
      <g clipPath="url(#b)">
        <image
          alt="Cellphone"
          width="4038"
          height="6101"
          overflow="visible"
          transform="matrix(.24 0 0 .24 -288.39 -333.803)"
          xlinkHref="/static/types-of-calls/2DB380A26D30777.png"
        />
      </g>
      <defs>
        <path
          id="c"
          d="M367.13 369.09H602.95V618.27H367.13z"
          transform="rotate(6.719 484.876 493.486)"
        />
      </defs>
      <clipPath id="d">
        <use overflow="visible" xlinkHref="#c" />
      </clipPath>
  
      <g>
        <defs>
          <path id="e" d="M327.34 99.61H563.16V348.79H327.34z" />
        </defs>
        <clipPath id="f">
          <use overflow="visible" xlinkHref="#e" />
        </clipPath>
      </g>
      <g>
        <defs>
          <path
            id="g"
            d="M17.03 227.77H369.91999999999996V600.65H17.03z"
            transform="rotate(-3.624 193.694 414.245)"
          />
        </defs>
        <clipPath id="h">
          <use overflow="visible" xlinkHref="#g" />
        </clipPath>
      </g>
      <g>
        <defs>
          <path id="i" d="M266.44 67.01H601.77V421.33H266.44z" />
        </defs>
        <clipPath id="j">
          <use overflow="visible" xlinkHref="#i" />
        </clipPath>
        <PhoneGroup4 active={currentPhone === 3} />
        <g>
          <defs>
            <path id="k" d="M11.3 233.38H330.57V570.73H11.3z" />
          </defs>
          <clipPath id="l">
            <use overflow="visible" xlinkHref="#k" />
          </clipPath>
        </g>
        <g>
          <defs>
            <path id="m" d="M350.63 414.91H613.86V693.05H350.63z" />
          </defs>
          <clipPath id="n">
            <use overflow="visible" xlinkHref="#m" />
          </clipPath>
        </g>
      </g>
      <g>
        <defs>
          <path id="o" d="M44.3 434.17H300.28V704.6500000000001H44.3z" />
        </defs>
        <clipPath id="p">
          <use overflow="visible" xlinkHref="#o" />
        </clipPath>
        <PhoneGroup3 active={currentPhone === 2} />
        <g>
          <defs>
            <path id="q" d="M8.86 76.15H361.75V449.03H8.86z" />
          </defs>
          <clipPath id="r">
            <use overflow="visible" xlinkHref="#q" />
          </clipPath>
        </g>
        <g>
          <defs>
            <path id="s" d="M370.81 264.07H606.79V513.42H370.81z" />
          </defs>
          <clipPath id="t">
            <use overflow="visible" xlinkHref="#s" />
          </clipPath>
        </g>
      </g>
      <g>
        <defs>
          <path id="u" d="M249.67 155.33H552.67V475.5H249.67z" />
        </defs>
        <clipPath id="v">
          <use overflow="visible" xlinkHref="#u" />
        </clipPath>
        <PhoneGroup2 active={currentPhone === 1} />
        <g>
          <defs>
            <path id="w" d="M5.12 92.05H260.96V362.38H5.12z" />
          </defs>
          <clipPath>
            <use overflow="visible" xlinkHref="#w" />
          </clipPath>
        </g>
        <g>
          <defs>
            <path id="x" d="M353.13 367.43H685.05V718.1600000000001H353.13z" />
          </defs>
          <clipPath id="y">
            <use overflow="visible" xlinkHref="#x" />
          </clipPath>
          <PhoneGroup1 active={currentPhone === 0} />
        </g>
      </g>
    </svg>
  )
}

