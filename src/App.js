import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainComponent from "./components/MainComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [activeTab, setActiveTab] = useState('Alls');
  return(
    <div className="App body">
      <Header/>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Router>
        <Routes>
          <Route path="/" element={<MainComponent activeTab={activeTab}/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
