import styled, { css } from 'styled-components';

export const HeaderImage = styled.div`
  ${props => `
    width: ${props.width}%;
    `}
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
  text-align: center;
  & img {
    width: 100%;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding-left: 80px;
  text-align: center;
`;

export const DescContainer = styled.div`
  width: 70%;
  margin: 20px auto 30px;
  padding: 20px 50px 20px 50px;
  background-color: rgba(0, 0, 0, 0.22);
  border-radius: 10px 10px 10px 10px;
`;
