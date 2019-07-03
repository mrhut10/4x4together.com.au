import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const SuccessPage = () => (
  <Layout>
    <SEO title="Success: message sent" />
    <div className="flex flex-1 items-center justify-center mx-auto w-full">
      <div className="border-2 border-black max-w-sm p-4 text-center">
        <h1 className="font-display leading-none mb-4 pt-2 text-4xl text-black">
          Form submitted successfully!
        </h1>
        <p className="font-sans">
          Thank you for your message. We will get back to you as soon as we can.
        </p>
        <p className="flex justify-center">
          <Link
            className="bg-black hover:bg-gray-900 font-display inline-block leading-none -mb-4 px-6 py-2 rounded-none text-white text-lg tracking-wide uppercase"
            style={{ transform: `translateY(50%)` }}
            to="/"
          >
            Return to home
          </Link>
        </p>
      </div>
    </div>
  </Layout>
);

export default SuccessPage;
