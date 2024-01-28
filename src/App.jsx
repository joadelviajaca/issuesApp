import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Issues from "./components/Issues";
import IssuesForm from "./components/IssuesForm";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<Home />}></Route>
          <Route path="issues" element={<Issues />}></Route>
          <Route path="issues/add" element={<IssuesForm />}></Route>
          <Route path="issues/:id" element={<IssuesForm />}></Route>
        </Route>
      </Routes>
    </Router>
  )
}


export default App;