import styled from 'styled-components'

export const HeaderBox = styled.header`
  display: flex;
  width: 100%;
  height: 3.5rem;
  justify-content: center;
  align-items: center;
  background-color: #2a2a2c;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 100%;
`;

export const Logo = styled.img`
  height: 28px;
`;

export const Image = styled.img`
  margin-left: 10%;
  margin-right: 0.2%;
  height: 42px;
`;

export const Search = styled.input`
  height: 30px;
  padding-left: 13px;
  border: 1px solid white;
  background-color: #414143;
  width: 40%;
  border-radius: 15px;
  margin-left: 4%;
  background-image: url(images/search.png);
  background-repeat: no-repeat;
  background-size: 18px;
  background-position-x: 97%;
  background-position-y: 5px;
  &:focus {
    outline: none;
  }
`;

export const Nav = styled.div`
  margin-left: 3%;
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: space-between;
`;
