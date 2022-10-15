import { useState } from 'react'
import './css/App.css'
import Nav from "./components/Nav"
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"
import Examples from "./pages/Examples";
import Apps from "./pages/Apps";
import Settings from "./pages/Settings";
import SideNav from "./components/SideNav";
import Form from "./components/Form";
import Buttons from "./components/Buttons";
import Counter from "./apps/Counter";

import {navLinks, exampleLinks, appLinks} from "./routing"
function App() {
  const [count, setCount] = useState(0)




  return (
    <div className="App">
      <Nav links={navLinks} />

      <div className="AppPage">
        {/* <SideNav /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/examples" element={<Examples links={exampleLinks} />} />
          <Route path="/examples/forms" element={<Form />} />
          <Route path="/examples/buttons" element={<Buttons />} />

          <Route path="/apps" element={<Apps links={appLinks} />} />
          <Route path="/apps/counter" element={<Counter />} />

          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
