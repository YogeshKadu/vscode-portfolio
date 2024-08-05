import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Herosection from "./components/Herosection";
import Myservices from "./components/Myservices";
import MarkdownEditor from "./pages/Markdown/MarkdownEditor";
import Codepen from "./pages/Codepen";

const Normal = () => {
  return <div className="relative w-full min-h-svh bg-base-100 font-Quicksand" data-theme="light">
    <canvas className="absolute z-0 w-full h-full"></canvas>
    <div className="z-10">
      <Herosection />
      <Myservices />
    </div>
  </div>
}

export default function App() {
  return (
    <>
      {/* <Layout /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MarkdownEditor />} />
          <Route path="codepen" element={<Codepen />} />
        </Route>
      </Routes>
    </>
  )
}