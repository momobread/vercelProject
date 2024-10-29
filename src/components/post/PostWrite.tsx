import { FormEvent, useEffect, useRef, useState } from "react";
import Header from "../Header";
import Button from "../Button";
import { Post } from "../../utils/post";
import { PostDataType } from "../../types/Post";
import { useNavigate } from "react-router-dom";

interface PostWrtie {
  order: number;
}

function PostWrite({ order }: PostWrtie) {
  console.log(order);

  const Title = useRef<HTMLInputElement>(null);
  const Content = useRef<HTMLTextAreaElement>(null);
  const Nickname = useRef<HTMLInputElement>(null);
  const [postData, setPostData] = useState<PostDataType | null>(null);
  const [isPostSuccess, setIsPostSuccess] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function PostSuccess() {
      if (postData === null) return;
      const postSuccess = await Post(postData);
      setIsPostSuccess(postSuccess);
    }
    PostSuccess();
  }, [postData]);

  useEffect(() => {
    if (isPostSuccess) {
      navigate("/post");
      setIsPostSuccess(false);
    }
  }, [isPostSuccess]);

  function handlePostSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (Title.current === null || Content.current === null || Nickname.current === null) return;
    const date = new Date().toISOString().split("T")[0];

    setPostData({
      title: Title.current.value,
      content: Content.current.value,
      nickname: Nickname.current.value,
      date: date,
      id: new Date().getTime().toString(),
      order: order + 1,
    });
  }

  // ////////////////////

  return (
    <div className="h-full w-full p-1">
      <Header />
      <div id="writeformwrap" className="flex w-full justify-center p-1">
        <form id="writeform" className="flex w-post flex-col gap-3" onSubmit={handlePostSubmit}>
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
export default PostWrite;
