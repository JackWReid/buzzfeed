import React from 'react';
import styled from 'styled-components';

import Card from './primitives/Card';

const Bar = styled(Card)`
  width: 100%;
  display: flex;
`;

const Breaking = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: bold;
  color: white;
  background-color: #e32;
`;

const Headline = styled.h1`
  flex: 1;
  padding: 0.3rem 1rem;
  font-size: 1rem;
`;

const Link = styled.a`
  color: #e32;
  text-decoration: none;
`;

export default ({ headline, url }) => (
  <Bar>
    <Breaking>Breaking</Breaking>
    <Headline>
      <Link href={url}>{headline}</Link>
    </Headline>
  </Bar>
);
