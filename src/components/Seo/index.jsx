import React from 'react'
import { Helmet } from 'react-helmet'


export const Seo = ({
  title,
  description,
  siteURL,
  image,
  path,
  keywords = [],
  lang = 'eng'
}) => (
    <Helmet
      title={title}
    >
      <html lang={lang} />
      <meta name="description" content={description} />
      {image ? <meta name="image" content={`${siteURL}/${image}`} /> : null}
      <meta name="image:alt" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={`${siteURL}${path ? path : ''}`} />
      <meta property="og:description" content={description} />
      {image ? <meta property="og:image" content={`${siteURL}/${image}`} /> : null}
      <meta property="og:image:alt" content={description}></meta>

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={`${siteURL}${path ? path : ''}`} />
      <meta name="twitter:description" content={description} />
      {image ? <meta name="twitter:image" content={`${siteURL}/${image}`} /> : null}
      <meta name="twitter:image:alt" content={description}></meta>
      <meta name="twitter:creator" content={siteURL}></meta>
    </Helmet>
  )
