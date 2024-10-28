import { useEffect, useState } from "react";
import { PostDataType } from "../types/Post";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchPostDetail } from "../utils/getPost";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { userType } from "../types/user";

function DetailPost() {
  const params = useParams();
  const id = params.id;
  const [user, setUser] = useState<userType>({ id: "", nickname: "", password: "", userNum: "0" });
  const [detailPost, setDetailPost] = useState<PostDataType>({
    content: "",
    date: "",
    nickname: "",
    title: "",
  });

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    async function getDetail() {
      if (id === undefined) return;
      const data = await fetchPostDetail(id);
      setDetailPost(data);
    }
    getDetail();
    if (user === null) return;
    else {
      setUser(JSON.parse(user)[0]);
    }
  }, []);

  const { title, content, date, nickname, order } = detailPost;

  function handleDelete() {
    console.log("삭제하기");
  }
  function handleRevise() {
    console.log("수정하기");
  }

  return (
    <div className="h-full w-full">
      <Header />
      <Nav />
      <div>{nickname}</div>
      <div>
        {user.nickname === nickname ? (
          <>
            <button onClick={handleDelete} className="bg-red-300">
              삭제하기
            </button>
            <button onClick={handleRevise} className="bg-red-300">
              수정하기
            </button>
          </>
        ) : (
          ""
        )}
      </div>

      <div>
        <span>{title}</span>
        <span>{date}</span>
        <span>{content}</span>
      </div>
    </div>
  );
}
export default DetailPost;
