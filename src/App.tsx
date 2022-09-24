import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './css/App.css'
import Nav from "./components/Nav"
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"
import Examples from "./pages/Examples";
import Settings from "./pages/Settings";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />

      <div className="AppPage">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
