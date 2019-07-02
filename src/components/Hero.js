import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const Hero = () => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
        file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 5000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        site {
          siteMetadata {
            title
            tagline
            phone
            phoneFormatted
            email
          }
        }
      }
    `}
    render={data => (
      <div className="relative">
        <Image
          style={{ height: `66vh` }}
          fluid={data.file.childImageSharp.fluid}
        />
        <div className="absolute flex flex-col inset-0 items-center justify-center p-4 w-full md:w-1/2">
          <div className="max-w-sm mx-auto">
            <h1 className="font-bold leading-none mb-8 text-white text-6xl">
              {data.site.siteMetadata.title}
            </h1>
            <p className="leading-tight mb-8 normal-case text-3xl md:text-4xl text-white">
              {data.site.siteMetadata.tagline}
            </p>
          </div>
        </div>
      </div>
    )}
  />
);

export default Hero;
