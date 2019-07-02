import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "about.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 5000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <div id="about" className="flex flex-wrap-reverse">
        <div className="relative w-full md:w-1/2">
          <div className="md:absolute md:inset-0 md:overflow-hidden">
            <Image
              style={{ height: `100%` }}
              fluid={data.file.childImageSharp.fluid}
            />
          </div>
        </div>
        <div className="flex items-center justify-center w-full md:w-1/2">
          <div className="max-w-md px-4 py-24 w-full">
            <h2 className="font-bold mb-4 text-4xl text-gray-800">About</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              facilis ipsa temporibus odio expedita delectus dolor optio, natus,
              minus, eos repellat. Aut exercitationem molestias beatae
              consectetur est ea possimus nesciunt.
            </p>
          </div>
        </div>
      </div>
    )}
  />
);

export default About;
