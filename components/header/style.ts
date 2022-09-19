import styled from "styled-components";

export const HeaderBox = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-around;
  height: 3.5rem;
  align-items: center;
  background-color: #2a2a2c;
`;

export const Logo = styled.img`
  height: 28px;
`;

export const Search = styled.input`
  height: 30px;
  border: 1px solid white;
  background-color: #414143;
  width: 40%;
  border-radius: 15px;
  background-image: url(/images/search.png);
  background-repeat: no-repeat;
  background-size: 18px;
  background-position-x: 97%;
  background-position-y: 5px;
  &:focus {
    outline: none;
  }
`;

export const Nav = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
`;
