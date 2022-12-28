import React from 'react';
import Image from 'next/image';
import styles from 'styles/components/images/globe.module.scss';
export default function Component() {

    return (
      <div className={styles.electriciansContainer}>
          <picture >
              <source
                srcSet="/static/static/b1a7aa756058b995390ad43f99cf3611/2eb44/ms3.webp"
                type="image/webp"
                sizes="(max-width: 700px) 100vw, 700px"
              />
              <Image  className={styles.electriciansImage}  src="/static/static/b1a7aa756058b995390ad43f99cf3611/b3149/ms3.jpg"  alt='Emergency technicians setting up satellites' height="762" width="461"/>
          </picture>
        </div>
    )
}
