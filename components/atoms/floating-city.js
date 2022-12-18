import React from 'react'
import styled, { css } from 'styled-components'
import Scroll from './../Scroll'

const BaseG = styled.g`
  opacity: 0;
  cursor: pointer;

  ${props =>
    props.active &&
    css`
      opacity: 1;
    `}
`

const getOffset = id => {
  const el = document.querySelector(`#${id}`)
  const windowHeight = window.innerHeight
  const elementHeight = el.clientHeight
  return -(windowHeight - elementHeight) / 2
}

const VehicleGroup1 = ({
  active,
  setCurrentVehicle,
  vehicleNum,
  setIsScrolling,
}) => {
  return (
    <Scroll
      type="id"
      element={`city-card-${vehicleNum}`}
      key={`city-card-${vehicleNum}`}
      scrollFunc={getOffset}
      setIsScrolling={setIsScrolling}
      setCurrentVehicle={setCurrentVehicle}
      vehicleNum={vehicleNum}
    >
      <BaseG active={active} transform="translate(282.000000, 257.000000)">
        <polygon
          id="Rectangle"
          fill="#CAEDFD"
          points="71 6 184 76 189 111 121 149 0 67 0 45"
        />
        <g id="Group-8-Copy" transform="translate(62.000000, 0.000000)">
          <g id="number">
            <circle
              id="Oval"
              stroke="#282828"
              strokeWidth="2.31"
              fill="#202737"
              cx="13"
              cy="13"
              r="13"
            />
            <text
              id="1"
              fontFamily="SourceSansPro-Bold, Source Sans Pro"
              fontSize="14.96"
              fontWeight="bold"
              line-spacing="15.015"
              letterSpacing="3.09173348"
              fill="#FFFFFF"
            >
              <tspan x="6.7826087" y="19.3620652">
                1
              </tspan>
            </text>
          </g>
        </g>
      </BaseG>
    </Scroll>
  )
}

const VehicleGroup2 = ({
  active,
  setCurrentVehicle,
  vehicleNum,
  setIsScrolling,
}) => (
  <Scroll
    type="id"
    scrollFunc={getOffset}
    element={`city-card-${vehicleNum}`}
    key={`city-card-${vehicleNum}`}
    setIsScrolling={setIsScrolling}
    setCurrentVehicle={setCurrentVehicle}
    vehicleNum={vehicleNum}
  >
    <BaseG active={active} transform="translate(416.000000, 31.000000)">
      <ellipse id="Oval" fill="#CAEDFD" cx="54.5" cy="79" rx="54.5" ry="66" />
      <g id="Group-8-Copy" transform="translate(42.000000, 0.000000)">
        <g id="number">
          <circle
            id="Oval"
            stroke="#282828"
            strokeWidth="2.31"
            fill="#202737"
            cx="13"
            cy="13"
            r="13"
          />
          <text
            id="2"
            fontFamily="SourceSansPro-Bold, Source Sans Pro"
            fontSize="14.96"
            fontWeight="bold"
            line-spacing="15.015"
            letterSpacing="3.09173348"
            fill="#FFFFFF"
          >
            <tspan x="6.7826087" y="19.3620652">
              2
            </tspan>
          </text>
        </g>
      </g>
    </BaseG>
  </Scroll>
)

