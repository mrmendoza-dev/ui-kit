import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Nav/Footer";
import Nav from "./components/Nav/Nav";
import "./css/App.css";
import Apps from "./pages/Apps";
import Examples from "./pages/Examples";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Nav />

      <div className="AppPage">
        {/* <SideNav /> */}

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/examples" element={<Examples />} />

          <Route path="/apps" element={<Apps />} />

          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
