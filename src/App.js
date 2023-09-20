import React from "react";
import './App';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormLogin from './components/FormLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormLogin />} />
      </Routes>
    </Router>
  );
}
export default App;
