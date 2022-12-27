import React from 'react'
import Image from 'next/image';
import styles from 'styles/components/images/globe.module.scss';
export default function Component() {

  return (
    <div >
        <picture >
            <source
              srcSet="/static/static/fe43938f1b634f067856a843c03d8f63/c03d3/background.webp"
              type="image/webp"
              sizes="(min-width: 2359px) 2359px, 100vw"
            />
            <Image  src="/static/static/fe43938f1b634f067856a843c03d8f63/e866e/background.png"  alt='globe background' height="2274" width="2359"/>
        </picture>
      </div>
  )
}
