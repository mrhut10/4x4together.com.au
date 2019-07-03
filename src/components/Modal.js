import React, { Component } from 'react';
import ReactModal from 'react-modal';

import Form from './Form';

import logo from '../images/logo.png';

export default class Modal extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    ReactModal.setAppElement('#___gatsby');
    const { showModal } = this.state;
    return (
      <>
        <div className="flex font-display inset-x-0 items-center justify-center z-50">
          <button
            className="bg-black flex items-center py-1 rounded shadow-md"
            onClick={this.handleOpenModal}
            type="button"
          >
            <img className="h-12 ml-4" src={logo} alt="4x4 Together logo." />
            <div className="mx-4 sm:text-3xl whitespace-no-wrap">
              Contact Us Today
            </div>
          </button>
        </div>
        <ReactModal
          isOpen={showModal}
          contentLabel="Minimal Modal Example"
          className="bg-transparent flex items-center justify-center min-h-screen"
          style={{
            overlay: {
              backgroundColor: 'hsla(0, 0%, 0%, 0.5)',
            },
            content: {},
          }}
        >
          <Form click={this.handleCloseModal} />
        </ReactModal>
      </>
    );
  }
}
