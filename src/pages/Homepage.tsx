import Header from "../components/Header";
import Introduce from "../components/Introduce";
import Nav from "../components/Nav";

function Homepage() {
  return (
    <div className="h-window flex w-dvw flex-col items-center">
      <Header />
      <Nav />
      <Introduce />
    </div>
  );
}
export default Homepage;
