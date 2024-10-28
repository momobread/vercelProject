import { FormEvent, useEffect, useRef, useState } from "react";
import Button from "../Button";
import { useNavigate, useParams } from "react-router-dom";
import { updatePost } from "../../utils/updatePost";
import { PostDataType } from "../../types/Post";

function PostUpdate() {
  const data = JSON.parse(sessionStorage.getItem("post"));
  const postId = data.id; //데이터 아이디
  const navigate = useNavigate();
  const order = data.order;
  console.log(data);
  console.log(postId);

  const Title = useRef<HTMLInputElement>(null);
  const Content = useRef<HTMLTextAreaElement>(null);
  const Nickname = useRef<HTMLInputElement>(null);

  const [updateData, setUpdateData] = useState<PostDataType | null>(null);
  const [isUpdateSuccess, setIsUpdateSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (Title.current === null || Content.current === null || Nickname.current === null) return;
    Title.current.value = data.title;
    Content.current.value = data.content;
    Nickname.current.value = data.nickname;
  }, []);

  useEffect(() => {
    async function UpdateSuccess() {
      if (updateData === null) return;
      const updateSuccess = await updatePost(postId, updateData);
      console.log(updateSuccess);
      setIsUpdateSuccess(updateSuccess);
    }
    UpdateSuccess();
  }, [updateData]);

  useEffect(() => {
    if (isUpdateSuccess) {
      navigate("/post");
      setIsUpdateSuccess(false);
    }
  }, [isUpdateSuccess]);

  function handleUpdateSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (Title.current === null || Content.current === null || Nickname.current === null) return;
    const date = new Date().toISOString().split("T")[0];
    setUpdateData({
      id: postId,
      title: Title.current.value,
      content: Content.current.value,
      nickname: Nickname.current.value,
      date: date,
      order: order,
    });

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
