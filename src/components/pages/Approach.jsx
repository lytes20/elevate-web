import React from 'react';

import styled from 'styled-components';

const Para = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 20px;
`;
const ApproachTerm = styled.span`
  font-weight: bold;
`;

export default function Approach() {
  return (
    <div>
      <Para>Our Process ( D.I.V.E)</Para>
      <Para>
        <ApproachTerm>DIVE</ApproachTerm>
      </Para>
      <Para>
        <ApproachTerm>Define, Identify, Visualize, Elevate</ApproachTerm>{' '}
      </Para>
      <Para>
        <ApproachTerm>Define</ApproachTerm> ~ All the work we do is influenced by the problem we're trying to solve. We always keep that in
        mind to ensure that we do not lose the plot of the challenge we're trying to solve. We begin by recognizing what the problem is.
      </Para>
      <Para>
        <ApproachTerm>Identify</ApproachTerm> ~ We establish exciting and contemporary approaches to solve the snag in your business. We
        brainstorm and charter a variety of paths and options that we rarefy and present to our client.
      </Para>
      <Para>
        <ApproachTerm>Visualize</ApproachTerm> ~ At this stage, we work towards achieving the most out of the client's chosen path. We paint
        a picture of that option and delve deeper into the ideas that make it up; refining and enhancing them to ensure the strategy is
        modern, relevant and relatable.
      </Para>
      <Para>
        <ApproachTerm>Elevate</ApproachTerm> ~ This is our favourite part of the process. At this level, we systematically apply the
        strategies that we have developed and watch your story and brand stand out. Your business acquires a new lease of life breathed into
        it by a tribe of customers who are proudly loyal to your brand.
      </Para>
    </div>
  );
}
