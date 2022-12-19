import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import Scroll from '@/components/Scroll';
import FlCty01 from '@/static/floating-cities/floating-city-base-resize.png';
import FlCty02 from '@/static/floating-cities/floating-city2.png';
import FlCty03 from '@/static/floating-cities/floating-city3.png';
import FlCty04 from '@/static/floating-cities/floating-city4.png';
import FlCty05 from '@/static/floating-cities/floating-city5.png';
import FlCty06 from '@/static/floating-cities/floating-city6.png';
import FlCty07 from '@/static/floating-cities/floating-city7.png';
import FlCty08 from '@/static/floating-cities/floating-city8.png';
import FlCty09 from '@/static/floating-cities/floating-city9.png';

const BaseG = styled.g`
  opacity: 0;
  cursor: pointer;
  transition: all 200ms ease-out;
  will-change: opacity;

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
    `}

  ${({ active }) =>
    !active &&
    css`
      &:hover {
        opacity: 0.5;
      }
    `}
`;

const floatingIsland = keyframes`
  0% {transform: translate3d(0, 0, 0px);}
  100% {transform: translate3d(0, 8px, 0px);}
`;

const floatingCloud1 = keyframes`
  0% {transform: translate3d(0, 0, 0px);}
  100% {transform: translate3d(0, 15px, 0px);}
`;

const floatingCloud2 = keyframes`
  0% {transform: translate3d(0, 0, 0px);}
  100% {transform: translate3d(0, 10px, 0px);}
`;

const BaseSVG = styled.svg`
  animation: ${floatingIsland} 1.5s ease-in-out 0s infinite alternate;
`;

const CloudG = styled.g`
  animation: ${({ anim }) => anim} 1.5s ease-in-out 0s infinite alternate;
`;

const NumberG = styled.g`
  opacity: 0;
  transform: translateY(-200px);
  transition: all 200ms ease-out;
  will-change: transform, opacity;

  ${({ active }) =>
    active &&
    css`
      opacity: 1 !important;
      transition: all 200ms ease-out;
      transform: translateY(0px) !important;
    `}
`;

const getOffset = id => {
  const el = document.querySelector(`#${id}`)
  const windowHeight = window.innerHeight
  const elementHeight = el.clientHeight
  return -(windowHeight - elementHeight) / 2 - 50
}

const VehicleGroup8 = ({
  active,
  dispatchCurrentVehicle,
  vehicleNum,
  dispatchIsScrolling,
}) => (
  <Scroll
    type="id"
    element={`city-card-${vehicleNum}`}
    key={`city-card-${vehicleNum}`}
    scrollFunc={getOffset}
    dispatchIsScrolling={dispatchIsScrolling}
    dispatchCurrentVehicle={dispatchCurrentVehicle}
    vehicleNum={vehicleNum}
  >
    <BaseG
      active={active}
      className="item"
      id="item8"
      data-name="Mechanic, Supply and First Aid Trucks"
    >
      <g clipPath="url(#clip-path-2)">
        <image
          alt="Trailer attached to building with satellite on roof"
          width="3982"
          height="2351"
          transform="matrix(.48 0 0 .48 130.08 397.44)"
          xlinkHref={FlCty02}
        />
      </g>
      <NumberG active={active} id="number">
        <line
          x1="708.68"
          y1="788.38"
          x2="708.68"
          y2="837.26"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="5"
          stroke="url(#linear-gradient-3)"
        />
        <circle cx="708.68" cy="750.21" r="38.6" fill="#202737" />
        <path
          d="M452.57,817v-.19c-2.27-1.71-3.94-3.84-3.94-7,0-5,3.94-8.11,9.4-8.11s9,3.2,9,8.06a7.93,7.93,0,0,1-3.85,6.44v.19c2.83,1.53,5.1,3.8,5.1,7.69,0,4.63-4.17,8.15-10.43,8.15-5.88,0-10.23-3.29-10.23-8.06C447.57,820.6,449.79,818.43,452.57,817Zm5.37,10.56c2.27,0,3.94-1.21,3.94-3.66,0-2.6-2.5-3.57-6.21-5.14a6.58,6.58,0,0,0-2.27,4.67C453.4,826,455.49,827.51,457.94,827.51Zm3.52-17.28c0-2.27-1.34-3.8-3.56-3.8a3.11,3.11,0,0,0-3.29,3.38c0,2.41,2,3.57,5.05,4.73A6.63,6.63,0,0,0,461.46,810.23Z"
          transform="translate(250.71 -65.73)"
          fill="#fff"
        />
      </NumberG>
    </BaseG>
  </Scroll>
);

