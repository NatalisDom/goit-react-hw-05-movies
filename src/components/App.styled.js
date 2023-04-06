import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  align-items: center;
 
  padding: 10px 20px;

  height: 65px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 4px 12px;
 
  border-radius: 10px;
  color: blue;

  &.active {
    background-color: blue;
    color: yellow;
  }
`;
