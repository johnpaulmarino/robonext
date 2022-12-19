import React from 'react';
import Image from 'next/image';

export default function Component() {

  return <Image
    objectFit='cover'
    src='/static/_images/foreground.png'
    alt='globe'
    height={884}
    width={100}
    />
}
