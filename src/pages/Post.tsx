import Header from "../components/Header";
import Nav from "../components/Nav";
import ContentsList from "../components/post/ContentsList";

interface PostProps {
  setOrder: (order: number) => void;
}

function Post({ setOrder }: PostProps) {
  return (
    <div className="bg-slate-10 h-full w-full">
      <Header />
      <Nav />
      <ContentsList setOrder={setOrder} />
    </div>
  );
}
export default Post;
