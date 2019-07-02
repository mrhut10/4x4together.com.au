import React from 'react';
import LazyLoad from 'react-lazyload';

const Location = () => (
  <LazyLoad height={512} once>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.7700930121373!2d152.90769251514953!3d-31.475509981384413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b7601fb5b8e1e93%3A0xe0b3a54c721c564!2s39+Sapphire+Dr%2C+Port+Macquarie+NSW+2444!5e0!3m2!1sen!2sau!4v1557225624024!5m2!1sen!2sau"
      allowFullScreen
      className="w-full"
      frameBorder={0}
      title="location"
      height={512}
    />
  </LazyLoad>
);

export default Location;
