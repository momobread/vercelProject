import { PostDataType } from "../types/Post";

export async function Post(data: PostDataType) {
  let Postsuccess = false;

  // console.log(data);
  if (data.title === "" || data.content === "" || data.date === "" || data.nickname === "") return Postsuccess;

  try {
    const response = await fetch("http://localhost:8000/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("응답이 잘못되었습니다");
    Postsuccess = true;
  } catch (e) {
    console.log(e);
    return Postsuccess;
  }
  return Postsuccess;
}
