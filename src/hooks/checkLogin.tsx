import { useNavigate } from "react-router-dom";
import useUser from "../contexts/userContext";

function checkLogin() {
  const { id, password, isLogined, dispatch } = useUser();

  const GetStorageId = localStorage.getItem("id");
  const GetStoragePassword = localStorage.getItem("password");

  const navigate = useNavigate();

  if (GetStorageId === id && password === GetStoragePassword) {
    dispatch({ type: "isLogined", isLogined: true });
  } else if (GetStorageId === id && password === password) {
    // 잘못된 비밀번호
  } else {
    console.log("회원가입");
    navigate("/join");
  }
  //로컬스트로리지에서 있는지 찾아보기

  return;
}
export default checkLogin;
