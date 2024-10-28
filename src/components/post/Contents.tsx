import { useEffect } from "react";
import { PostDataType } from "../../types/Post";
import { useNavigate } from "react-router-dom";

interface ContentsType {
  post: PostDataType;
}

function Contents({ post }: ContentsType) {
  const { title, nickname, date, order, id } = post;
  const navigate = useNavigate();
  function handleDetail() {
    navigate(`/post/${id}`);
  }

  return (
    <>
      <li onClick={handleDetail} className="border-gray-800k flex w-post justify-between border">
        <span className="w-7">{order}</span>
        <span className="w-3/6">{title}</span>
        <span className="w-1/6">{nickname}</span>
        <span className="w-1/6">{date}</span>
      </li>
    </>
  );
}
export default Contents;
