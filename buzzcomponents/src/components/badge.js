import React from 'react';
import styled from 'styled-components';

const BadgeLink = styled.a`
  display: inline-block;
`;

const TrendingBadgeLink = styled(BadgeLink)`
  border-radius: 50%;
  background-color: #e32;
  overflow: hidden;
`;

export default ({type, ...props}) => {
  switch (type) {
    case 'lol':
      return (
        <BadgeLink href={`/${type}`} {...props}>
          <svg viewBox="0 0 1024 1024">
            <path fill="#fe0" d="M955.3 256C814 11.2 500.9-72.7 256 68.7 11.2 210-72.7 523.1 68.7 768 210 1012.8 523.1 1096.7 768 955.3 1012.8 814 1096.7 500.9 955.3 256z" />
            <path d="M416 640.9l33.3 57.6-148.9 86-126.1-218.4 66.1-38.2 92.8 160.7 82.8-47.7zm212.5-191.3c38.7 67.1 13.2 143-54.3 181.9-67.4 38.9-145.9 23.2-184.7-43.9s-13.2-143 54.3-181.9c67.5-38.9 146-23.2 184.7 43.9zm-67.1 38.8c-17.6-30.4-52.2-42.8-83.9-24.4-31.8 18.3-38.4 54.5-20.8 84.9 17.6 30.4 52.2 42.8 83.9 24.4s38.4-54.5 20.8-84.9zm182.8-37l-92.8-160.7-66.1 38.2 126.1 218.3 148.9-86-33.3-57.6-82.8 47.8z" />
          </svg>
        </BadgeLink>
      );
    case 'wtf':
      return (
        <BadgeLink href={`/${type}`} {...props}>
          <svg viewBox="0 0 1024 1024">
            <path fill="#fe0" d="M955.3 256C814 11.2 500.9-72.7 256 68.7 11.2 210-72.7 523.1 68.7 768 210 1012.8 523.1 1096.7 768 955.3 1012.8 814 1096.7 500.9 955.3 256z"></path>
            <path d="M472.5 464L521 661l-68.5 39.5-82-78.4 27.2 110-68.5 39.5-146.3-140.5 64.6-37.3 76 80-24-110.1 56.2-32.5 83 76-31.3-105.8 65.1-37.4zm181.3 51.8c-8.4 4.8-18 1.1-23-7.7L603.6 461l34.2-19.8-31.5-54.5-34.2 19.8-26.6-46.1-62.9 36.3 26.6 46.1-27.9 16.1 31.5 54.5 27.9-16.1 37.7 65.3c20.4 35.3 51.3 41.2 88.6 19.6 21.3-12.3 33-26 36.2-35.8l-38.6-41.1c-.6 2.3-5.2 7.2-10.8 10.5zm123.7-155.3L746.1 306l-34.2 19.8-4.4-7.7c-4.8-8.4.2-18.3 8.2-22.9 7-4 12.7-4.6 19.2-2.2l2.5-48c-19.1-5.7-43.7 1-63.2 12.3-37.4 21.6-50 61.9-29.6 97.2l4.4 7.7-28 16 31.5 54.5 27.9-16.1 65.9 114.2 62.9-36.3-65.9-114.2 34.2-19.8z"></path>
          </svg>
        </BadgeLink>
      );
    case 'omg':
      return (
        <BadgeLink href={`/${type}`} {...props}>
          <svg viewBox="0 0 1024 1024">
            <path fill="#fe0" d="M955.3 256C814 11.2 500.9-72.7 256 68.7 11.2 210-72.7 523.1 68.7 768 210 1012.8 523.1 1096.7 768 955.3 1012.8 814 1096.7 500.9 955.3 256z"></path>
            <path d="M252.7 577.1c-51.4 29.7-61 82.5-37.5 123 23.4 40.6 74.1 59 125.5 29.3 51.7-29.8 61.1-82.9 37.7-123.5-23.5-40.6-74-58.7-125.7-28.8zM313 681.6c-16.5 9.5-33 2.6-42.3-13.6-9.2-15.9-7-33.6 9.5-43.2 16.8-9.7 33.3-2.8 42.4 13.2 9.5 16.2 7.3 33.9-9.6 43.6zm301.7-255.5l60.7 105.2-54.1 31.2-48.9-84.7c-5-8.7-13.9-13.6-25.9-6.7-12 6.9-14.5 18-15.6 24.3l51.7 89.5-54.1 31.2-48.9-84.7c-5-8.7-13.6-13.8-25.9-6.7-11.7 6.8-14.2 17.8-15.3 24.1l51.7 89.5-54.1 31.2-83.8-145.1 54.1-31.2 9.5 16.5c1.6-11.8 13-34.4 36.5-47.9 20.4-11.8 39.5-12.8 56.5 1.4 1.1-17.5 12.6-41.3 36-54.9 26.7-15.3 52.6-12.2 69.9 17.8zm152.6-141.4L713.2 316l8.8 15.3c-19.7-7.1-36.8-4-51.8 4.7-35.8 20.6-49.8 60.8-21.9 109.2 28.6 49.6 70.6 55.8 105.5 35.6 15-8.7 25.4-21.9 29.6-43.1l4.5 7.8c14.7 25.5-3.5 42.5-16.1 49.8-15.6 9-34.9 13.8-52.5 9.1l-.6 51.6c27.6 4.1 53.7-2.1 78.6-16.5 36.1-20.8 81-62.4 44.7-125.2l-74.7-129.6zM745 422.2c-14.7 8.5-31 8.7-41.3-9-10.2-17.7-1.9-31.7 12.8-40.2 6.9-4 19-6.6 27.6-3.5l17.7 30.6c-1.6 8.9-9.9 18.1-16.8 22.1z"></path>
          </svg>
        </BadgeLink>
      );
    case 'cute':
      return (
        <BadgeLink href={`/${type}`} {...props}>
          <svg viewBox="0 0 1024 1024">
            <path fill="#fe0" d="M955.3 256C814 11.2 500.9-72.7 256 68.7 11.2 210-72.7 523.1 68.7 768 210 1012.8 523.1 1096.7 768 955.3 1012.8 814 1096.7 500.9 955.3 256z"></path>
            <path d="M331.4 648.8l56.3 13.5c-1.2 17.4-13.3 45.7-47.8 65.6-48 27.7-103 17.7-130.9-30.6-27.7-48-8.8-100.7 39.2-128.3 34.5-19.9 64.8-16.5 80.7-8.6l-16.6 55.2c-8.9-4.5-20.9-5.1-32.8 1.8-16 9.2-24 27.2-12.8 46.7 11.2 19.4 31 21.8 47 12.6 11.8-7 17-18.3 17.7-27.9zm96.5-178.6l53.9 93.4c-1.6 8-4.4 18.4-16.9 25.7-13.8 8-25.4 6.7-34.2-8.6l-48.5-84-56.4 32.6 62.4 108.1c15 26 42.2 38.3 77.3 18.1 26.6-15.4 36.9-35.9 40.1-50.7l9.8 16.9 56.4-32.6-87.4-151.4-56.5 32.5zm225.6 10.2c-7.5 4.3-16.2 1-20.7-6.9l-24.4-42.3 30.7-17.7-28.2-48.9-30.7 17.7-23.9-41.4-56.4 32.6 23.9 41.4-25.1 14.5 28.2 48.9 25.1-14.5 33.8 58.6c18.3 31.7 46 37 79.5 17.6 19.1-11 29.6-23.3 32.4-32.1L663.1 471c-.5 2-4.6 6.5-9.6 9.4zm149.1-91.2l43.3 21.4c-7.6 21.5-31.1 43.1-53.7 56.1-47.3 27.3-101.5 18.9-130.3-30.9-25.3-43.9-12.2-98.7 36.7-126.9 44.5-25.7 97.1-13.5 127.9 39.8l6.7 11.6-102.8 59.4c8.7 7.9 25.1 11 43.6.3 8.4-4.9 24.9-19.8 28.6-30.8zm-93.5-4.9l49.8-28.8c-5.4-5.7-17.4-14.2-35.6-3.7-17.2 10-16.3 24.5-14.2 32.5z"></path>
          </svg>
        </BadgeLink>
      );
    case 'trending':
      return (
        <TrendingBadgeLink href={`/${type}`} {...props}>
          <svg viewBox="0 0 512 512">
            <path d="M377.896 247.32l-15.2-107.775-100.934 40.72 40.006 23.1-37.795 65.46-65.46-37.794-64.49 111.71 36.12 20.853 43.638-75.582 65.462 37.795L337.89 224.22l40.006 23.1" fill="#FFF"></path>
          </svg>
        </TrendingBadgeLink>
      );
    default:
      return null;
  }
}
