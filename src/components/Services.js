import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const Services = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "services.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 5000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <div id="services" className="flex flex-wrap">
        <div className="flex items-center justify-center w-full md:w-1/2">
          <div className="max-w-md px-4 py-24 w-full">
            <h2 className="font-bold mb-4 text-4xl text-gray-800">Services</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ut
              ipsam aperiam exercitationem natus placeat vitae corporis possimus
              dolorem aspernatur. Alias ipsam ut nulla in quo veritatis omnis
              voluptatibus aliquam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium nisi harum magni tenetur laboriosam asperiores facere
              distinctio doloremque dolorum. Sapiente a ratione ex eos harum
              minus repellendus qui numquam distinctio.
            </p>
          </div>
        </div>
        <div className="relative w-full md:w-1/2">
          <div className="md:absolute md:inset-0 md:overflow-hidden">
            <Image
              style={{ height: `100%` }}
              fluid={data.file.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
    )}
  />
);

export default Services;
