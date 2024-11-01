import { Link } from "react-router-dom";

function Header() {
  return (
    //테두리 밑이 안먹힘
    <div className="flex h-header w-full items-center justify-center">
      <Link to="/">
        <p className="h-fit w-fit p-3">
          <span className="font-hightlight text-highlight text-6xl font-bold">우리집 고양이</span>
        </p>
      </Link>
    </div>
  );
}
export default Header;