const VehicleGroup7 = ({
  active,
  dispatchCurrentVehicle,
  vehicleNum,
  dispatchIsScrolling,
}) => (
  <Scroll
    type="id"
    element={`city-card-${vehicleNum}`}
    key={`city-card-${vehicleNum}`}
    scrollFunc={getOffset}
    dispatchIsScrolling={dispatchIsScrolling}
    dispatchCurrentVehicle={dispatchCurrentVehicle}
    vehicleNum={vehicleNum}
  >
    <BaseG active={active} className="item" id="item7">
      <g clipPath="url(#clip-path-3)">
        <image
          alt="Trailer containing hazmat suits"
          width="4829"
          height="3202"
          transform="matrix(.48 0 0 .48 65.28 210.72)"
          xlinkHref={FlCty03}
        />
      </g>
      <NumberG active={active} id="number">
        <line
          x1="1101.02"
          y1="785.08"
          x2="1101.02"
          y2="827.9"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="5"
          stroke="url(#linear-gradient-4)"
        />
        <circle cx="1101.02" cy="746.91" r="38.6" fill="#202737" />
        <path
          d="M853.2,805.7H840V800h20.48v4.17c-6.81,8.24-7.78,13.76-8.29,25.25h-6.86C845.89,819.6,847.65,813.39,853.2,805.7Z"
          transform="translate(250.71 -65.73)"
          fill="#fff"
        />
      </NumberG>
    </BaseG>
  </Scroll>
);

const VehicleGroup6 = ({
  active,
  dispatchCurrentVehicle,
  vehicleNum,
  dispatchIsScrolling,
}) => (
  <Scroll
    type="id"
    element={`city-card-${vehicleNum}`}
    key={`city-card-${vehicleNum}`}
    scrollFunc={getOffset}
    dispatchIsScrolling={dispatchIsScrolling}
    dispatchCurrentVehicle={dispatchCurrentVehicle}
    vehicleNum={vehicleNum}
  >
    <BaseG active={active} className="item" id="item6">
      <g clipPath="url(#clip-path-4)">
        <image
          alt="Trucks with satellites providing extra coverage"
          width="3958"
          height="2536"
          transform="matrix(.48 0 0 .48 187.68 397.44)"
          xlinkHref={FlCty04}
        />
      </g>
      <NumberG active={active} id="number">
        <line
          x1="1669.58"
          y1="1201.66"
          x2="1669.58"
          y2="1281.55"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="5"
          stroke="url(#linear-gradient-5)"
        />
        <circle cx="1669.58" cy="1163.48" r="38.6" fill="#202737" />
        <path
          d="M1425.33,1222.58a6.72,6.72,0,0,0-4.59-2.09c-3.24,0-5.83,2.32-6.06,9.17a8.26,8.26,0,0,1,5.88-3.1c5,0,8.75,2.87,8.75,9.08a9.46,9.46,0,0,1-9.77,9.87c-5.7,0-11.12-4.26-11.12-14.6,0-11,5.7-15.93,11.91-15.93a11.7,11.7,0,0,1,8.57,3.52Zm-2.22,13.06c0-3.1-1.63-4.26-3.85-4.26-1.48,0-3.1.79-4.45,2.92.61,4.63,2.55,6.11,4.59,6.11S1423.11,1239,1423.11,1235.64Z"
          transform="translate(250.71 -65.73)"
          fill="#fff"
        />
      </NumberG>
    </BaseG>
  </Scroll>
);

const VehicleGroup5 = ({
  active,
  dispatchCurrentVehicle,
  vehicleNum,
  dispatchIsScrolling,
}) => (
  <Scroll
    type="id"
    element={`city-card-${vehicleNum}`}
    key={`city-card-${vehicleNum}`}
    scrollFunc={getOffset}
    dispatchIsScrolling={dispatchIsScrolling}
    dispatchCurrentVehicle={dispatchCurrentVehicle}
    vehicleNum={vehicleNum}
  >
    <BaseG active={active} className="item" id="item5">
      <g clipPath="url(#clip-path-5)">
        <image
          alt="Group of drones"
          width="4253"
          height="2695"
          transform="matrix(.48 0 0 .48 0 232.32)"
          xlinkHref={FlCty05}
        />
      </g>
      <NumberG active={active} id="number">
        <line
          x1="1046.7"
          y1="583.44"
          x2="1046.7"
          y2="639.69"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="5"
          stroke="url(#linear-gradient-6)"
        />
        <circle cx="1046.7" cy="545.27" r="38.6" fill="#202737" />
        <path
          d="M788.77,618.86a9.45,9.45,0,0,0,6.34,2.92c3,0,5-1.58,5-4.59s-1.9-4.54-4.63-4.54a6.93,6.93,0,0,0-4.36,1.49L788,612.19l.83-14.87h16.68v5.74h-10.8l-.51,5.52a7.41,7.41,0,0,1,3.29-.7c5.05,0,9.36,2.87,9.36,9.13,0,6.53-5,10.28-10.79,10.28a14,14,0,0,1-10.38-4.12Z"
          transform="translate(250.71 -65.73)"
          fill="#fff"
        />
      </NumberG>
    </BaseG>
  </Scroll>
);

