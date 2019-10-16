import React from 'react';
import styled from 'styled-components';

import Link from './Link';

const StoryStack = styled(Link)`
  display: block;
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`font-size: 1.125rem;`;

const ImageClip = styled.div`
  display: flex;
  width: 100%;
  height: 102px;
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  object-fit: cover;
  object-position: center;
`;

export default ({ url, image, title }) => (
  <StoryStack href={url}>
    <ImageClip>
      <Image src={image} alt={title} />
    </ImageClip>
    <Title>{title}</Title>
  </StoryStack>
);
