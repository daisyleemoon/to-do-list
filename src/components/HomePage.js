import styled from "styled-components";

const HomePageDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 800px;
  margin-top: 50px;
  background-color: #a892ee;
  border-radius: 12px;
`;

const H1 = styled.h1`
  text-align: center;
`;

const H2 = styled.h2`
  text-align: center;
`;

const HomePage = () => {
  return (
    <HomePageDiv>
      <H1>React 練習專案</H1>
      <H2>歡迎光臨我的頁面</H2>
    </HomePageDiv>
  );
};

export default HomePage;
