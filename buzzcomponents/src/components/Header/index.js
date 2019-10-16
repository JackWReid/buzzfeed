import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from '../Logo';
import Nav from './Nav';
import BadgeGroup from './BadgeGroup';

const Header = styled.header`
  width: 100%;
  background-color: white;
  box-shadow: 0 1px 0 rgba(173, 168, 168, 0.1),
    0 2px 1px rgba(181, 179, 179, 0.1);
`;

const HeaderInner = styled.div`
  max-width: 1072px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`;

const HeaderMain = styled.div`
  display: flex;
  align-items: center;
`;

const links = [
  {
    name: 'News',
    url: '/news'
  },
  {
    name: 'Videos',
    url: '/videos'
  },
  {
    name: 'Quizzes',
    url: '/quizzes'
  },
  {
    name: 'Tasty',
    url: '/tasty'
  }
];

export default class SiteHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moreMenuExpanded: false
    };
  }

  toggleMoreMenu = () =>
    this.setState({ moreMenuExpanded: !this.state.moreMenuExpanded });

  render() {
    return (
      <Header>
        <HeaderInner>
          <HeaderMain>
            <a href="/">
              <Logo width="130px" />
            </a>
            <Nav links={links} toggle={this.toggleMoreMenu} />
          </HeaderMain>
          <BadgeGroup />
        </HeaderInner>
      </Header>
    );
  }
}
