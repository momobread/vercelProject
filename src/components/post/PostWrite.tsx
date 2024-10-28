import { FormEvent, useEffect, useRef, useState } from "react";
import Header from "../Header";
import Button from "../Button";
import { Post } from "../../utils/post";

function PostWrite() {
  const Title = useRef<HTMLInputElement>(null);
  const Content = useRef<HTMLTextAreaElement>(null);
  const [postData, setPostData] = useState<any>(null);

  //   console.log(postData);
  function handlePostSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPostData({ title: Title.current?.value, content: Content.current?.value });
  }
  useEffect(() => {
    if (postData === null) return;
    Post(postData);
  }, [postData]);

  return (
    <div className="h-full w-full">
      <Header />
      <div className="flex w-full justify-center">
        <form className="w-post flex flex-col gap-3" onSubmit={handlePostSubmit}>
          <label htmlFor="title">제목</label>
          <input id="title" className="border" ref={Title} />
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            placeholder="내용을 입력하세요"
            className="w-post h-post resize-none border"
            ref={Content}
          ></textarea>
          <label htmlFor="user">작성자</label>
          <input id="user" className="border" />
          <Button text="작성하기" style="basic" />
        </form>
      </div>
    </div>
  );
}
export default PostWrite;
