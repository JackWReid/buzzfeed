import styled from 'styled-components';

export default styled.div`
  display: block;
  height: ${({ units = 1 }) => units}rem;
`;