const VehicleGroup3 = ({
  active,
  setCurrentVehicle,
  vehicleNum,
  setIsScrolling,
}) => (
  <Scroll
    type="id"
    scrollFunc={getOffset}
    element={`city-card-${vehicleNum}`}
    key={`city-card-${vehicleNum}`}
    setIsScrolling={setIsScrolling}
    setCurrentVehicle={setCurrentVehicle}
    vehicleNum={vehicleNum}
  >
    <BaseG active={active} transform="translate(361.000000, 170.000000)">
      <rect id="Rectangle" fill="#CAEDFD" x="0" y="12" width="65" height="65" />
      <g id="Group-8-Copy" transform="translate(24.000000, 0.000000)">
        <g id="number">
          <circle
            id="Oval"
            stroke="#282828"
            strokeWidth="2.31"
            fill="#202737"
            cx="13"
            cy="13"
            r="13"
          />
          <text
            id="3"
            fontFamily="SourceSansPro-Bold, Source Sans Pro"
            fontSize="14.96"
            fontWeight="bold"
            line-spacing="15.015"
            letterSpacing="3.09173348"
            fill="#FFFFFF"
          >
            <tspan x="6.7826087" y="19.3620652">
              3
            </tspan>
          </text>
        </g>
      </g>
    </BaseG>
  </Scroll>
)
const VehicleGroup4 = ({
  active,
  vehicleNum,
  setIsScrolling,
  setCurrentVehicle,
}) => (
  <Scroll
    type="id"
    scrollFunc={getOffset}
    element={`city-card-${vehicleNum}`}
    key={`city-card-${vehicleNum}`}
    setIsScrolling={setIsScrolling}
    setCurrentVehicle={setCurrentVehicle}
    vehicleNum={vehicleNum}
  >
    <BaseG active={active} transform="translate(228.000000, 97.000000)">
      <ellipse id="Oval" fill="#CAEDFD" cx="40" cy="48" rx="40" ry="35" />
      <g id="Group-8-Copy" transform="translate(35.000000, 0.000000)">
        <g id="number">
          <circle
            id="Oval"
            stroke="#282828"
            strokeWidth="2.31"
            fill="#202737"
            cx="13"
            cy="13"
            r="13"
          />
          <text
            id="4"
            fontFamily="SourceSansPro-Bold, Source Sans Pro"
            fontSize="14.96"
            fontWeight="bold"
            line-spacing="15.015"
            letterSpacing="3.09173348"
            fill="#FFFFFF"
          >
            <tspan x="6.7826087" y="19.3620652">
              4
            </tspan>
          </text>
        </g>
      </g>
    </BaseG>
  </Scroll>
)
const VehicleGroup5 = ({
  active,
  vehicleNum,
  setIsScrolling,
  setCurrentVehicle,
}) => (
  <Scroll
    type="id"
    scrollFunc={getOffset}
    element={`city-card-${vehicleNum}`}
    key={`city-card-${vehicleNum}`}
    setIsScrolling={setIsScrolling}
    setCurrentVehicle={setCurrentVehicle}
    vehicleNum={vehicleNum}
  >
    <BaseG active={active} transform="translate(320.000000, 33.000000)">
      <rect id="Rectangle" fill="#CAEDFD" x="0" y="13" width="65" height="65" />
      <g id="Group-8-Copy" transform="translate(19.000000, 0.000000)">
        <g id="number">
          <circle
            id="Oval"
            stroke="#282828"
            strokeWidth="2.31"
            fill="#202737"
            cx="13"
            cy="13"
            r="13"
          />
          <text
            id="5"
            fontFamily="SourceSansPro-Bold, Source Sans Pro"
            fontSize="14.96"
            fontWeight="bold"
            line-spacing="15.015"
            letterSpacing="3.09173348"
            fill="#FFFFFF"
          >
            <tspan x="6.7826087" y="19.3620652">
              5
            </tspan>
          </text>
        </g>
      </g>
    </BaseG>
  </Scroll>
)
const VehicleGroup6 = ({
  active,
  setCurrentVehicle,
  vehicleNum,
  setIsScrolling,
}) => (
  <Scroll
    type="id"
    scrollFunc={getOffset}
    element={`city-card-${vehicleNum}`}
    key={`city-card-${vehicleNum}`}
    setIsScrolling={setIsScrolling}
    setCurrentVehicle={setCurrentVehicle}
    vehicleNum={vehicleNum}
  >
    <BaseG active={active} transform="translate(527.000000, 229.000000)">
      <ellipse
        id="Oval"
        fill="#CAEDFD"
        cx="54.5"
        cy="57.5"
        rx="54.5"
        ry="47.5"
      />
      <g id="Group-8-Copy" transform="translate(40.000000, 0.000000)">
        <g id="number">
          <circle
            id="Oval"
            stroke="#282828"
            strokeWidth="2.31"
            fill="#202737"
            cx="13"
            cy="13"
            r="13"
          />
          <text
            id="6"
            fontFamily="SourceSansPro-Bold, Source Sans Pro"
            fontSize="14.96"
            fontWeight="bold"
            line-spacing="15.015"
            letterSpacing="3.09173348"
            fill="#FFFFFF"
          >
            <tspan x="6.7826087" y="19.3620652">
              6
            </tspan>
          </text>
        </g>
      </g>
    </BaseG>
  </Scroll>
)
const VehicleGroup7 = ({
  active,
  setCurrentVehicle,
  vehicleNum,
  setIsScrolling,
}) => (
  <Scroll
    type="id"
    scrollFunc={getOffset}
    element={`city-card-${vehicleNum}`}
    key={`city-card-${vehicleNum}`}
    setIsScrolling={setIsScrolling}
    setCurrentVehicle={setCurrentVehicle}
    vehicleNum={vehicleNum}
  >
    <BaseG active={active} transform="translate(527.000000, 122.000000)">
      <ellipse id="Oval" fill="#CAEDFD" cx="40" cy="48" rx="40" ry="35" />
      <g id="Group-8-Copy" transform="translate(34.000000, 0.000000)">
        <g id="number">
          <circle
            id="Oval"
            stroke="#282828"
            strokeWidth="2.31"
            fill="#202737"
            cx="13"
            cy="13"
            r="13"
          />
          <text
            id="7"
            fontFamily="SourceSansPro-Bold, Source Sans Pro"
            fontSize="14.96"
            fontWeight="bold"
            line-spacing="15.015"
            letterSpacing="3.09173348"
            fill="#FFFFFF"
          >
            <tspan x="6.7826087" y="19.3620652">
              7
            </tspan>
          </text>
        </g>
      </g>
    </BaseG>
  </Scroll>
)

