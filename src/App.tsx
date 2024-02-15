import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Page";
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<h1>Hello</h1>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
