import { useState } from "react";
import Routers from "./Routers";
import { BasicLayout, Layout } from "./styles/layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Routers />
    </Layout>
  );
}

export default App;
