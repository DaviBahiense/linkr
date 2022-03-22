import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { useState } from "react";
import LoginContext from "./context/LoginContext.js";
import { Login, Signup } from "./pages"


export default function App() {
  const [isLogged, setIsLogged] = useState();

  return (
    <LoginContext.Provider value={{ isLogged, setIsLogged }}>
      <AuthProvider> 
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
          </Routes>
        </BrowserRouter>
       </AuthProvider>
    </LoginContext.Provider> 
  );
}
