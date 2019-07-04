import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { SocialIcon } from 'react-social-icons';

import Carousel from './Carousel';
import Modal from './Modal';

import logoType from '../images/logotype.svg';



const ControlsTopCenter = ({ currentSlide, goToSlide, slideCount }) => (
  <div className="black-gradient flex flex-wrap items-center justify-center md:justify-between px-12 pb-24 pt-4">
    <img className="h-8 md:h-6" src={logoType} alt="4x4 Together logo." />
    <div className="flex flex-shrink-0 items-center justify-center mt-4 w-full md:w-auto">
      <SocialIcon
        style={{ height: `1.5rem`, width: `1.5rem` }}
        url="https://www.facebook.com/4x4together"
        bgColor="#fff"
      />
      <SocialIcon
        className="ml-2"
        style={{ height: `1.5rem`, width: `1.5rem` }}
        url="https://www.instagram.com/4x4together"
        bgColor="#fff"
      />
      <SocialIcon
        className="ml-2"
        style={{ height: `1.5rem`, width: `1.5rem` }}
        url="https://twitter.com/4x4together"
        bgColor="#fff"
      />
      <SocialIcon
        className="ml-2"
        style={{ height: `1.5rem`, width: `1.5rem` }}
        url="https://www.youtube.com/channel/UCsR03-p26KNsjNDFOeszueg"
        bgColor="#fff"
      />
      <span className="md:block hidden ml-8 text-sm">Get in touch</span>
    </div>
  </div>
);
const ControlsCenterRight = ({ currentSlide, goToSlide, slideCount }) => {
  const dots = [];
  for (let i = 0; i < slideCount; i += 1) {
    dots.push(
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <li
        key={i}
        onKeyDown={
          // on enter key press goToSlide(i)
          e => (e.keyCode === 13 ? goToSlide(i) : null)
        }
        onClick={goToSlide(i)}
      >
        {currentSlide === i ? 'current ' : ''}slide {i + 1}
      </li>
    );
  }
  return <ul style={{ zIndex: -20 }}>{dots}</ul>;
};

const Hero = () => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
        hero: allFile(
          filter: { dir: { regex: "/hero-images/" } }
          sort: { fields: name }
        ) {
          edges {
            node {
              id
              childImageSharp {
                fluid(maxWidth: 5000) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="bg-black relative text-white">
        <Carousel
          data={data}
          controls={{
            topCenter: ControlsTopCenter,
            centerRight: ControlsCenterRight,
          }}
        />
        <div className="absolute flex flex-col inset-0 w-full z-10">
          <div className="flex flex-col font-bold items-center justify-center mt-auto">
            <Modal />
            <div className="bg-black sm:flex flex-wrap font-sans font-thin items-center justify-between mt-12 px-12 py-2 text-center text-xs text-white uppercase w-full">
              <div>Watch this space</div>
              <div>
                <span className="">
                  © {new Date().getFullYear()} {data.site.siteMetadata.title}
                </span>
                <span className="mx-1">|</span>
                <span className="">
                  Website by
                  <a
                    className="font-semibold inline-flex px-1"
                    href="https://phirannodesigns.com.au"
                    rel="nofollow"
                  >
                    Phiranno Designs
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  />
);

export default Hero;