const VehicleGroup4 = ({
  active,
  dispatchCurrentVehicle,
  vehicleNum,
  dispatchIsScrolling,
}) => (
  <Scroll
    type="id"
    element={`city-card-${vehicleNum}`}
    key={`city-card-${vehicleNum}`}
    scrollFunc={getOffset}
    dispatchIsScrolling={dispatchIsScrolling}
    dispatchCurrentVehicle={dispatchCurrentVehicle}
    vehicleNum={vehicleNum}
  >
    <BaseG active={active} className="item" id="item4">
      <NumberG active={active} id="number">
        <line
          x1="1726.12"
          y1="477.82"
          x2="1726.12"
          y2="580.25"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="5"
          stroke="url(#linear-gradient-7)"
        />
        <circle cx="1726.12" cy="439.65" r="38.6" fill="#202737" />
        <path
          d="M1484.41,514.08H1481v7h-6.35v-7h-12.74V509.4l10.75-17.7H1481v17.19h3.38Zm-9.73-5.19v-4.77c0-1.9.19-4.73.28-6.58h-.18c-.74,1.62-1.58,3.29-2.41,5l-3.89,6.39Z"
          transform="translate(250.71 -65.73)"
          fill="#fff"
        />
      </NumberG>
      <g clipPath="url(#clip-path-6)">
        <image
          alt="Satellites set up to display microwave technologies in action"
          width="4829"
          height="3202"
          transform="matrix(.48 0 0 .48 65.28 210.72)"
          xlinkHref={FlCty06}
        />
      </g>
    </BaseG>
  </Scroll>
);

const VehicleGroup3 = ({
  active,
  dispatchCurrentVehicle,
  vehicleNum,
  dispatchIsScrolling,
}) => (
  <Scroll
    type="id"
    element={`city-card-${vehicleNum}`}
    key={`city-card-${vehicleNum}`}
    scrollFunc={getOffset}
    dispatchIsScrolling={dispatchIsScrolling}
    dispatchCurrentVehicle={dispatchCurrentVehicle}
    vehicleNum={vehicleNum}
  >
    <BaseG
      active={active}
      className="item"
      id="item3"
      data-name="Portable Generators"
    >
      <g clipPath="url(#clip-path-7)">
        <image
          alt="Group of portable generators"
          width="4829"
          height="3202"
          transform="matrix(.48 0 0 .48 65.28 210.72)"
          xlinkHref={FlCty07}
        />
      </g>
      <NumberG active={active} id="number">
        <line
          x1="1409.64"
          y1="720.67"
          x2="1409.64"
          y2="778.97"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="5"
          stroke="url(#linear-gradient-8)"
        />
        <circle cx="1409.64" cy="682.5" r="38.6" fill="#202737" />
        <path
          d="M1150.75,756a9.29,9.29,0,0,0,6.44,3c2.87,0,4.77-1.25,4.77-3.48,0-2.59-1.53-4.21-7.92-4.21V746.5c5.28,0,6.94-1.58,6.94-3.94,0-2-1.29-3.24-3.61-3.24-2.08,0-3.66,1-5.51,2.59l-3.43-4.17a13.85,13.85,0,0,1,9.27-3.75c6.06,0,10.14,2.92,10.14,8.06,0,3.06-1.76,5.19-4.91,6.53v.19c3.38,1,5.84,3.38,5.84,7.18,0,5.47-5,8.57-10.94,8.57-4.77,0-8.1-1.67-10.23-4.17Z"
          transform="translate(250.71 -65.73)"
          fill="#fff"
        />
      </NumberG>
    </BaseG>
  </Scroll>
);

const VehicleGroup2 = ({
  active,
  dispatchCurrentVehicle,
  vehicleNum,
  dispatchIsScrolling,
}) => (
  <Scroll
    type="id"
    element={`city-card-${vehicleNum}`}
    key={`city-card-${vehicleNum}`}
    scrollFunc={getOffset}
    dispatchIsScrolling={dispatchIsScrolling}
    dispatchCurrentVehicle={dispatchCurrentVehicle}
    vehicleNum={vehicleNum}
  >
    <BaseG
      active={active}
      className="item"
      id="item2"
      data-name="CELL ON WHEELS"
    >
      <g clipPath="url(#clip-path-8)">
        <image
          alt="Truck with satellite that is providing extra coverage"
          width="3862"
          height="3179"
          transform="translate(187.68) scale(.48)"
          xlinkHref={FlCty08}
        />
      </g>
      <NumberG active={active} id="number">
        <line
          x1="1435.36"
          y1="428.41"
          x2="1435.36"
          y2="588.24"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="5"
          stroke="url(#linear-gradient-9)"
        />
        <circle cx="1435.36" cy="390.24" r="38.6" fill="#202737" />
        <path
          d="M1174,466.82c7.5-7.09,12.78-12.14,12.78-16.31,0-2.87-1.62-4.45-4.17-4.45-2.13,0-3.75,1.44-5.23,3l-3.71-3.66c2.92-3.11,5.65-4.68,9.87-4.68,5.79,0,9.73,3.7,9.73,9.35,0,5-4.64,10.24-9.41,15.25a44.44,44.44,0,0,1,4.91-.37h5.93v5.74H1174Z"
          transform="translate(250.71 -65.73)"
          fill="#fff"
        />
      </NumberG>
    </BaseG>
  </Scroll>
);

