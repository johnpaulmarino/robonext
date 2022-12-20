import React from 'react';
import styled from 'styled-components';
import { clamp } from 'lodash';

import GatsbyGlobe from 'components/images/globe';
import GatsbyGlobeBackground from 'components/images/globeBackground';
import GatsbyGlobeForeground from 'components/images/globeForeground';

import { fgKeyframes, bgKeyframes } from 'components/molecules/rotating-globe-keyframes';

const RotatingGlobe = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`;

export const rotationAdjustments = [16, 18, 17, 19.5];

const calcRotation = ({ position }) =>
  clamp(position, 0, 3) * -90 + rotationAdjustments[position];

const GlobeImgContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0;
`;

const GlobeStyles = styled.div`
  position: absolute;
  width: 135%;
  bottom: -81vw;
  right: -60%;
`;

const GlobeImg = styled(GlobeStyles).attrs(({ globePosition }) => ({
  style: { transform: `rotate(${calcRotation(globePosition)}deg)` },
}))`
  transition: transform 0.7s ease;
`;

const GlobeBackground = styled(GlobeStyles)`
  animation: ${({ globePosition }) => bgKeyframes[globePosition.position]}
    1000ms forwards;
`;

const GlobeForeground = styled(GlobeStyles)`
  animation: ${({ globePosition }) => fgKeyframes[globePosition.position]}
    1000ms forwards;
`;

export default function Component({ globePosition }) {
  return (
    <RotatingGlobe>
      <GlobeImgContainer>
        <GlobeBackground globePosition={globePosition}>
          <GatsbyGlobeBackground />
        </GlobeBackground>
        <GlobeImg globePosition={globePosition}>
          <GatsbyGlobe />
        </GlobeImg>
        <GlobeForeground globePosition={globePosition}>
          <GatsbyGlobeForeground />
        </GlobeForeground>
      </GlobeImgContainer>
    </RotatingGlobe>
  )
}