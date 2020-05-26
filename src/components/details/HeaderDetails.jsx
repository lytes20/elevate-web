import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 300px;
  color: white;
  ${props => `
      background: ${props.bgColor};
    `}
`;

function HeaderDetails(props) {
  const { bgColor } = props;
  return (
    <Container bgColor={bgColor}>
      <div></div>
    </Container>
  );
}

export default HeaderDetails;
