import { FormEvent, useEffect, useRef } from "react";
import Button from "../Button";
import { useParams } from "react-router-dom";

function PostUpdate() {
  const data = JSON.parse(sessionStorage.getItem("post"));
  const postId = useParams();
  console.log(postId);

  const Title = useRef<HTMLInputElement>(null);
  const Content = useRef<HTMLTextAreaElement>(null);
  const Nickname = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (Title.current === null || Content.current === null || Nickname.current === null) return;
    Title.current.value = data.title;
    Content.current.value = data.content;
    Nickname.current.value = data.nickname;
  }, []);

  function handleUpdateSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(Title.current.value);
    //여기서부터 다시 시작하세요!
  }

  return (
    <div className="">
      <div className="flex w-full justify-center">
        <form className="flex w-post flex-col gap-3" onSubmit={handleUpdateSubmit}>
          <label htmlFor="title">제목</label>
          <input id="title" className="border" ref={Title} />
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            placeholder="내용을 입력하세요"
            className="h-post w-post resize-none border"
            ref={Content}
          ></textarea>
          <label htmlFor="user">작성자</label>
          <input id="user" className="border" ref={Nickname} />
          <Button text="작성하기" style="basic" />
        </form>
      </div>
    </div>
  );
}
export default PostUpdate;
