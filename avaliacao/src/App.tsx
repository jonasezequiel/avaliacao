import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Shares from "./assets/Pages/Share/Share"


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Share" element={<Shares/>} />
      </Routes>
    </Router>
  );
};

export default App;
