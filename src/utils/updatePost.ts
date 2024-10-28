export async function updatePost(postId: string) {
  console.log(postId);

  let updateSuccess = false;
  try {
    const response = await fetch(`http://localhost:8000/post/${postId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("응답이 잘못되었습니다");
    updateSuccess = true;
  } catch (e) {
    console.log(e);
    return updateSuccess;
  }
}
