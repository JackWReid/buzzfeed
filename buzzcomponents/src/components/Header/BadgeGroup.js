import React from 'react';
import styled from 'styled-components';

import Badge from '../Badge';

const HeaderBadge = styled(Badge)`
  width: 40px;
  height: 40px;
  margin: 0 5px;
`;

export default () => (
  <div>
    <HeaderBadge type="lol" />
    <HeaderBadge type="wtf" />
    <HeaderBadge type="omg" />
    <HeaderBadge type="cute" />
    <HeaderBadge type="trending" />
  </div>
);