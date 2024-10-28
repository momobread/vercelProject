export async function fetchPostDetail(id: string) {
  console.log(id);
  try {
    const URL = "http://localhost:8000/post";
    const response = await fetch(`${URL}/${id}`);

    if (!response.ok) throw new Error("잘못된 응답입니다");

    if (response.ok) {
      const data = await response.json(); //서버의 데이터가 나옴
      console.log(data);
      return data;
    }
  } catch (e) {
    console.log(e);
  }
}
