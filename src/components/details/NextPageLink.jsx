import React from 'react';

import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { logoGray } from '../../assets';
import '../../assets/styles/details/nextpagelink.scss';

const LogoImage = styled.img`
  width: 100%;
  transform: rotate(63deg);
  ${props =>
    props.page === 'creativecontent' &&
    css`
      filter: brightness(0) saturate(100%) invert(25%) sepia(54%) saturate(3727%) hue-rotate(337deg) brightness(95%) contrast(103%);
    `}
  ${props =>
    props.page === 'smm' &&
    css`
      filter: brightness(0) saturate(100%) invert(79%) sepia(50%) saturate(6314%) hue-rotate(141deg) brightness(99%) contrast(87%);
    `}
  ${props =>
    props.page === 'uiux' &&
    css`
      filter: brightness(0) invert(82%) sepia(11%) saturate(4614%) hue-rotate(14deg) brightness(97%) contrast(74%);
    `}
`;
const LogoImageContainer = styled.div`
  width: 40px;
  height: 40px;
`;

const LinkContainer = styled.div`
  flex: 1;
  & a {
    font-size: 1em;
    font-family: 'Mont', sans-serif;
    ${props => `
      color: ${props.color};
    `}
  }
`;
function NextPageLink(props) {
  const { path, nextPageName, page, color } = props;
  console.log(typeof page);
  return (
    <div className="NextPageLink">
      <div className="NextPageLink-items">
        <LinkContainer color={color}>
          <Link to={path}>{nextPageName}</Link>
        </LinkContainer>
        <LogoImageContainer>
          <LogoImage src={logoGray} alt="elevate logo" page={page} />
        </LogoImageContainer>
      </div>
    </div>
  );
}

export default NextPageLink;
