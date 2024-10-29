import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import { useRef, useState, type FormEvent } from "react";

function Join() {
  const userInform = [{ userId: "momo", password: "1234", userNum: "1", nickname: "모모링" }];
  const navigate = useNavigate();
  window.sessionStorage.setItem("user", JSON.stringify(userInform));

  const IdInput = useRef<HTMLInputElement>(null);
  const PasswordInput = useRef<HTMLInputElement>(null);
  const NicknameInput = useRef<HTMLInputElement>(null);
  const [userNewInform, setUserNewInform] = useState();

  function handleJoinSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className="flex h-full w-full flex-col items-center bg-slate-50">
      <Header />
      <p>회원가입 페이지 입니다</p>
      <div className="w-join" id="joinformwrap">
        <form id="joinform" className="flex flex-col gap-3" onSubmit={handleJoinSubmit}>
          <label htmlFor="id">아이디</label>
          <input id="id" className="border" ref={IdInput} />
          <label htmlFor="password">비밀번호</label>
          <input id="password" className="border" ref={PasswordInput} />
          <label htmlFor="nickname">별명</label>
          <input id="nickname" className="border" ref={NicknameInput} />
          <Button text="작성하기" style="basic" onclick={(e) => navigate("/login")} />
        </form>
      </div>
    </div>
  );
}
export default Join;
