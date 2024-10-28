import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import { UserContextProvider } from "./contexts/userContext";
import Join from "./pages/Join";

import Post from "./pages/Post";
import PostWrite from "./components/post/PostWrite";

function Routers() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/login" element={<Login />} />
          {/* <Route path="/login/oauth/kakao" element={<OauthKakao />} /> */}

          <Route path="/join" element={<Join />} />

          <Route path="/post" element={<Post />} />
          <Route path="/post/write" element={<PostWrite />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}
export default Routers;
