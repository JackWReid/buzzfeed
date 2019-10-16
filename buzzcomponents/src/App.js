import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './components/Header/index';
import FeaturedStory from './components/FeaturedStory';
import SidebarStoryList from './components/SidebarStoryList';
import QuicklyCatchUp from './components/QuicklyCatchUp';
import CoreStory from './components/CoreStory';
import BreakingBar from './components/BreakingBar';
import Spacer from './components/primitives/Spacer';

import {
  homeFeed,
  featuredStory,
  trendingUnit,
  quicklyCatchUp
} from './data/homepage';

const Thumbstrip = styled.div`
  width: 100%;
  height: 80px;
  background-color: #ddd;
`;

const Column = styled.div`
  max-width: 1072px;
  margin: 0 auto;
  padding: 2rem 1rem 0;
`;

const Grid = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-template-areas: 'primary secondary';
  grid-gap: 1rem;
`;

const PrimaryFeed = styled.div`grid-area: primary;`;

const SecondaryFeed = styled.div`grid-area: secondary;`;

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Thumbstrip />
        <Column>
          <BreakingBar
            headline="WATCH LIVE: Trump gives remarks on taxes amid Weinstein scandal, Korea tension, NFL feud."
            url="https://www.facebook.com/BuzzFeedNews/videos/1664053743615637/"
          />
          <Grid>
            <PrimaryFeed>
              <FeaturedStory {...featuredStory} />
              {homeFeed.map(story => <CoreStory {...story} />)}
            </PrimaryFeed>
            <SecondaryFeed>
              <QuicklyCatchUp {...quicklyCatchUp} />
              <Spacer />
              <SidebarStoryList {...trendingUnit} />
            </SecondaryFeed>
          </Grid>
        </Column>
      </div>
    );
  }
}
