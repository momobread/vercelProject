export async function deletePost(id: string, order: number) {
  let deletesuccess = false;
  console.log(order);
  try {
    //1.해당 데이터 삭제
    const POSTURL = import.meta.env.VITE_POST_URL;
    const response = await fetch(`${POSTURL}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) throw new Error("삭제를 실패했습니다.");

    //데이터삭제는 성공
    try {
      //2. 원래 데이터 받아오기
      const response2 = await fetch(`${POSTURL}`);
      if (!response2.ok) throw new Error("다시 데이터를 받아오는데 실패했습니다");
      const data = await response2.json();
      //순서 재배치
      const NewOrderData = data.map((v, i) => ({ ...v, order: i + 1 }));

      console.log(NewOrderData);
      //다시 put
      NewOrderData.forEach((v, i) => {
        fetch(`${POSTURL}/${v.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(v),
        })
          .then((response) => {
            if (!response.ok) throw new Error("데이터 재배치에 실패했습니다.");
          })
          .catch((e) => {
            console.log(e);
            return deletesuccess;
          });
      });
      deletesuccess = true;
      return deletesuccess;

      // 다시 데이터 받아오기 실패
    } catch (e) {
      console.log(e);
      return deletesuccess;
    }
  } catch (e) {
    console.log(e);
    return deletesuccess;
  }
}
