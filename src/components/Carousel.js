/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes, { number } from 'prop-types';
import Image from 'gatsby-image';
import Carousel from 'nuka-carousel';
import propTypes from 'prop-types';

const CenterRightControl = ({ currentSlide, goToSlide, slideCount }) => {
  const dots = [];
  for (let i = 0; i < slideCount; i += 1) {
    dots.push(
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <li onClick={goToSlide(i)}>slide {i + 1}</li>
    );
  }
  return <ul style={{ zIndex: -20 }}>{dots}</ul>;
};

CenterRightControl.propTypes = {
  currentSlide: propTypes.number,
  goToSlide: propTypes.func,
  slideCount: propTypes.number,
};

const HeroSectionCarousel = ({ data }) => {
  return (
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
        renderCenterLeftControls={null}
        renderCenterRightControls={CenterRightControl}
      >
        {data.hero.edges.map(edge => (
          <div
            key={edge.node.id}
            className="relative"
            style={{ height: `100vh` }}
          >
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
};

HeroSectionCarousel.propTypes = {
  data: PropTypes.object,
};

export default HeroSectionCarousel;
