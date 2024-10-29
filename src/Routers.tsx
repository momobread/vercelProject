import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import { UserContextProvider } from "./contexts/userContext";
import Join from "./pages/Join";

import Post from "./pages/Post";
import PostWrite from "./components/post/PostWrite";
import { useState } from "react";
import DetailPost from "./pages/DetailPost";
import PostUpdate from "./components/post/PostUpdate";

function Routers() {
  const [order, setOrder] = useState<number>(0);

  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/login" element={<Login />} />
          {/* <Route path="/login/oauth/kakao" element={<OauthKakao />} /> */}

          <Route path="/join" element={<Join />} />

          <Route path="/post" element={<Post setOrder={setOrder} />} />
          <Route path="/post/:id" element={<DetailPost order={order} />}>
            <Route path="update" element={<PostUpdate />} />
          </Route>
          <Route path="/post/write" element={<PostWrite order={order} />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}
export default Routers;
