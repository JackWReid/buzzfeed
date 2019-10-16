import React from 'react';
import styled from 'styled-components';

import Card from './primitives/Card';
import StoryStack from './primitives/StoryStack';

const StoryList = styled(Card)`
  padding: 1rem;
  border-top: 8px solid #f43192;
`;

const Title = styled.h1`
  margin: 0 0 1rem;
  font-size: 1rem;
  color: #f43192;
`;

const transformStory = story => ({
  title: story.headline,
  url: story.url,
  image: story.image
});

export default ({ stories, title }) => (
  <StoryList>
    <Title>{title}</Title>
    {stories.map((story, key) => (
      <StoryStack key={key} {...transformStory(story)} />
    ))}
  </StoryList>
);
