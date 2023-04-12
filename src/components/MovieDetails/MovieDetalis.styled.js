import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const GoBack = styled(Link)`
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
  color: #d54c0c;
`;

export const Container = styled.div`
  display: flex;

  img {
    margin-top: 0px;
    margin-right: 30px;
    box-shadow: 0px 30px 30px 0px rgba(0, 0, 0, 0.65);
    width: 300px;
    height: 450px;
  }

  div {
    h1 {
      font-size: 30px;
      margin-top: 30px;
    }

    h2 {
      font-size: 26px;
      margin-top: 30px;
      font-weight: 700;
    }
  }
  p {
    font-size: 20px;
    margin-top: 30px;
  }
`;

export const Genres = styled.div`
  display: flex;
  span {
    margin-right: 30px;
    margin-top: 30px;
    font-size: 20px;
  }
`;

export const Information = styled.div`
 
  h3 {
    margin-top: 30px;
    font-size: 24px;
  }
`;

export const InformationLink = styled(NavLink)`
  border-radius: 10px;
  border: 1px solid blue;

  color: blue;
  padding: 4px 12px;

  text-decoration: none;
  font-size: 22px;

  box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.65);
  &.active {
    color: yellow;
    background-color: blue;
  }
`;


export const Buttons = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
  li {
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;