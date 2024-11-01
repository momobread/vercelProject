import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

function Nav() {
  const navigate = useNavigate();
  return (
    <div id="nav" className="flex w-full bg-basic">
      <ul className="flex w-full justify-center">
        {/* lineheight 36 font 16 */}
        <li
          className="h-10 w-40 border-l border-white text-center text-base font-semibold leading-9"
          onClick={(e) => navigate("/post")}
        >
          post
        </li>
        <li
          className="h-10 w-40 border-x border-white text-center text-base font-semibold leading-9"
          onClick={(e) => navigate("")}
        >
          picture
        </li>
        <li
          className="h-10 w-40 border-r border-white text-center text-base font-semibold leading-9"
          onClick={(e) => navigate("")}
        >
          Q&A
        </li>
        <li
          className="h-10 w-40 border-r border-white text-center text-base font-semibold leading-9"
          onClick={(e) => navigate("/login")}
        >
          Login
        </li>
      </ul>
    </div>
  );
}

export default Nav;
