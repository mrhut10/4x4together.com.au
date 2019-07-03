import React from 'react';
import { navigate } from 'gatsby-link';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default class ContactForm extends React.Component {
  static propTypes = {
    click: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render() {
    const { props } = this;
    return (
      <form
        action="/success/"
        className="bg-white flex flex-col font-display max-w-lg m-4 sm:m-auto px-4 pt-12 relative shadow-2xl w-full"
        data-netlify-honeypot="bot-field"
        data-netlify="true"
        method="post"
        name="contact"
        onSubmit={this.handleSubmit}
      >
        <button
          className="absolute p-2 right-0 text-black text-xl top-0 z-50"
          onClick={props.click}
          type="button"
        >
          <MdClose />
        </button>
        <div
          className="absolute flex inset-x-0 items-center justify-center top-0"
          style={{ transform: `translateY(-50%)` }}
        >
          <div className="bg-black font-display px-12 py-3 rounded text-white sm:text-3xl uppercase">
            <h2>Lets Talk</h2>
          </div>
        </div>
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input name="form-name" type="hidden" value="contact" />
        <div hidden>
          <label htmlFor="bot-field">
            Don’t fill this out:{' '}
            <input
              id="bot-field"
              name="bot-field"
              onChange={this.handleChange}
            />
          </label>
        </div>

        {/* Name */}
        <div className="mb-6">
          <label htmlFor="name">
            <span className="uppercase">Name:</span>
            <input
              className="appearance-none bg-white border-2 hover:bg-gray-100 leading-tight px-3 py-2 rounded-none text-gray-700 w-full focus:outline-none focus:border-black"
              id="name"
              name="name"
              onChange={this.handleChange}
              required
              type="text"
            />
          </label>
        </div>

        {/* Email address */}
        <div className="mb-6">
          <label htmlFor="email">
            <span className="uppercase">Email:</span>
            <input
              className="appearance-none bg-white border-2 hover:bg-gray-100 leading-tight px-3 py-2 rounded-none text-gray-700 w-full focus:outline-none focus:border-black"
              id="email"
              name="email"
              onChange={this.handleChange}
              required
              type="email"
            />
          </label>
        </div>

        {/* Phone number */}
        <div className="mb-6">
          <label htmlFor="phone">
            <span className="uppercase">Phone:</span>
            <input
              className="appearance-none bg-white border-2 hover:bg-gray-100 leading-tight px-3 py-2 rounded-none text-gray-700 w-full focus:outline-none focus:border-black"
              id="phone"
              name="phone"
              onChange={this.handleChange}
              type="text"
            />
          </label>
        </div>

        {/* Message */}
        <div className="mb-6">
          <label htmlFor="message">
            <span className="uppercase">Message:</span>
            <textarea
              className="appearance-none bg-white border-2 hover:bg-gray-100 leading-tight px-3 py-2 rounded-none text-gray-700 w-full focus:outline-none focus:border-black"
              id="message"
              name="message"
              onChange={this.handleChange}
              required
              rows={5}
            />
          </label>
        </div>

        {/* Submit */}
        <button
          className="bg-black hover:bg-gray-900 font-display leading-none ml-auto -mt-8 px-12 py-4 rounded text-white uppercase"
          style={{ transform: `translateY(50%)` }}
          type="submit"
        >
          Send
        </button>
      </form>
    );
  }
}
