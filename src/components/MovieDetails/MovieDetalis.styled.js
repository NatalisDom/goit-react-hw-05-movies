import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBack = styled(Link)`
  font-size: 26px;
  font-weight: 500;
  text-decoration: none;
  color: #d54c0c;
`;

export const Container = styled.div`
  display: flex;
`;

export const Image = styled.img`
  margin-top: 20px;
  margin-right: 20px;
`;

export const Title = styled.h2`
  font-size: 36px;
  margin: 20px 0px 0px 0px;
`;

export const Overview = styled.p`
  font-weight: 500;
  font-size: 30px;
  margin: 20px 0px 0px 0px;
`;

export const Genres = styled.span`
  display: block;
  font-weight: 500;
  font-size: 26px;
  margin: 20px 0px 0px 0px;
`;

export const Genre = styled.span`
  margin: 0px 15px 0px 0px;
`;

export const Text = styled.p`
  margin: 15px 0px 0px 0px;
  font-size: 20px;
`;
