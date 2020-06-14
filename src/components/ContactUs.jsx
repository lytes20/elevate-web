import React, { useState, useEffect } from 'react';

import styled, { css } from 'styled-components';

import { closeIcon } from '../assets';

import ContactUsForm from './ContactUsForm';

const Modal = styled.div`
  ${props =>
    props.open === true &&
    css`
      display: block;
    `}
  ${props =>
    props.open === false &&
    css`
      display: none;
    `}
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  z-index: 10000;
`;

const ModalBackdrop = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ModalContents = styled.div`
  position: relative;
  background-color: white;
  padding: 40px;
`;

export default function ContactUs(props) {
  const { open, handleCloseModal } = props;

  return (
    <Modal open={open}>
      <ModalBackdrop>
        <ModalContents>
          <button className="contact100-btn-hide" onClick={() => handleCloseModal(false)}>
            <img src={closeIcon} />
          </button>
          <ContactUsForm />
        </ModalContents>
      </ModalBackdrop>
    </Modal>
  );
}
