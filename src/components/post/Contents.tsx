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
      <li onClick={handleDetail} className="font-hightlight flex w-post justify-between border text-xl">
        <span className="w-1/12 text-center">{order}</span>
        <span className="w-3/6 border-x">{title}</span>
        <span className="w-1/6">{nickname}</span>
        <span className="w-1/6 border-x">{date}</span>
      </li>
    </>
  );
}
export default Contents;
