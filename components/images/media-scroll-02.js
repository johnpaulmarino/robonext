import React from 'react';
import Image from 'next/image';
import styles from 'styles/components/images/globe.module.scss';
export default function Component() {

    return (
      <div className={styles.electriciansContainer}>
          <picture >
              <source
                srcSet="/static/static/c37d3198137065bab4d4a6eebf717cb2/ca050/ms2.webp"
                type="image/webp"
                sizes="(max-width: 700px) 100vw, 700px"
              />
              <Image  className={styles.electriciansImage} src="/static/static/c37d3198137065bab4d4a6eebf717cb2/69ae6/ms2.png"  alt='Two emergency technicians discussing data on a screen' height="762" width="461"/>
          </picture>
        </div>
    )
}
