import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use `Routes` and `BrowserRouter` in v6
import NavBar from "./components/NavBar";
import ExternalApi from "./views/ExternalApi";
import Home from "./views/Home";

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading... </div>;
  }

  return (
    <Router>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        {}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/external-api" element={<ExternalApi />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
