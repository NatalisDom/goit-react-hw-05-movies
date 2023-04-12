import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin: 30px auto 0px auto;
  padding: 0;

  display: flex;
  flex-wrap: wrap;
  justify-contect: center;

  li {

    width: 200px;
    margin-right: 60px;
    margin-bottom: 30px;
   
    text-align: center;
    box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.65);
    border-radius: 8px;
  }
  }
  img {
    width: 100%;
    display: block;
    height: auto;
  }
  p {
    font-size: 18px;
  }
`;
