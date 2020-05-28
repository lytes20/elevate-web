import styled from 'styled-components';

export const HeaderImage = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
`;

export const HeaderImageContainer = styled.div`
  flex: 1;
  & img {
    width: 100%;
  }
`;
