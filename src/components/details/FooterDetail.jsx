import React from 'react';

import styled from 'styled-components';

import '../../assets/styles/details/footerdetail.scss'
import {elevateLogo} from '../../assets'

const Container = styled.div`
  width: 100%;
  height: 300px;
  color: white;
  text-align: center;
  padding-top: 40px;
  margin-top: 40px;
  & h2{
    font-size: 10px;
    color: white
  }
  ${props => `
      background: ${props.bgColor};
    `}
`;

function FooterDetail(props) {
  const { bgColor } = props;
  return (
    <Container bgColor={bgColor}>
      <div className="FooterDetail-logo-container">
        <img src={elevateLogo} alt="logo"/>
      </div>
      <h2>Do you want to elevate?</h2>
      <h1>connect with us.</h1>
    </Container>
  );
}

export default FooterDetail;
