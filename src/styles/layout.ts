import styled from "styled-components";

export const Layout = styled.div`
  /* 띄워쓰기 조심 and () ok and() x*/
  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
    #nav {
      ul li {
        width: 20%;
        height: 30px;
        line-height: 2.5;
      }
    }
    #home_Intro {
      justify-content: flex-start;
      margin-top: 10%;
    }
    #login form {
      top: 0;
      width: 100vw;
      height: 100%;
      background-color: antiquewhite;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  @media screen and (min-width: 601px) {
    font-size: 1.5rem;
    margin-right: 8px;
    display: flex;
    height: 1080px;
    width: 100dvw;
    flex-direction: column;
    align-items: center;
  }
`;

// export const BasicLayout = styled.div`
//   @media screen and (min-width: 601px) {
//     font-size: 1.5rem;
//   }
// `;
