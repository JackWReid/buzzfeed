import React from 'react';
import styled from 'styled-components';

const NavList = styled.nav`padding: 0 0.5rem;`;

const NavLink = styled.a`
  padding: 0 0.7rem;
  display: inline-block;
  font-weight: 600;
  color: #0f65ef;
  text-decoration: none;
`;

export default ({ links = [], toggle }) => (
  <NavList>
    {links.map(({ name, url }) => <NavLink href={url}>{name}</NavLink>)}
    <NavLink href="#" onClick={toggle}>More</NavLink>
  </NavList>
);