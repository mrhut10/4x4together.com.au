import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import Carousel from 'nuka-carousel';

const HeroSectionCarousel = ({ data }) => (
  <div className="relative z-10">
    <Carousel
      autoplay
      autoplayInterval={5000}
      cellAlign="center"
      dragging
      easing="easeCubicInOut"
      enableKeyboardControls
      style={{ display: `relative`, height: `100vh` }}
      swiping
      wrapAround
      renderCenterLeftControls={({ previousSlide }) => (
        <button
          aria-label="Previous slide"
          className="font-bold leading-none px-6 text-6xl"
          onClick={previousSlide}
          type="button"
        >
          &lsaquo;
        </button>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <button
          aria-label="Next slide"
          className="font-bold leading-none px-6 text-6xl"
          style={{ bottom: 0, right: 0, top: 0 }}
          onClick={nextSlide}
          type="button"
        >
          &rsaquo;
        </button>
      )}
      renderBottomCenterControls={null}
    >
      {data.hero.edges.map(edge => (
        <div className="relative" style={{ height: `100vh` }}>
          <Image
            className="absolute h-full inset-0 object-cover w-full"
            fluid={edge.node.childImageSharp.fluid}
            alt=""
          />
        </div>
      ))}
    </Carousel>
  </div>
);

HeroSectionCarousel.propTypes = {
  data: PropTypes.object,
};

export default HeroSectionCarousel;
