import styled from 'styled-components';

const HeaderDetails = styled.div`
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
  position: relative;
  ${props => `
      background-image: url(${props.bgImage});
    `}
`;


export default HeaderDetails;
