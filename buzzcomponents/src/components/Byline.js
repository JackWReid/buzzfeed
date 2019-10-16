import React from 'react';
import styled from 'styled-components';

const Byline = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    color: #222;
  }
`;

const Image = styled.img`
  border-radius: 50%;
  margin-right: 0.5rem;
  width: 22px;
  height: 22px;
`;

const AuthorName = styled.div`
  margin-right: 0.5rem;
  font-size: 12px;
  color: #999;
`;

const TimeStamp = styled.div`
  font-size: 12px;
  color: #999;
`;

export default ({ author, time, ...props }) => (
  <Byline href={`/${author.username}`} {...props}>
    <Image src={author.image} alt={author.username} />
    <AuthorName>{author.name}</AuthorName>
    <TimeStamp>{time}</TimeStamp>
  </Byline>
);
