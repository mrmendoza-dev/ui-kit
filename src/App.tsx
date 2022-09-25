import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './css/App.css'
import Nav from "./components/Nav"
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"
import Examples from "./pages/Examples";
import Settings from "./pages/Settings";
import SideNav from "./components/SideNav";
import Form from "./components/Form";
import Buttons from "./components/Buttons";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />

      <div className="AppPage">
        {/* <SideNav /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/examples" element={<Examples />} />

          <Route path="/examples" element={<Examples />} />
          <Route
            path="/examples/forms"
            element={<Form />}
          />
          <Route path="/examples/buttons" element={<Buttons />} />

          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
