import React from 'react';
import Image from 'next/image';

export default function Component() {
  return <Image
    objectFit='cover'
    src='/static/_images/ms2.png'
    alt='Two emergency technicians discussing data on a screen'
    height={884}
    width={100}
    />
}
