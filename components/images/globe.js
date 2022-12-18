import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Component() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "globe.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)
  const image = getImage(data.placeholderImage)
  return <GatsbyImage image={image} alt="" loading="eager" />
}

