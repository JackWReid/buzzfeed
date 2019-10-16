import React from 'react';
import styled from 'styled-components';

import Card from './primitives/Card';
import Byline from './Byline';

const CoreStoryCard = styled(Card)`
  margin-top: 0.5rem;
  display: flex;
`;

const StoryInfo = styled.div`
  flex: 1;
  padding: 1rem;
`;

const StoryLink = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
`;

const Headline = styled.h1`
  margin-top: 0;
  font-size: 22px;
`;

const Lede = styled.p`
  font-size: 16px;
  color: #666;
`;

export default ({ story, author }) => (
  <CoreStoryCard>
    <StoryLink href={story.url}>
      <img src={story.image} alt={story.lede} />
    </StoryLink>
    <StoryInfo>
      <StoryLink href={story.url}>
        <Headline>{story.headline}</Headline>
        <Lede>{story.lede}</Lede>
      </StoryLink>
      <Byline author={author} time={story.timeAgo} />
    </StoryInfo>
  </CoreStoryCard>
);
