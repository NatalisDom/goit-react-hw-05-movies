import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 15px;
  height: 65px;
  margin-left: -30px;
  margin-right: -30px;
  padding: 0px 30px;
  margin-bottom: 30px;
  box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.45);
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
