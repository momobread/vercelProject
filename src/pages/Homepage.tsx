import Header from "../components/Header";
import Introduce from "../components/Introduce";
import Nav from "../components/Nav";

function Homepage() {
  return (
    // <div className="mr-2 flex h-window w-dvw flex-col items-center">
    <div className="h-full w-full">
      <Header />
      <Nav />
      <Introduce />
      {/* 미디어 쿼리 설정하세요 */}
    </div>
  );
}
export default Homepage;