const VehicleGroup1 = ({
  active,
  dispatchCurrentVehicle,
  vehicleNum,
  dispatchIsScrolling,
}) => (
  <Scroll
    type="id"
    element={`city-card-${vehicleNum}`}
    key={`city-card-${vehicleNum}`}
    scrollFunc={getOffset}
    dispatchIsScrolling={dispatchIsScrolling}
    dispatchCurrentVehicle={dispatchCurrentVehicle}
    vehicleNum={vehicleNum}
  >
    <BaseG
      active={active}
      className="item visible"
      id="item1"
      data-name="Command-Trailer"
    >
      <g clipPath="url(#clip-path-9)">
        <image
          alt="Two trailers representing mobile headquarters for disaster recovery crews"
          width="3958"
          height="2662"
          transform="matrix(.48 0 0 .48 187.68 397.44)"
          xlinkHref={FlCty09}
        />
      </g>
      <NumberG active={active} id="number">
        <line
          x1="798.27"
          y1="1081.34"
          x2="798.27"
          y2="1193.12"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="5"
          stroke="url(#linear-gradient-10)"
        />
        <circle cx="798.27" cy="1043.17" r="38.6" fill="#202737" />
        <path
          d="M538.46,1118.12h6.39v-17h-5.51v-4.22a20.55,20.55,0,0,0,7.32-2.68h5v23.9h5.51v5.51H538.46Z"
          transform="translate(250.71 -65.73)"
          fill="#fff"
        />
      </NumberG>
    </BaseG>
  </Scroll>
);

