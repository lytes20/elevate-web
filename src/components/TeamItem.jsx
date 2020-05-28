import React from 'react';

import styled from 'styled-components';

import '../assets/styles/teamitem.scss';

const MemberImageContainer = styled.div`
  flex: 1;
  & img {
    width: 100%;
  }
`;

function TeamItem(props) {
  const { member } = props;
  return (
    <div className="TeamItem">
      <MemberImageContainer>
        <img src={member.image} alt={member.name} />
      </MemberImageContainer>
      <h1>{member.name}</h1>
      <p>{member.role}</p>
    </div>
  );
}

export default TeamItem;
