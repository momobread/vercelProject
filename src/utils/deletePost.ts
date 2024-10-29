export async function deletePost(id: string) {
  let deletesuccess = false;
  try {
    const POSTURL = import.meta.env.VITE_POST_URL;
    const response = await fetch(`${POSTURL}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) throw new Error("삭제를 실패했습니다.");

    if (response.ok) {
      deletesuccess = true;
      return deletesuccess;
    }
  } catch (e) {
    console.log(e);
    return deletesuccess;
  }
}
