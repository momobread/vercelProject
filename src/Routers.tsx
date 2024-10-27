import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import { UserContextProvider } from "./contexts/userContext";
import Join from "./pages/Join";
import OauthKakao from "./components/Login/OauthKakao";

function Routers() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/login" element={<Login />} />
          {/* <Route path="/login/oauth/kakao" element={<OauthKakao />} /> */}

          <Route path="/join" element={<Join />} />

          <Route path="/post" element={<p>post:작성하기 페이지 입니다</p>} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}
export default Routers;
