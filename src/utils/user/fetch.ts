import { userType } from "../../types/user";
import identity from "./identity";

//useState로 일단 불러와서 검사한다
//아니다 그냥 요청을 막 쏴서 검사한다

export default async function userFetch(id: string, password: string) {
  let success = false;

  const USERURL = import.meta.env.VITE_USER_URL;
  try {
    const response = await fetch(`${USERURL}`);
    // console.log(response);
    if (!response.ok) throw new Error("유저 정보를 가져오지 못하였습니다");
    const data = await response.json();

    const result = await identity(data);

    // userChecksuccess = checkUserInfo(data);

    success = true;
    return success;
  } catch (e) {
    console.log(e);
    return success;
  }
}

// function checkUserInfo(data: userType[]) {

//   return userChecksuccess;
// }
