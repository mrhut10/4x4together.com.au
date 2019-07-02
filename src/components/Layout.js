import React from 'react';
import PropTypes from 'prop-types';

import '../css/tailwind.css';

const Layout = ({ children }) => (
  <div className="antialiased flex flex-col font-display leading-relaxed min-h-screen text-gray-700">
    <main className="bg-white flex flex-1 flex-col mx-auto w-full">
      {children}
    </main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
