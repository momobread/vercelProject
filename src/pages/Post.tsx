import { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import ContentsList from "../components/post/ContentsList";
import DotLoader from "react-spinners/DotLoader";
import { PostDataType } from "../types/Post";
interface PostProps {
  setOrder: (order: number) => void;
}

function Post({ setOrder }: PostProps) {
  const [isLoader, setIsLoader] = useState<boolean>(true);
  const [data, setData] = useState<PostDataType[]>([]);

  useEffect(() => {
    const POSTURL = import.meta.env.VITE_POST_URL;
    async function fetchPost() {
      setIsLoader(true);
      try {
        const response = await fetch(POSTURL);
        if (!response.ok) throw new Error("잘못된 응답입니다");
        if (response.ok) {
          const data = await response.json(); //서버의 데이터가 나옴
          setData(data);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoader(false);
      }
    }
    fetchPost();
  }, []);
  return (
    <div className="bg-slate-10 h-full w-full">
      <Header />
      <Nav />
      {/* 데이터가 도착이 덜했으면 <Loader></Loader> */}
      {isLoader ? <DotLoader /> : <ContentsList setOrder={setOrder} data={data} />}
    </div>
  );
}
export default Post;
