import { useEffect } from "react";

interface ContentsType {
  post: any;
}

function Contents({ post }: ContentsType) {
  const { title, name, date, order } = post;
  return (
    <>
      <li className="w-post border-gray-800k flex justify-between border">
        <span className="w-7">{order}</span>
        <span className="w-3/6">{title}</span>
        <span className="w-1/6">{name}</span>
        <span className="w-1/6">{date}</span>
      </li>
    </>
  );
}
export default Contents;
