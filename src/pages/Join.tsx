import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Join() {
  const userInform = [{ userId: "momo", password: "1234", userNum: "1", nickname: "모모링" }];
  const navigate = useNavigate();
  window.sessionStorage.setItem("user", JSON.stringify(userInform));

  // window.sessionStorage.setItem("password", "1234");
  //   window.
  return (
    <div className="">
      <div>
        <p>회원가입 페이지 입니다</p>
        <p>회원가입 완료</p>
        <p>아이디 : momo</p>
        <p>비밀번호 : 1234</p>
      </div>
      <Button text="회원가입 완료" style="basic" onclick={() => navigate("/login")} />
    </div>
  );
}
export default Join;
