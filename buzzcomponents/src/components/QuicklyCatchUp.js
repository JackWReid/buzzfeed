import React from 'react';
import styled from 'styled-components';

import Link from './primitives/Link';
import Card from './primitives/Card';

const Qcu = styled(Card)`
  padding: 1rem;
  border-top: 8px solid #222;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Title = styled.h1`
  margin: 0 0 1rem;
  font-size: 1rem;
  color: #222;
`;

const QcuLink = styled(Link)`
  display: block;
  margin-bottom: 1rem;
  font-size: 0.875rem;
`;

export default ({ stories }) => (
  <Qcu>
    <Title>Quickly Catch Up</Title>
    <List>
      {stories.map(({ headline, url }, key) => (
        <li>
          <QcuLink href={url}>{headline}</QcuLink>
        </li>
      ))}
    </List>
  </Qcu>
);
