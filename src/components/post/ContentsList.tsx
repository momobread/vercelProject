import { type FormEvent, useEffect, useState } from "react";
import Button from "../Button";
import Contents from "./Contents";
import { useNavigate } from "react-router-dom";

function ContentsList() {
  const [data, setData] = useState<any>("");
  const navigate = useNavigate();
  useEffect(() => {
    const URL = "http://localhost:8000/post";
    async function fetchPost() {
      try {
        const response = await fetch(URL);

        if (!response.ok) throw new Error("잘못된 응답입니다");

        if (response.ok) {
          const data = await response.json();
          setData(data);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchPost();
  }, []);

  function handlePostButton(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    navigate("/post/write");
  }

  return (
    <div className="item flex h-full flex-col items-center bg-red-300">
      <div id="contents" className="h-fit border-y">
        {/*  */}
        <div className="w-post h-post bg-amber-200">
          <li className="w-post border-gray-800k flex justify-between border">
            <span className="w-7">번호</span>
            <span className="w-3/6">내용</span>
            <span className="w-1/6">작성자</span>
            <span className="w-1/6">날짜</span>
          </li>

          <ul className="w-post bg-white">{data && data.map((post) => <Contents post={post} />)}</ul>
        </div>
        <div className="bg-white">
          <ul className="flex">
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
