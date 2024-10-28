import Header from "../components/Header";
import Nav from "../components/Nav";
import ContentsList from "../components/post/ContentsList";

function Post() {
  return (
    <div className="bg-slate-10 h-full w-full">
      <Header />
      <Nav />
      <ContentsList />
    </div>
  );
}
export default Post;
