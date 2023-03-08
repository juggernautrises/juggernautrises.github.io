import { Route, Routes } from "react-router"
import Home from "./components/Home"
import SandBox from "./components/SandBox"
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sandbox" element={<SandBox />} />
    </Routes>

  )
}


