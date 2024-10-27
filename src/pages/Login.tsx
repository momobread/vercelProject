import { FormEvent } from "react";
import Button from "../components/Button";
import Header from "../components/Header";

function handleKakaoLogin(e: FormEvent<HTMLButtonElement>) {
  e.preventDefault();
  window.location.href("");
}

function Login() {
  return (
    <div id="login" className="h-full w-full">
      <form className="h-login w-login translate-x-login fixed left-1/2 top-16 flex flex-col items-center justify-center gap-8 rounded-lg border border-gray-400 p-3">
        <Header />
        <div className="flex w-3/4 flex-col">
          <input id="id" className="border border-gray-400" />
          <input id="pw" className="border border-gray-400" />
        </div>
        <div>
          <button onClick={handleKakaoLogin}>
            <span>카카오로그인</span>
          </button>
        </div>
        <div className="flex w-3/4 flex-col gap-1">
          <Button style="long" text="로그인" />
          <Button style="long" text="회원가입" />
          <Button style="long" text="아이디/비밀번호 찾기" />
        </div>
      </form>
    </div>
  );
}
export default Login;
