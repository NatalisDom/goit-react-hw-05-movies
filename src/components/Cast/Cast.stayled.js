import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-wrap: wrap;
justify-contect: center;
  
  li {
    width: calc(100% / 5);
  }
  img {
    display: block;
  }
  p {
    font-size: 28px;
  }
`;
