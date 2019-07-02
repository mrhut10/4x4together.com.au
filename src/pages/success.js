import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const SuccessPage = () => (
  <Layout>
    <SEO title="Success: message sent" />
    <div className="flex flex-1 items-center justify-center mx-auto w-full">
      <div className="max-w-sm p-4">
        <h1 className="leading-none mb-2 pt-2 text-4xl">
          Form submitted successfully!
        </h1>
        <p>
          Thank you for your message. We will get back to you as soon as we can.
        </p>
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

export default SuccessPage;
