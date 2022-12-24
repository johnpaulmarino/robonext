import React from 'react'
import Image from 'next/image';

export default function Component() {
  return <Image
    objectFit='cover'
    src='/static/_images/background.png'
    alt='globe'
    height={884}
    width={884}
    />
}
