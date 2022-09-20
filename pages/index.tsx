import type { NextPage } from "next";
import * as S from "../styles/index-style";
import ProblemLevel from "./problemlist/problemLevel";

const Home = () => {
  return (
    <S.BContainer>
      <S.Title>문제 목록</S.Title>
      <S.Container>
        {["1", "2", "3", "4", "5"].map((data, idx) => {
          return (
            <ProblemLevel
              key={idx}
              level={data}
              star={"star"}
              complete={"complete"}
            />
          );
        })}
      </S.Container>
    </S.BContainer>
  );
};

export default Home;
