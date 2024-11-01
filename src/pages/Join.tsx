import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { userType } from "../types/user";
import { userCreate } from "../utils/user/create";

function Join() {
  const userInform = [{ userId: "momo", password: "1234", userNum: "1", nickname: "모모링" }];
  const navigate = useNavigate();
  window.sessionStorage.setItem("user", JSON.stringify(userInform));

  const IdInput = useRef<HTMLInputElement>(null);
  const PasswordInput = useRef<HTMLInputElement>(null);
  const NicknameInput = useRef<HTMLInputElement>(null);
  const [userNewInform, setUserNewInform] = useState<userType | null>(null);

  function handleJoinSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (NicknameInput.current === null || PasswordInput.current === null || IdInput.current === null) return;
    setUserNewInform({
      nickname: NicknameInput.current.value,
      password: PasswordInput.current.value,
      userId: IdInput.current.value,
      userNum: 1,
    });
  }

  useEffect(() => {
    async function create() {
      if (userNewInform === null) return;
      const createSuccess = await userCreate(userNewInform);
      if (!createSuccess) return;
      navigate("/login");
    }

    create();
  }, [userNewInform]);

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
          <Button text="작성하기" style="basic" />
        </form>
      </div>
    </div>
  );
}
export default Join;
