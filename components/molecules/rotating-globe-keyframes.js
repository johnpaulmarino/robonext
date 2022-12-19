import { keyframes } from 'styled-components';

import { rotationAdjustments } from '@/components/molecules/rotating-globe-final';

const bgScene1 = keyframes`
  0% {
    opacity: 0;
    transform: rotate(0) translateX(30px);
  }
  25% {
    opacity: 0;
    transform: rotate(0) translateX(30px);
  }
  100% {
    transform: rotate(0deg) translateX(0px);
    opacity: 1;
  }`;

const bgScene2 = () => {
  const rotation = `${-80 + rotationAdjustments[1]}`

  return keyframes`
    0% {
      opacity: 0;
      transform: rotate(0) translateX(30px);
    }
    25% {
      opacity: 0;
      transform: rotate(${rotation}deg) translateX(30px);
    }
    100% {
      transform: rotate(${rotation}deg) translateX(0px);
      opacity: 1;
    }
`
}
const bgScene3 = () => {
  const rotation = -180 + rotationAdjustments[2]
  return keyframes`
    0% {
        opacity: 0;
        transform: rotate(${rotation}deg) translateX(-30px);
      }
      45% {
        opacity: 0;
        transform: rotate(${rotation}deg) translateX(-30px);
      }
      100% {
        transform: rotate(${rotation}deg) translateX(0px);
        opacity: 1;
      }
`
}
const bgScene4 = () => {
  return keyframes`
0% {
    opacity: 0;
    transform: rotate(${-220 + rotationAdjustments[3]}deg) translateX(-30px);
  }
  35% {
    opacity: 0;
    transform: rotate(${-270 + rotationAdjustments[3]}deg) translateX(-30px);
  }
  100% {
    transform: rotate(${-270 + rotationAdjustments[3]}deg) translateX(0px);
    opacity: 1;
  }
`
}

const fgScene1 = () => {
  const rotation = 0 + rotationAdjustments[0]
  return keyframes`
    0% {
        opacity: 0;
        transform: rotate(0) translateX(30px);
    }
    
    25% {
        opacity: 0;
        transform: rotate(0) translateX(30px);
    }
    
    100% {
        transform: rotate(${rotation}deg) translateX(0px);
        opacity: 1;
    }
`
}
const fgScene2 = () => {
  const rotation = -90 + rotationAdjustments[1]
  return keyframes`
    0% {
      opacity: 0;
      transform: rotate(${rotation}deg) scale(.9);
    }
    45% {
      opacity: 0;
      transform: rotate(${rotation}deg) scale(.9);
    }
    100% {
      transform: rotate(${rotation}deg) scale(1);
      opacity: 1;
    }
`
}
const fgScene3 = () => {
  const adjustment = rotationAdjustments[2]
  return keyframes`
0% {
    opacity: 0;
    transform: rotate(${-175 + adjustment}deg) translateX(-30px);
  }
  45% {
    opacity: 0;
    transform: rotate(${-175 + adjustment}deg) translateX(-30px);
  }
  100% {
    transform: rotate(${-181 + adjustment}deg) translateX(0px);
    opacity: 1;
  }
`
}

const fgScene4 = () => {
  const adjustment = rotationAdjustments[3]
  return keyframes`
0% {
    opacity: 0;
    transform: rotate(${-265 + adjustment}deg) translateX(-30px);
  }
  35% {
    opacity: 0;
    transform: rotate(${-265 + adjustment}deg) translateX(-30px);
  }
  100% {
    transform: rotate(${-270 + adjustment}deg) translateX(0px);
    opacity: 1;
  }
`
}
export const bgKeyframes = [bgScene1, bgScene2, bgScene3, bgScene4];
export const fgKeyframes = [fgScene1, fgScene2, fgScene3, fgScene4];
