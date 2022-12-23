import React from 'react';
import styled from 'styled-components';
import { clamp } from 'lodash';

import globeImg from 'public/static/rotating-globe/rotating-globe.png';

const RotatingGlobe = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`;

const calcRotation = ({ position }) => clamp(position, 0, 3) * 90;

const GlobeImgContainer = styled.div`
  position: absolute;
  left: 0;
  top: 52.5%;
  width: 160%;
  height: 100%;
`;

const GlobeImg = styled.img.attrs(({ globePosition }) => ({
  style: { transform: `rotate(${calcRotation(globePosition)}deg)` },
}))`
  width: 100%;
  transition: transform 0.7s ease;
`;

export default function Component({  globePosition  }) {  
  return (
    <RotatingGlobe>
      <GlobeImgContainer>
        <GlobeImg src="/static/rotating-globe/rotating-globe.png" alt="" globePosition={globePosition} />
      </GlobeImgContainer>
    </RotatingGlobe>
  )
}
