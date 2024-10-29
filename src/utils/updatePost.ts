import { PostDataType } from "../types/Post";

export async function updatePost(postId: string, data: PostDataType) {
  console.log(postId);
  const POSTURL = import.meta.env.VITE_POST_URL;
  let updateSuccess = false;
  try {
    const response = await fetch(`${POSTURL}/${postId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log(response);
    if (!response.ok) throw new Error("응답이 잘못되었습니다");
    updateSuccess = true;
    return updateSuccess;
  } catch (e) {
    console.log(e);
    return false;
  }
}
