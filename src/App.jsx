import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./pages/Login Page/LoginPage";
import MainPage from "./pages/Main Page/MainPage";
import UserContext from "./features/context/UserContext";
function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/main-page" element={<MainPage />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
