import React from 'react';
import styled from 'styled-components';

import Card from './primitives/Card';
import Byline from './Byline';

const CardLink = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
`;

const StoryImage = styled.img`
  display: block;
  width: 100%;
`;

const StoryInfo = styled.div`padding: 1rem 1.5rem;`;

const Headline = styled.h1`
  margin: 0 0 0.5rem;
  font-family: 'Caponi Slab';
  font-size: 42px;
`;

const Lede = styled.p`
  margin: 0;
  font-size: 22px;
`;

const StoryByline = styled(Byline)`padding: 0 1.5rem 1rem;`;

export default ({ story, author }) => (
  <Card>
    <CardLink href={story.url}>
      <StoryImage src={story.image} alt={story.lede} />
      <StoryInfo>
        <Headline>{story.headline}</Headline>
        <Lede>{story.lede}</Lede>
      </StoryInfo>
    </CardLink>
    <StoryByline time={story.timeAgo} author={author} />
  </Card>
);
