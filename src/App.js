import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "./components/About";
import ForAgents from "./components/ForAgents";
import ForTutors from "./components/ForTutors";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/for-agents" element={<ForAgents />} />
        <Route path="/for-tutors" element={<ForTutors />} />
      </Routes>
    </Layout>
  );
};

export default App;
