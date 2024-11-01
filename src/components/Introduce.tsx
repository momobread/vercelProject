import { useNavigate } from "react-router-dom";
import Button from "./Button";
import useUser from "../contexts/userContext";

function Introduce() {
  const navigate = useNavigate();
  const { isLogined } = useUser();

  function handleClick() {
    isLogined ? navigate("/post") : navigate("/login");
  }

  return (
    <div id="home_Intro" className="flex h-1/2 w-full flex-col items-center justify-center gap-3">
      <div className="font-hightlight h-10 w-fit rounded-md border px-3 text-center leading-9">
        우리집 고양이를 자랑해보세요
      </div>
      <div className="h-fit w-96 p-2 text-center leading-7">
        당신은 고양이을 키우는 집사이신가요?
        <br />
        그렇다면 좋습니다! 키우고 계신 고양이를 자랑해 보아요
        <br /> 고양이기 세상을 지배한다 냐하
      </div>
      <Button style="basic" text="작성하기" onclick={handleClick} />
    </div>
  );
}
export default Introduce;
