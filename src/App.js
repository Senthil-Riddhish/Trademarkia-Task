import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Climate from './Comp/Climate';
import ButtonSwitch from "./Comp/ButtonSwitch";
import Storage from "./Comp/Storage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Climate />} />
        <Route path="/Storage" element={<Storage />} />
      </Routes>
    </Router>
  );
}

export default App;
