import { useNavigate } from "react-router-dom";

export async function fetchPostDetail(id: string, setIsLoding: (v: boolean) => void) {
  setIsLoding(true);
  try {
    // setIsLoding(true);
    const POSTURL = import.meta.env.VITE_POST_URL;
    const response = await fetch(`${POSTURL}/${id}`);

    if (!response.ok) {
      throw new Error("잘못된 응답입니다");
    }

    if (response.ok) {
      const data = await response.json(); //서버의 데이터가 나옴
      return data;
    }
  } catch (e) {
    console.log(e);
  } finally {
    setIsLoding(false);
  }
}
