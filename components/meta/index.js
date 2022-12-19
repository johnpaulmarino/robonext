import React from 'react';
import Helmet from 'react-helmet';

import mstile7070 from '@/static/meta/mstile-70x70.png';
import mstile150150 from '@/static/meta/mstile-150x150.png';
import mstile310150 from '@/static/meta/mstile-310x150.png';
import mstile310310 from '@/static/meta/mstile-310x310.png';

export default function Component({  metadata}) { 
  const { title, description, author, lang, site, image } = metadata
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`CTIA | ${title}`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:site`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: site,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `twitter:image`,
          content: image,
        },
        { property: `og:image`, content: image },
        { name: `msapplication-square70x70logo`, content: mstile7070 },
        { name: `msapplication-square150x150logo`, content: mstile150150 },
        { name: `msapplication-square310x150logo`, content: mstile310150 },
        { name: `msapplication-square310x310logo`, content: mstile310310 },
      ]}
    />
  )
}
