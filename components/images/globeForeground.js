import React from 'react';
import Image from 'next/image';

export default function Component() {

    return (
      <div >
          <picture >
              <source
                srcSet="/static/static/864f78523bab8eddc7bc4f084b93dffa/c03d3/foreground.webp"
                type="image/webp"
                sizes="(min-width: 2359px) 2359px, 100vw"
              />
              <Image  src="/Users/family/Documents/agencyq/ctia/robonext/public/static/static/864f78523bab8eddc7bc4f084b93dffa/b80ca/foreground.png"  alt='globe foreground' height="2274" width="2359"/>
          </picture>
        </div>
    )
}
