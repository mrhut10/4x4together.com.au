import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import Form from './Form';

const Contact = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "contact.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 5000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <div id="contact" className="flex flex-wrap-reverse">
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
            <h2 className="font-bold mb-4 text-4xl text-gray-800">Contact</h2>
            <p>
              Send us a photo and we will do a quote for you without the need to
              bring your car in!
            </p>
            <Form />
          </div>
        </div>
      </div>
    )}
  />
);

export default Contact;
