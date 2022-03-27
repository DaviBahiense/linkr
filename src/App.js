import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { useState } from "react";
import LoginContext from "./context/LoginContext.js";
import { Login, Signup, Home } from "./pages"
import { UserProvider } from "./context/UserContext";
import User from "./pages/User/User";

export default function App() {
  const [isLogged, setIsLogged] = useState();

  return (
    <LoginContext.Provider value={{ isLogged, setIsLogged }}>
      <AuthProvider>
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/sign-up" element={<Signup />} />
              <Route path="/home" element={<Home />} />
              <Route path="/user/:id" element={<User />} />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </AuthProvider>
    </LoginContext.Provider> 
  );
}
