import styled from "styled-components";
import theme from "./theme";

export const Title = styled.div`
  color: white;
  font-size: 3.4vh;
  font-weight: 400;
  padding: 0.7vh 0 2vh 0;
`;

export const Level = styled.div`
  width: 4vw;
  height: 3.2vh;
  color: white;
  font-size: 1vw;
  text-align: center;
  border-radius: 3.2vh;
  line-height: 3.2vh;
`;

export const BContainer = styled.div`
  width: 73vw;
  margin: 0 auto;
`;

export const Container = styled.div`
  width: 73vw;
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  gap: 20px 20px;
  display: grid;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const Problem = styled.div`
  padding: 16px;
  box-sizing: border-box;
  height: 13vh;
  background-color: #333333;
  border: 2px solid white;
  border-radius: 2vh;
`;

export const CompleteButton = styled.div`
  width: 4vw;
  height: 3vh;
  background-color: #7494ab;
  border-radius: 8px;
  line-height: 3vh;
  text-align: center;
  font-size: 1vw;
  color: white;
`;

export const Content = styled.span`
  color: white;
  font-size: 1vw;
  font-weight: 300;
`;
