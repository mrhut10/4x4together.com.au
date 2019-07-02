import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="flex flex-1 items-center justify-center mx-auto w-full">
      <div className="max-w-sm p-4">
        <h1 className="leading-none mb-2 pt-2 text-4xl">404: Page Not Found</h1>
        <p>The page you were looking for doesn't seem to exist.</p>
        <p className="mt-4">
          <Link
            className="bg-blue-700 hover:bg-blue-600 font-semibold inline-block leading-none px-4 py-2 text-white text-xs tracking-wide uppercase"
            to="/"
          >
            Back to homepage
          </Link>
        </p>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
