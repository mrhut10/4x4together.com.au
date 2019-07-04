/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import Carousel from 'nuka-carousel';

const CenterRightControl = ({ goToSlide, slideCount }) => {
  // currentSlide,
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
  // currentSlide: PropTypes.number,
  goToSlide: PropTypes.func,
  slideCount: PropTypes.number,
};

const HeroSectionCarousel = ({ data, controls }) => {
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
        renderTopLeftControls={controls.topLeft}
        renderTopCenterControls={controls.topCenter}
        renderTopRightControls={controls.topRight}
        renderCenterLeftControls={controls.centerLeft}
        renderCenterCenterControls={controls.centerCenter}
        renderCenterRightControls={controls.centerRight}
        renderBottomLeftControls={controls.bottomLeft}
        renderBottomCenterControls={controls.bottomCenter}
        renderBottomRightControls={controls.bottomRight}
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
  controls: PropTypes.shape({
    topLeft: PropTypes.func,
    topCenter: PropTypes.func,
    topRight: PropTypes.func,
    centerLeft: PropTypes.func,
    centerCenter: PropTypes.func,
    centerRight: PropTypes.func,
    bottomLeft: PropTypes.func,
    bottomCenter: PropTypes.func,
    bottomRight: PropTypes.func,
  }),
};

export default HeroSectionCarousel;