export const vehicles = [
  VehicleGroup1,
  VehicleGroup2,
  VehicleGroup3,
  VehicleGroup4,
  VehicleGroup5,
  VehicleGroup6,
  VehicleGroup7,
  VehicleGroup8,
]
export default function Component({ children }) { 
  return(
    <BaseSVG
      id="floatingcitySVG"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="100 -200 1900 1800"
    >
      <defs>
        <linearGradient
          id="New_Gradient_Swatch_copy_5"
          data-name="New Gradient Swatch copy 5"
          x1="250.69"
          y1="229.06"
          x2="604.09"
          y2="229.06"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#f5f6fa" />
          <stop offset="1" stopColor="#d5f4f7" />
        </linearGradient>
        <linearGradient
          id="New_Gradient_Swatch_copy_5-2"
          x1="250.69"
          y1="394.07"
          x2="604.09"
          y2="394.07"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-3"
          x1="250.69"
          y1="552.71"
          x2="604.09"
          y2="552.71"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-4"
          x1="256.9"
          y1="229.06"
          x2="662.09"
          y2="229.06"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-5"
          x1="256.9"
          y1="420.51"
          x2="662.09"
          y2="420.51"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-6"
          x1="256.9"
          y1="604.5"
          x2="662.09"
          y2="604.5"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-7"
          x1="248.21"
          y1="229.06"
          x2="720.09"
          y2="229.06"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-8"
          x1="248.21"
          y1="453.86"
          x2="720.09"
          y2="453.86"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-9"
          x1="248.21"
          y1="671.2"
          x2="720.09"
          y2="671.2"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-10"
          x1="333.93"
          y1="229.06"
          x2="778.1"
          y2="229.06"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-11"
          x1="333.93"
          y1="439.76"
          x2="778.1"
          y2="439.76"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-12"
          x1="333.93"
          y1="643.49"
          x2="778.1"
          y2="643.49"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-13"
          x1="332.68"
          y1="229.06"
          x2="836.1"
          y2="229.06"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-14"
          x1="332.68"
          y1="469.35"
          x2="836.1"
          y2="469.35"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-15"
          x1="332.68"
          y1="702.73"
          x2="836.1"
          y2="702.73"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-16"
          x1="440.76"
          y1="229.06"
          x2="894.1"
          y2="229.06"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-17"
          x1="440.76"
          y1="444.42"
          x2="894.1"
          y2="444.42"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-18"
          x1="440.76"
          y1="652.66"
          x2="894.1"
          y2="652.66"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-19"
          x1="473.06"
          y1="229.06"
          x2="952.11"
          y2="229.06"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-20"
          x1="473.06"
          y1="457.5"
          x2="952.11"
          y2="457.5"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-21"
          x1="473.06"
          y1="678.36"
          x2="952.11"
          y2="678.36"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="linear-gradient"
          x1="520.19"
          y1="140.88"
          x2="520.19"
          y2="325.93"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d5f4f7" />
          <stop offset="0.64" stopColor="#f5f6fa" />
          <stop offset="1" stopColor="#7de9f1" />
        </linearGradient>
        <linearGradient
          id="New_Gradient_Swatch_copy_5-22"
          x1="957.09"
          y1="149"
          x2="1325.64"
          y2="149"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-23"
          x1="957.09"
          y1="321.75"
          x2="1325.64"
          y2="321.75"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-24"
          x1="957.09"
          y1="487.81"
          x2="1325.64"
          y2="487.81"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-25"
          x1="1037.1"
          y1="149"
          x2="1393.23"
          y2="149"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-26"
          x1="1037.1"
          y1="315.4"
          x2="1393.23"
          y2="315.4"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-27"
          x1="1037.1"
          y1="475.38"
          x2="1393.23"
          y2="475.38"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-28"
          x1="1112.14"
          y1="149"
          x2="1460.82"
          y2="149"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-29"
          x1="1112.14"
          y1="312.34"
          x2="1460.82"
          y2="312.34"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-30"
          x1="1112.14"
          y1="467.93"
          x2="1460.82"
          y2="467.93"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-31"
          x1="1147.43"
          y1="149"
          x2="1528.41"
          y2="149"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-32"
          x1="1147.43"
          y1="328.09"
          x2="1528.41"
          y2="328.09"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-33"
          x1="1147.43"
          y1="500.23"
          x2="1528.41"
          y2="500.23"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-34"
          x1="1199.84"
          y1="149"
          x2="1595.99"
          y2="149"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-35"
          x1="1199.84"
          y1="335.84"
          x2="1595.99"
          y2="335.84"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-36"
          x1="1199.84"
          y1="515.41"
          x2="1595.99"
          y2="515.41"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-37"
          x1="1263.97"
          y1="149"
          x2="1663.58"
          y2="149"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-38"
          x1="1263.97"
          y1="337.6"
          x2="1663.58"
          y2="337.6"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-39"
          x1="1263.97"
          y1="518.86"
          x2="1663.58"
          y2="518.86"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-40"
          x1="1345.22"
          y1="149"
          x2="1731.17"
          y2="149"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-41"
          x1="1345.22"
          y1="330.63"
          x2="1731.17"
          y2="330.63"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-42"
          x1="1345.22"
          y1="505.2"
          x2="1731.17"
          y2="505.2"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-43"
          x1="1394.88"
          y1="149"
          x2="1798.76"
          y2="149"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-44"
          x1="1394.88"
          y1="339.78"
          x2="1798.76"
          y2="339.78"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-45"
          x1="1394.88"
          y1="523.13"
          x2="1798.76"
          y2="523.13"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-46"
          x1="1447.06"
          y1="149"
          x2="1866.34"
          y2="149"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-47"
          x1="1447.06"
          y1="347.03"
          x2="1866.34"
          y2="347.03"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="New_Gradient_Swatch_copy_5-48"
          x1="1447.06"
          y1="538.54"
          x2="1866.34"
          y2="538.54"
          xlinkHref="#New_Gradient_Swatch_copy_5"
        />
        <linearGradient
          id="linear-gradient-2"
          x1="1322.46"
          y1="37.44"
          x2="1322.46"
          y2="253.06"
          xlinkHref="#linear-gradient"
        />
        <clipPath id="clip-path" transform="translate(250.71 -65.73)">
          <polyline
            points="1667.32 789.62 1753.17 970.19 1762.05 1141.89 1723.57 1375.75 1451.22 1571.12 1027.91 1677.69 530.59 1674.73 148.72 1506 -2.25 1310.62 -58.5 922.83 62.87 603.12 456.58 452.15 826.61 348.54 956.86 410.71 980.54 271.58 1158.16 295.26 1267.69 425.51 1504.51 443.27 1747.25 620.89 1667.32 789.62"
            fill="none"
          />
        </clipPath>
        <clipPath id="clip-path-2" transform="translate(250.71 -65.73)">
          <polygon
            points="374.41 577.44 192.93 671.71 177.61 585.68 91.58 617.5 88.05 729.46 27.95 758.91 -5.05 875.58 -2.4 998.62 1.57 1219.04 45.26 1306.41 111.61 1369.35 427.44 1125.41 573.56 1039.38 706.73 941.57 743.26 829.62 592.42 727.1 533.5 649.32 374.41 577.44"
            fill="none"
          />
        </clipPath>
        <linearGradient
          id="linear-gradient-3"
          x1="708.68"
          y1="837.26"
          x2="708.68"
          y2="788.38"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#7de9f1" stopOpacity="0" />
          <stop offset="0.29" stopColor="#5ba2ad" stopOpacity="0.36" />
          <stop offset="0.86" stopColor="#202737" />
        </linearGradient>
        <clipPath id="clip-path-3" transform="translate(250.71 -65.73)">
          <polygon
            points="754.38 868.72 845.88 824.95 976.5 907.83 1018.27 955.57 1014.29 1039.78 1047.84 1070.3 1105.13 1127.96 1071.31 1212.17 813.39 1179.02 599.69 1101.77 574.69 1030.5 634.37 970.16 738.46 972.81 754.38 868.72"
            fill="none"
          />
        </clipPath>
        <linearGradient
          id="linear-gradient-4"
          x1="1101.02"
          y1="827.9"
          x2="1101.02"
          y2="785.08"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#7de9f1" stopOpacity="0" />
          <stop offset="1" stopColor="#202737" />
        </linearGradient>
        <clipPath id="clip-path-4" transform="translate(250.71 -65.73)">
          <path
            d="M1432.86,922.2,1118,1124.08l-16.61,80.59-84.74,108.83,75,165.14a169.82,169.82,0,0,0,191.2,95.59l58-12.8L1455.19,1493l100.73-46.44,103.4-101.48,47.39-90,19.14-65.58,1-117.28L1620.07,944.4Z"
            fill="none"
          />
        </clipPath>
        <linearGradient
          id="linear-gradient-5"
          x1="1669.58"
          y1="1281.55"
          x2="1669.58"
          y2="1201.66"
          xlinkHref="#linear-gradient-4"
        />
        <clipPath id="clip-path-5" transform="translate(250.71 -65.73)">
          <polygon
            points="509.51 382.24 764.59 376.57 890.56 486.7 921.41 511.35 848.14 665.82 818.68 767.16 757.66 827.52 698.46 804.85 562.96 703.53 520.71 626.42 429.96 592.11 464.16 551.03 509.51 382.24"
            fill="none"
          />
        </clipPath>
        <linearGradient
          id="linear-gradient-6"
          x1="1046.7"
          y1="639.69"
          x2="1046.7"
          y2="583.44"
          xlinkHref="#linear-gradient-4"
        />
        <linearGradient
          id="linear-gradient-7"
          x1="1726.12"
          y1="580.25"
          x2="1726.12"
          y2="477.82"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#7de9f1" stopOpacity="0" />
          <stop offset="0.88" stopColor="#202737" />
        </linearGradient>
        <clipPath id="clip-path-6" transform="translate(250.71 -65.73)">
          <path
            d="M1345.49,464.06l212,76.54,133.07,107.16-41.22,98.92,56.52,134.24-55.34,78.9-112.37-8.11,13.1-10.59-3.54-4.37-14.75,10.81-18.29-12.47h-15l-9.8,5.94c-49.07-14.89-140.73-34.2-143.2-34.2-3.53,0-167.22-118.94-167.22-118.94l-11.38-82.83,29-24.33,56.52-33,5.89-67.12-28.26-41.22Z"
            fill="none"
          />
        </clipPath>
        <clipPath id="clip-path-7" transform="translate(250.71 -65.73)">
          <polygon
            points="1096.67 763.88 1052.02 793.89 1048.13 785.8 1038.75 786.45 1037.29 802.3 1032.27 805.38 1009.6 817.65 989 849.88 981.09 874.8 961.74 899.38 959.04 910.03 979.29 921.77 979.53 932.43 999.18 944.3 1002.41 959.99 1003.37 1042.36 1066.28 1112.79 1154.25 1114.29 1225.68 1069.68 1257.01 1084.47 1273.9 1071.89 1273.71 1041.45 1364.43 987.45 1359.52 941.11 1343.42 893 1237.3 843.59 1191.75 795.76 1096.67 763.88"
            fill="none"
          />
        </clipPath>
        <linearGradient
          id="linear-gradient-8"
          x1="1409.64"
          y1="778.97"
          x2="1409.64"
          y2="720.67"
          xlinkHref="#linear-gradient-4"
        />
        <clipPath id="clip-path-8" transform="translate(250.71 -65.73)">
          <path
            d="M977.75,388.71l52.61,52.61s-73.07,54.56-77.94,56.51-69.17,78.91-69.17,78.91l-45.79,94.51-37.68,97,113.49,87,112.41-11.38,1.35-34.13,9.64-6.47,1.65-16.71,9.49-1.21,3.76,8.73,52.69-36.58,70.56-46.57,66.1-41.16s34.72-17.57,31.68-44.65,12.72-41.9,12.72-41.9l-77.64-50.27,29.23-74-76-85.73-12.67-58.46-114.67-16.11-18,7.46Z"
            fill="none"
          />
        </clipPath>
        <linearGradient
          id="linear-gradient-9"
          x1="1435.36"
          y1="588.24"
          x2="1435.36"
          y2="428.41"
          xlinkHref="#linear-gradient-4"
        />
        <clipPath id="clip-path-9" transform="translate(250.71 -65.73)">
          <path
            d="M313.94,1179.82l153.58-85.6,54.13,46.57L645,1081.63,964.75,1241.5l112,173.72-56.65,143.51-186.3,66.71-216.52-8.81s-237.92-68-250.51-70.49-178.75-107-178.75-107l3.77-112,112-90.63Z"
            fill="none"
          />
        </clipPath>
        <linearGradient
          id="linear-gradient-10"
          x1="798.27"
          y1="1193.12"
          x2="798.27"
          y2="1081.34"
          xlinkHref="#linear-gradient-4"
        />
      </defs>
      <CloudG anim={floatingCloud1} id="Cloud1">
        <g id="_Group_" data-name="&lt;Group&gt;">
          <g
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
          >
            <line
              x1="601.59"
              y1="216.69"
              x2="576.84"
              y2="241.44"
              stroke="url(#New_Gradient_Swatch_copy_5)"
            />
            <line
              x1="564.12"
              y1="254.16"
              x2="284.3"
              y2="533.98"
              strokeDasharray="62.96 17.99"
              stroke="url(#New_Gradient_Swatch_copy_5-2)"
            />
            <line
              x1="277.94"
              y1="540.34"
              x2="253.19"
              y2="565.09"
              stroke="url(#New_Gradient_Swatch_copy_5-3)"
            />
            <line
              x1="659.59"
              y1="216.69"
              x2="634.84"
              y2="241.44"
              stroke="url(#New_Gradient_Swatch_copy_5-4)"
            />
            <line
              x1="619.92"
              y1="256.36"
              x2="291.61"
              y2="584.67"
              strokeDasharray="73.87 21.1"
              stroke="url(#New_Gradient_Swatch_copy_5-5)"
            />
            <line
              x1="284.15"
              y1="592.13"
              x2="259.4"
              y2="616.88"
              stroke="url(#New_Gradient_Swatch_copy_5-6)"
            />
            <line
              x1="717.59"
              y1="216.69"
              x2="692.85"
              y2="241.44"
              stroke="url(#New_Gradient_Swatch_copy_5-7)"
            />
            <line
              x1="677.94"
              y1="256.35"
              x2="282.91"
              y2="651.37"
              strokeDasharray="73.78 21.08"
              stroke="url(#New_Gradient_Swatch_copy_5-8)"
            />
            <line
              x1="275.46"
              y1="658.83"
              x2="250.71"
              y2="683.58"
              stroke="url(#New_Gradient_Swatch_copy_5-9)"
            />
            <g>
              <line
                x1="775.6"
                y1="216.69"
                x2="750.85"
                y2="241.44"
                stroke="url(#New_Gradient_Swatch_copy_5-10)"
              />
              <line
                x1="736.93"
                y1="255.36"
                x2="368.13"
                y2="624.15"
                strokeDasharray="68.89 19.68"
                stroke="url(#New_Gradient_Swatch_copy_5-11)"
              />
              <line
                x1="361.17"
                y1="631.11"
                x2="336.43"
                y2="655.86"
                stroke="url(#New_Gradient_Swatch_copy_5-12)"
              />
            </g>
            <g>
              <line
                x1="833.6"
                y1="216.69"
                x2="808.85"
                y2="241.44"
                stroke="url(#New_Gradient_Swatch_copy_5-13)"
              />
              <line
                x1="795.04"
                y1="255.25"
                x2="366.84"
                y2="683.45"
                strokeDasharray="68.37 19.53"
                stroke="url(#New_Gradient_Swatch_copy_5-14)"
              />
              <line
                x1="359.93"
                y1="690.36"
                x2="335.18"
                y2="715.11"
                stroke="url(#New_Gradient_Swatch_copy_5-15)"
              />
            </g>
            <g>
              <line
                x1="891.6"
                y1="216.69"
                x2="866.86"
                y2="241.44"
                stroke="url(#New_Gradient_Swatch_copy_5-16)"
              />
              <line
                x1="852.61"
                y1="255.68"
                x2="475.13"
                y2="633.16"
                strokeDasharray="70.51 20.14"
                stroke="url(#New_Gradient_Swatch_copy_5-17)"
              />
              <line
                x1="468.01"
                y1="640.28"
                x2="443.26"
                y2="665.03"
                stroke="url(#New_Gradient_Swatch_copy_5-18)"
              />
            </g>
            <g>
              <line
                x1="949.61"
                y1="216.69"
                x2="924.86"
                y2="241.44"
                stroke="url(#New_Gradient_Swatch_copy_5-19)"
              />
              <line
                x1="909.7"
                y1="256.6"
                x2="507.89"
                y2="658.41"
                strokeDasharray="75.05 21.44"
                stroke="url(#New_Gradient_Swatch_copy_5-20)"
              />
              <line
                x1="500.31"
                y1="665.99"
                x2="475.56"
                y2="690.74"
                stroke="url(#New_Gradient_Swatch_copy_5-21)"
              />
            </g>
          </g>
          <path
            d="M799.46,281c-25.48-35.3-67.45-49.71-106-32.22-2.24,1-4.37,2.23-6.51,3.42-32.92-65.77-101.25-96-163.15-67.85-27.83,12.64-50.12,35.17-65.19,63a113.21,113.21,0,0,0-75.16,7.05,128.12,128.12,0,0,0-22.75,13.41c-30.61-15.27-65.94-17.14-99.39-1.95a126,126,0,0,0-19.53,11.09c-3.6,2.48-2.16,9.09,2,9.12l552.08,4.23C799.91,290.27,802.09,284.61,799.46,281Z"
            transform="translate(250.71 -65.73)"
            fill="url(#linear-gradient)"
          />
        </g>
      </CloudG>
      <CloudG anim={floatingCloud2} id="Cloud2">
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="5"
        >
          <line
            x1="1323.14"
            y1="136.63"
            x2="1298.4"
            y2="161.38"
            stroke="url(#New_Gradient_Swatch_copy_5-22)"
          />
          <line
            x1="1285.03"
            y1="174.74"
            x2="991.02"
            y2="468.75"
            strokeDasharray="66.15 18.9"
            stroke="url(#New_Gradient_Swatch_copy_5-23)"
          />
          <line
            x1="984.34"
            y1="475.43"
            x2="959.59"
            y2="500.18"
            stroke="url(#New_Gradient_Swatch_copy_5-24)"
          />
          <line
            x1="1390.73"
            y1="136.63"
            x2="1365.98"
            y2="161.38"
            stroke="url(#New_Gradient_Swatch_copy_5-25)"
          />
          <line
            x1="1353.15"
            y1="174.21"
            x2="1070.77"
            y2="456.59"
            strokeDasharray="63.53 18.15"
            stroke="url(#New_Gradient_Swatch_copy_5-26)"
          />
          <line
            x1="1064.35"
            y1="463.01"
            x2="1039.6"
            y2="487.76"
            stroke="url(#New_Gradient_Swatch_copy_5-27)"
          />
          <line
            x1="1458.32"
            y1="136.63"
            x2="1433.57"
            y2="161.38"
            stroke="url(#New_Gradient_Swatch_copy_5-28)"
          />
          <line
            x1="1418.09"
            y1="176.86"
            x2="1147.13"
            y2="447.81"
            strokeDasharray="76.64 21.9"
            stroke="url(#New_Gradient_Swatch_copy_5-29)"
          />
          <line
            x1="1139.39"
            y1="455.56"
            x2="1114.64"
            y2="480.3"
            stroke="url(#New_Gradient_Swatch_copy_5-30)"
          />
          <g>
            <line
              x1="1525.91"
              y1="136.63"
              x2="1501.16"
              y2="161.38"
              stroke="url(#New_Gradient_Swatch_copy_5-31)"
            />
            <line
              x1="1487.27"
              y1="175.27"
              x2="1181.62"
              y2="480.91"
              strokeDasharray="68.77 19.65"
              stroke="url(#New_Gradient_Swatch_copy_5-32)"
            />
            <line
              x1="1174.68"
              y1="487.86"
              x2="1149.93"
              y2="512.6"
              stroke="url(#New_Gradient_Swatch_copy_5-33)"
            />
          </g>
          <g>
            <line
              x1="1593.49"
              y1="136.63"
              x2="1568.75"
              y2="161.38"
              stroke="url(#New_Gradient_Swatch_copy_5-34)"
            />
            <line
              x1="1554.21"
              y1="175.91"
              x2="1234.36"
              y2="495.76"
              strokeDasharray="71.96 20.56"
              stroke="url(#New_Gradient_Swatch_copy_5-35)"
            />
            <line
              x1="1227.09"
              y1="503.03"
              x2="1202.34"
              y2="527.78"
              stroke="url(#New_Gradient_Swatch_copy_5-36)"
            />
          </g>
          <g>
            <line
              x1="1661.08"
              y1="136.63"
              x2="1636.33"
              y2="161.38"
              stroke="url(#New_Gradient_Swatch_copy_5-37)"
            />
            <line
              x1="1621.65"
              y1="176.06"
              x2="1298.56"
              y2="499.15"
              strokeDasharray="72.69 20.77"
              stroke="url(#New_Gradient_Swatch_copy_5-38)"
            />
            <line
              x1="1291.22"
              y1="506.49"
              x2="1266.47"
              y2="531.24"
              stroke="url(#New_Gradient_Swatch_copy_5-39)"
            />
          </g>
          <g>
            <line
              x1="1728.67"
              y1="136.63"
              x2="1703.92"
              y2="161.38"
              stroke="url(#New_Gradient_Swatch_copy_5-40)"
            />
            <line
              x1="1689.82"
              y1="175.48"
              x2="1379.52"
              y2="485.77"
              strokeDasharray="69.81 19.95"
              stroke="url(#New_Gradient_Swatch_copy_5-41)"
            />
            <line
              x1="1372.47"
              y1="492.82"
              x2="1347.72"
              y2="517.57"
              stroke="url(#New_Gradient_Swatch_copy_5-42)"
            />
          </g>
          <g>
            <line
              x1="1796.26"
              y1="136.63"
              x2="1771.51"
              y2="161.38"
              stroke="url(#New_Gradient_Swatch_copy_5-43)"
            />
            <line
              x1="1756.64"
              y1="176.24"
              x2="1429.56"
              y2="503.32"
              strokeDasharray="73.59 21.03"
              stroke="url(#New_Gradient_Swatch_copy_5-44)"
            />
            <line
              x1="1422.13"
              y1="510.75"
              x2="1397.38"
              y2="535.5"
              stroke="url(#New_Gradient_Swatch_copy_5-45)"
            />
          </g>
          <g>
            <line
              x1="1863.84"
              y1="136.63"
              x2="1839.09"
              y2="161.38"
              stroke="url(#New_Gradient_Swatch_copy_5-46)"
            />
            <line
              x1="1826.07"
              y1="174.4"
              x2="1480.82"
              y2="519.65"
              strokeDasharray="64.49 18.42"
              stroke="url(#New_Gradient_Swatch_copy_5-47)"
            />
            <line
              x1="1474.31"
              y1="526.16"
              x2="1449.56"
              y2="550.91"
              stroke="url(#New_Gradient_Swatch_copy_5-48)"
            />
          </g>
        </g>
        <path
          d="M1681.93,195.91a168.44,168.44,0,0,0-25.2-12.92,161.16,161.16,0,0,0-128.36,2.27A170,170,0,0,0,1499,169.64a160.67,160.67,0,0,0-97-8.22c-19.46-32.4-48.25-58.65-84.19-73.39-79.94-32.76-168.18,2.43-210.68,79.07-2.76-1.39-5.52-2.8-8.41-4-49.74-20.39-104-3.59-136.85,37.54-3.39,4.25-.57,10.85,4.61,10.81l712.94-4.92C1684.73,206.51,1686.59,198.81,1681.93,195.91Z"
          transform="translate(250.71 -65.73)"
          fill="url(#linear-gradient-2)"
        />
      </CloudG>
      <g clipPath="url(#clip-path)" id="City-Base">
        <image
          alt="City backdrop with grass, trees, and parking lot"
          width="4829"
          height="4009"
          transform="matrix(.48 0 0 .48 64.8 213.12)"
          xlinkHref={FlCty01}
        />
      </g>
      {children}
    </BaseSVG>
  )
}
