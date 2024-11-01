import { type FormEvent, useEffect, useRef, useState } from "react";
import Button from "../Button";
import Contents from "./Contents";
import { useNavigate } from "react-router-dom";
import { PostDataType } from "../../types/Post";

interface ContentsListProps {
  setOrder: (order: number) => void;
  data: PostDataType[];
}

function ContentsList({ setOrder, data }: ContentsListProps) {
  const navigate = useNavigate();
  console.log(data);
  useEffect(() => {
    const order = data.length;
    setOrder(order);
  }, [data]);

  function handlePostButton(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    navigate("/post/write");
  }

  return (
    <div className="item flex h-full flex-col items-center text-base">
      <div id="contents" className="mt-8 flex h-3/4 w-full flex-col items-center gap-2">
        {/* nav */}
        <div id="postformwrap" className="h-post w-post border-b border-gray-800 bg-slate-50">
          <li className="flex h-10 w-post justify-between border-y border-gray-800 font-semibold">
            <span className="w-1/12 text-center text-sm font-semibold leading-9">번호</span>
            <span className="w-3/6 border-x text-center font-semibold leading-9">내용</span>
            <span className="w-1/6 text-center font-semibold leading-9">작성자</span>
            <span className="w-1/6 border-x text-center font-semibold leading-9">날짜</span>
          </li>
          {/* content */}
          <div className="mb-2 h-post w-post border-b border-gray-800 bg-white" id="postform">
            <ul className="w-full">
              {data && data.map((post: PostDataType) => <Contents key={post.id} post={post} />)}
            </ul>
          </div>
          <Button text="글쓰기" style="basic" onclick={(e) => handlePostButton(e)} />
        </div>
        {/* number */}
        {/* <div className="border-y border-slate-600 bg-white">
          <ul className="flex justify-center">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div> */}
        {/*  */}
      </div>
      {/* <Button text="글쓰기" style="basic" onclick={(e) => handlePostButton(e)} /> */}
    </div>
  );
}
export default ContentsList;
