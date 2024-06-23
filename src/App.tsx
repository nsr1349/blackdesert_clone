import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Gay from "./pages/Gay";
import "./App.css";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gay" element={<Gay />} />
      </Routes>
    </Router>
  );
}

export default App;
