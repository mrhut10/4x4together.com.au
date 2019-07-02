import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const Social = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            title
            facebook
            email
            phone
            phoneFormatted
          }
        }
      }
    `}
    render={data => (
      <div className="mx-auto w-full">
        <div className="flex items-center justify-center max-w-xs mx-auto pt-12 w-full">
          <a
            href={data.site.siteMetadata.facebook}
            className="hover:bg-gray-100 border hover:border-gray-200 flex group items-center justify-center p-3 rounded-full w-12"
            aria-label="Facebook"
          >
            <svg
              className="fill-current flex h-full text-gray-600 group-hover:text-gray-700 w-full"
              clipRule="evenodd"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="1.41421"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127c-.819-.088-1.643-.13-2.467-.127-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"
                fillRule="nonzero"
              />
            </svg>
          </a>
          <a
            href={`mailto:${data.site.siteMetadata.email}`}
            className="mx-6 hover:bg-gray-100 border hover:border-gray-200 flex group items-center justify-center p-3 rounded-full w-12"
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-current flex h-full text-gray-600 group-hover:text-gray-700 w-full"
            >
              <path d="M22 8.62V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.62l9.55 4.77a1 1 0 0 0 .9 0L22 8.62z" />
              <path d="M12 11.38l-10-5V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v.38l-10 5z" />
            </svg>
          </a>
          <a
            href={`tel:${data.site.siteMetadata.phone}`}
            className="hover:bg-gray-100 border hover:border-gray-200 flex group items-center justify-center p-3 rounded-full w-12"
            aria-label="Phone"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-current flex h-full text-gray-600 group-hover:text-gray-700 w-full"
            >
              <path d="M4 2h4a1 1 0 0 1 .98.8l1 5a1 1 0 0 1-.27.9l-2.52 2.52a12.05 12.05 0 0 0 5.59 5.59l2.51-2.52a1 1 0 0 1 .9-.27l5 1c.47.1.81.5.81.98v4a2 2 0 0 1-2 2h-2A16 16 0 0 1 2 6V4c0-1.1.9-2 2-2z" />
              <path d="M14.7 10.7a1 1 0 0 1-1.4-1.4L17.58 5H15a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V6.41l-4.3 4.3z" />
            </svg>
          </a>
        </div>
      </div>
    )}
  />
);

export default Social;
