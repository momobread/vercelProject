import { useEffect, useState } from "react";
import { PostDataType } from "../types/Post";
import { Outlet, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { fetchPostDetail } from "../utils/getPost";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { userType } from "../types/user";
import { updatePost } from "../utils/updatePost";
import { deletePost } from "../utils/deletePost";
import DotLoader from "react-spinners/DotLoader";

interface PostWrtie {
  order: number;
}

function DetailPost({ order }: PostWrtie) {
  const params = useParams();
  const postId = params.id;
  const navigate = useNavigate();
  const currentUrl = useLocation().pathname;
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [user, setUser] = useState<userType>({ userId: "", nickname: "", password: "", userNum: 0 });
  const [detailPost, setDetailPost] = useState<PostDataType>({
    content: "",
    date: "",
    nickname: "",
    title: "",
    id: "",
  }); //현재글

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    async function getDetail() {
      if (postId === undefined || null) return;
      const data = await fetchPostDetail(postId, setIsLoading);
      if (!data) {
        navigate("/notpost");
        return;
      }
      setDetailPost(data);
    }
    getDetail();
    if (user === null) return;
    else {
      setUser(JSON.parse(user)[0]);
    }
  }, []);

  const { title, content, date, nickname, order: dataOrder, id } = detailPost;

  function handleDelete() {
    if (postId === undefined) return;
    const deletesuccess = deletePost(postId, order);
    if (!deletesuccess) return;
    navigate("/post");
  }
  function handleRevise() {
    sessionStorage.setItem("post", JSON.stringify(detailPost));
    navigate("update");
    // if (postId === undefined) return;
    // const data = updatePost(postId);
  }

  return (
    <div className="h-full w-full">
      <Header />
      <Nav />

      {!currentUrl.includes("update") ? (
        <div className="flex h-2/3 w-full justify-center bg-slate-500">
          <div className="flex w-post flex-col bg-white p-3">
            <div>
              {user.nickname === nickname ? (
                <>
                  <button onClick={handleDelete} className="bg-red-300">
                    삭제하기
                  </button>
                  <button onClick={handleRevise} className="bg-red-300">
                    수정하기
                  </button>
                </>
              ) : (
                ""
              )}
            </div>
            <div>
              {!isLoading ? (
                <>
                  <p className="text-3xl font-semibold">{title}</p>
                  <span>작성 날짜 :{date}</span>
                  <div>작성자 : {nickname}</div>

                  <div>
                    <span>{content}</span>
                  </div>
                </>
              ) : (
                <div className="top-10 flex w-full justify-center">
                  <DotLoader color="#20cbd3" size={120} />
                </div>
              )}
              {/* // <p className="text-3xl font-semibold">{title}</p>
              // <span>작성 날짜 :{date}</span>
              // <div>작성자 : {nickname}</div>
              //{" "}
              <div>
                // <span>{content}</span>
                //{" "}
              </div> */}
            </div>
          </div>
        </div>
      ) : (
        <Outlet />
      )}

      {/* param이 update가 있으면 Outlet 조건부렌더링 */}
    </div>
  );
}
export default DetailPost;
