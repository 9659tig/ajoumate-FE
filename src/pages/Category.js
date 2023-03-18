import React from "react";
import styled from "styled-components";
import CategoryItem from "../components/Category/CategoryItem";
import WriteButton from "../components/Category/WriteButton";

const StyledCategoryPage = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: scroll;
`;
const StyledTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: 0 10px;
`;

let CategoryData = [
  {
    title: "식사 메이트",
    content: "낙곱새 같이 드실 분 구합니다~",
  },
  {
    title: "택시 메이트",
    content: "수원역에서 아주대 같이 가실 분 구해요!!!",
  },
  {
    title: "사물함 메이트",
    content: "사물함 나랑 같이 할 사람??",
  },
  {
    title: "카페 메이트",
    content: "제가 아메리카노 쏩니다!",
  },
  {
    title: "기타 메이트",
    content: "보드게임 같이 하실 분 구합니다!!",
  },
];

export default function Category() {
  return (
    <StyledCategoryPage>
      <StyledTitle>카테고리</StyledTitle>
      {CategoryData.map((item) => (
        <CategoryItem item={item} key={item.title} />
      ))}
      <WriteButton />
    </StyledCategoryPage>
  );
}
