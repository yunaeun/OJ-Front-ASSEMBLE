import React from "react";
import type { NextPage } from "next";
import * as S from "./style";
import Link from "next/link";

const Header: NextPage = () => {
  return (
    <S.HeaderBox>
      <S.Main>
        <S.Logo alt="logo" src="images/logo.png" />
        <S.Nav>
          <Link className="nav-item" href="/hold">
            대회개최
          </Link>
          <Link className="nav-item" href="/list">
            대회목록
          </Link>
          <Link className="nav-item" href="/">
            문제목록
          </Link>
        </S.Nav>
        <S.Search />
        <S.Image alt="profile" src="images/profile.png" />
        유나은님
      </S.Main>
    </S.HeaderBox>
  );
};
export default Header;
