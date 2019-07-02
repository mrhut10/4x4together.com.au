import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Social from './Social';

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <footer className="mx-auto w-full">
        <Social />
        <p className="flex flex-wrap items-center justify-center mb-0 p-4 text-center w-full">
          <span className="flex-no-shrink w-full md:w-auto">
            © {new Date().getFullYear()} {data.site.siteMetadata.title}
          </span>
          <span className="hidden md:block mx-2 w-full md:w-auto">|</span>
          <span className="flex-no-shrink w-full md:w-auto">
            Website by
            <a
              className="font-semibold inline-flex px-1"
              href="https://phirannodesigns.com.au"
              rel="nofollow"
            >
              Phiranno Designs
            </a>
          </span>
        </p>
      </footer>
    )}
  />
);

export default Footer;
