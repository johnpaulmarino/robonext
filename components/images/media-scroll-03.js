import React from 'react';
import Image from 'next/image';

export default function Component() {

  return <Image
    objectFit='cover'
    src='/static/_images/ms3.png'
    alt='Emergency technicians setting up satellites'
    height={884}
    width={100}
    />
}
