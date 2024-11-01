import styled from "styled-components";

export const Layout = styled.div`
  /* 띄워쓰기 조심 and () ok and() x*/
  @media screen and (max-width: 600px) {
    font-size: 1rem;
    button {
      font-size: 20px;
    }
    #nav {
      ul li {
        width: 25%;
        height: 30px;
        line-height: 2;
        font-size: 12px;
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

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    #contents {
      margin: 0;
    }
    #postform {
      width: fit-content;
    }
    #postformwrap {
      width: inherit;
      li {
        width: inherit;
      }
    }
    #postform {
      width: inherit;
    }

    #updateform {
      width: inherit;
    }
    #writeform {
      width: inherit;
    }
  }
  @media screen and (min-width: 601px) {
    font-size: 1.4rem;
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
