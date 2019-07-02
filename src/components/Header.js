import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header className="bg-white md:flex items-center leading-none relative shadow sticky top-0 w-full z-50">
        <div className="flex justify-between w-full">
          <Link
            to="/"
            className="flex font-bold items-center no-underline px-4 text-lg tracking-tight"
          >
            {data.site.siteMetadata.title}
          </Link>

          <button
            className="flex md:hidden items-center justify-center p-4"
            onClick={() => {
              const nav = document.getElementById('nav');
              nav.classList.toggle('hidden');
            }}
            type="button"
          >
            <svg
              className="fill-current h-4 w-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <nav
          id="nav"
          className="hidden md:flex md:flex-1 md:items-center md:justify-end relative w-full md:w-auto"
        >
          <NavLink link="#about" title="About&nbsp;Us" />
          <span className="hidden md:block text-gray-300">|</span>
          <NavLink link="#services" title="Services" />
          <span className="hidden md:block text-gray-300">|</span>
          <NavLink link="#gallery" title="Gallery" />
          <span className="hidden md:block text-gray-300">|</span>
          <NavLink link="#contact" title="Contact" />
        </nav>
      </header>
    )}
  />
);

const NavLink = ({ link, title }) => (
  <AnchorLink
    href={link}
    className="block border-t md:border-none font-semibold p-4 hover:text-gray-800 text-sm tracking-wide uppercase"
  >
    {title}
  </AnchorLink>
);

NavLink.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
};

export default Header;
