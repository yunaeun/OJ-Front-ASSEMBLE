import type { NextPage } from "next";
import * as S from "../../styles/index-style";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
//npm install react-icons --save
//yarn add react-icons

const ProblemLevel = (props: {
  level: string;
  complete: string;
  star: string;
}) => {
  return (
    <S.Problem>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <S.Level
          style={
            props.level === "1"
              ? { backgroundColor: "#4CAF50" }
              : props.level === "2"
              ? { backgroundColor: "#FFC107" }
              : props.level === "3"
              ? { backgroundColor: "#FF9800" }
              : props.level === "4"
              ? { backgroundColor: "#FF5722" }
              : { backgroundColor: "#D01F1F" }
          }
        >
          LV {props.level}
        </S.Level>
        {props.star == "star" ? (
          <AiFillStar size="20" color="#FFE55C" />
        ) : (
          <AiOutlineStar size="20" color="#FFE55C" />
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "12px",
        }}
      >
        <S.Content>신고 결과 받기</S.Content>
        {props.complete === "complete" ? (
          <S.CompleteButton>완료</S.CompleteButton>
        ) : null}
      </div>
    </S.Problem>
  );
};

export default ProblemLevel;
