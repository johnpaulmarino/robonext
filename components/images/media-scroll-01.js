import React from 'react';
import Image from 'next/image';
import styles from 'styles/components/images/globe.module.scss';

export default function Component() {
 
    return (
      <div className={styles.electriciansContainer}>
          <picture >
              <source
                srcSet="/static/static/0eb35ea67a843b36acce741791f51c9b/a2988/ms1.webp"
                type="image/webp"
                sizes="(max-width: 700px) 100vw, 700px"
              />
              <Image  className={styles.electriciansImage} src="/static/static/0eb35ea67a843b36acce741791f51c9b/b7eed/ms1.png"  alt='Two electricians restoring power' height="762" width="461"/>
          </picture>
        </div>
    )
}

