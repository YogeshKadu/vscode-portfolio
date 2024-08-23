import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Herosection from "./components/Herosection";
import Myservices from "./components/Myservices";
import MarkdownEditor from "./pages/Markdown/MarkdownEditor";
import Codepen from "./pages/Codepen";
import Home from "./pages/Home";
import Instruction from "./pages/Instruction";
import Contact from "./pages/Contact";
import Experiance from "./pages/Experiance";
import Skills from "./pages/Skills";

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
          <Route index element={<Home />} />
          <Route path="instruction" element={<Instruction />} />
          <Route path="profile" element={<MarkdownEditor />} />
          <Route path="codepen" element={<Codepen />} />
          <Route path="contact" element={<Contact />} />
          <Route path="experiance" element={<Experiance />} />
          <Route path="skills" element={<Skills />} />
        </Route>
      </Routes>
    </>
  )
}