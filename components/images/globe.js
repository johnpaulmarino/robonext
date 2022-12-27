import React from 'react'
import Image from 'next/image';
import styles from 'styles/components/images/globe.module.scss';
export default function Component() {

 

    return (
      <div className={styles.globecontainer}>
        <picture >
            <source
              srcSet="/static/static/dd180a3459c23efef9c3623fee4a5db3/25af2/globe.webp"
              type="image/webp"
              sizes="(min-width: 2359px) 2359px, 100vw"
            />
            <Image className={styles.globeImage} src="/static/static/dd180a3459c23efef9c3623fee4a5db3/e866e/globe.png"  alt='globes' height="2274" width="2359"/>
        </picture>
      </div>
    )

}

