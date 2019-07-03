import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import Carousel from 'nuka-carousel';

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
        renderCenterRightControls={null}
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
