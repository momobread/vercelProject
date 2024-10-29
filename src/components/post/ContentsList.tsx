import { type FormEvent, useEffect, useRef, useState } from "react";
import Button from "../Button";
import Contents from "./Contents";
import { useNavigate } from "react-router-dom";
import { PostDataType } from "../../types/Post";

interface ContentsListProps {
  setOrder: (order: number) => void;
}

function ContentsList({ setOrder }: ContentsListProps) {
  const [data, setData] = useState<any>("");
  const navigate = useNavigate();
  // const [order, setOrder] = useState<number>(0);

  useEffect(() => {
    const POSTURL = import.meta.env.VITE_POST_URL;
    async function fetchPost() {
      try {
        const response = await fetch(POSTURL);

        if (!response.ok) throw new Error("잘못된 응답입니다");

        if (response.ok) {
          const data = await response.json(); //서버의 데이터가 나옴
          // console.log(data);
          setData(data);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchPost();
  }, []);

  useEffect(() => {
    const order = data.length;
    setOrder(order);
  }, [data]);

  function handlePostButton(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    navigate("/post/write");
  }

  return (
    <div className="item flex h-full flex-col items-center">
      <div id="contents" className="mb-2 mt-8 flex h-fit w-full flex-col items-center gap-2 border-slate-300">
        {/*  */}
        <div id="postformwrap" className="h-post w-post border-b border-gray-800 bg-slate-50">
          <li className="flex w-post justify-between border-y border-gray-800">
            <span className="w-7 text-center">번호</span>
            <span className="w-3/6 border-x text-center">내용</span>
            <span className="w-1/6 text-center">작성자</span>
            <span className="w-1/6 border-x text-center">날짜</span>
          </li>

          <ul id="postform" className="w-postp-1">
            {data && data.map((post: PostDataType) => <Contents key={post.id} post={post} />)}
          </ul>
        </div>
        <div className="border-y border-slate-600 bg-white">
          <ul className="flex justify-center">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
        {/*  */}
      </div>
      <Button text="글쓰기" style="basic" onclick={(e) => handlePostButton(e)} />
    </div>
  );
}
export default ContentsList;
