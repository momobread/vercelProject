import { FormEvent, useEffect, useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import checkLogin from "../hooks/checkLogin";
import useUser from "../contexts/userContext";
import { useNavigate } from "react-router-dom";

// const KAKAO_URL = import.meta.env.VITE_KAKAO_AUTH_URL;
// const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_RESTAPI_KEY;
// const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

// function handleKakaoLogin(e: FormEvent<HTMLButtonElement>) {
//   e.preventDefault();
//   window.location.href = `${KAKAO_URL}&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}`;
// }

interface userInfoType {
  id: string;
  password: string;
  nickname: string;
  userNum: string;
}

function Login() {
  const { id, password, dispatch, isLogined } = useUser();
  const [userInfo, setUserInfo] = useState<userInfoType | null>(null);

  useEffect(() => {
    const GetStorageUser = sessionStorage.getItem("user");
    if (GetStorageUser === null) return;
    else {
      setUserInfo(JSON.parse(GetStorageUser)[0]);
    }
  }, []);

  const navigate = useNavigate();
  // console.log(userInfo);
  // const GetStorageId = sessionStorage.getItem("id");
  // const GetStoragePassword = sessionStorage.getItem("password");

  // function checkUserInfo() {
  //   if (GetStorageId === id && password === GetStoragePassword) {
  //     dispatch({ type: "isLogined", isLogined: true });
  //     navigate("/");
  //   } else if (GetStorageId === id && password === password) {
  //     // 잘못된 비밀번호
  //   } else {
  //     console.log("회원가입");
  //     navigate("/join");
  //   }
  // }

  function checkUserInfo() {
    if (userInfo === null) {
      navigate("/join");
      return;
    }

    console.log(password, typeof password);

    if (userInfo.id === id && password === userInfo.password) {
      console.log("로그인성공");
      dispatch({ type: "isLogined", isLogined: true });
      navigate("/");
    } else if (userInfo.id === id && userInfo.password !== password) {
      // 잘못된 비밀번호
      console.log("ss");
    } else {
      console.log(userInfo);
      console.log("회원가입");
      navigate("/join");
    }
  }

  function checkInform(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    checkUserInfo();

    if (isLogined) {
      //홈화면
    } else {
      // 회원가입
    }

    //소스맵 설정 => hidden

    //test == true 홈으로
    //tes ==false이면 회원가입 창으로
  }

  return (
    <div id="login" className="h-full w-full">
      <form className="fixed left-1/2 top-16 flex h-login w-login translate-x-login flex-col items-center justify-center gap-8 rounded-lg border border-gray-400 p-3">
        <Header />
        <div className="flex w-3/4 flex-col">
          <input
            id="id"
            onChange={(e) => dispatch({ type: "id", id: e.target.value })}
            value={id}
            className="border border-gray-400"
          />
          <input
            id="pw"
            onChange={(e) => dispatch({ type: "password", password: e.target.value })}
            className="border border-gray-400"
          />
        </div>
        <div>
          {/* <button onClick={handleKakaoLogin}> */}
          <button>
            <span>카카오로그인</span>
          </button>
        </div>
        <div className="flex w-3/4 flex-col gap-1">
          <Button style="long" text="로그인" onclick={(e) => checkInform(e)} />
          <Button style="long" text="회원가입" />
          <Button style="long" text="아이디/비밀번호 찾기" />
        </div>
      </form>
    </div>
  );
}
export default Login;
