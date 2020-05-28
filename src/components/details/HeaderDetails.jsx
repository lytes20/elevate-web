import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: calc(100vh / 2);
  @media (min-width: 1340px) {
    height: calc(100vh / 1.5);
  }
  color: white;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  ${props => `
      background-image: url(${props.bgImage});
    `}
`;

function HeaderDetails(props) {
  const { bgColor, bgImage } = props;
  return (
    <Container bgColor={bgColor} bgImage={bgImage}>
      <div></div>
    </Container>
  );
}

export default HeaderDetails;