const VehicleGroup8 = ({
  active,
  setCurrentVehicle,
  vehicleNum,
  setIsScrolling,
}) => (
  <Scroll
    type="id"
    scrollFunc={getOffset}
    element={`city-card-${vehicleNum}`}
    key={`city-card-${vehicleNum}`}
    setIsScrolling={setIsScrolling}
    setCurrentVehicle={setCurrentVehicle}
    vehicleNum={vehicleNum}
  >
    <BaseG active={active} transform="translate(139.000000, 170.000000)">
      <polygon
        id="Rectangle"
        fill="#CAEDFD"
        points="53.7195767 12 139.216931 58.5034965 143 81.7552448 91.5502646 107 0 52.5244755 0 37.9090909"
      />
      <g id="Group-8-Copy" transform="translate(39.000000, 0.000000)">
        <g id="number">
          <circle
            id="Oval"
            stroke="#282828"
            strokeWidth="2.31"
            fill="#202737"
            cx="13"
            cy="13"
            r="13"
          />
          <text
            id="8"
            fontFamily="SourceSansPro-Bold, Source Sans Pro"
            fontSize="14.96"
            fontWeight="bold"
            line-spacing="15.015"
            letterSpacing="3.09173348"
            fill="#FFFFFF"
          >
            <tspan x="6.7826087" y="19.3620652">
              8
            </tspan>
          </text>
        </g>
      </g>
    </BaseG>
  </Scroll>
)

export const Vehicles = [
  VehicleGroup1,
  VehicleGroup2,
  VehicleGroup3,
  VehicleGroup4,
  VehicleGroup5,
  VehicleGroup6,
  VehicleGroup7,
  VehicleGroup8,
]

export default ({ children }) => (
  <svg
    viewBox="0 0 809 498"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <title>placeholder-floating-cities</title>
    <desc>Created with Sketch.</desc>
    <g
      id="placeholder-floating-cities"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g id="BASE" transform="translate(108.000000, 79.000000)">
        <ellipse id="Oval" fill="#36275D" cx="296" cy="191" rx="296" ry="191" />
        <ellipse
          id="Oval"
          fill="#59C6D7"
          cx="294.5"
          cy="172"
          rx="294.5"
          ry="172"
        />
      </g>
      <g
        id="BASE-ITEMS"
        opacity="0.448521205"
        transform="translate(139.000000, 44.000000)"
        fill="#CAEDFD"
      >
        <polygon
          id="Rectangle"
          points="214 219 327 289 332 324 264 362 143 280 143 258"
        />
        <ellipse id="Oval" cx="331.5" cy="66" rx="54.5" ry="66" />
        <ellipse id="Oval" cx="442.5" cy="242.5" rx="54.5" ry="47.5" />
        <ellipse id="Oval" cx="428" cy="126" rx="40" ry="35" />
        <ellipse id="Oval" cx="129" cy="101" rx="40" ry="35" />
        <polygon
          id="Rectangle"
          points="53.7195767 138 139.216931 184.503497 143 207.755245 91.5502646 233 0 178.524476 0 163.909091"
        />
        <rect id="Rectangle" x="222" y="138" width="65" height="65" />
        <rect id="Rectangle" x="181" y="2" width="65" height="65" />
      </g>

      {children}
    </g>
  </svg>
)
