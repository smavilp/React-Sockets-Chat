import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ChatPage from "./pages/ChatPage";
import AuthLayout from "./layout/AuthLayout";
import { AuthProvider } from "./auth/AuthContext";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { SocketProvider } from "./context/SocketContext";

const App = () => {
  return (
    <AuthProvider>
      <SocketProvider>
        <HashRouter>
          <Routes>
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<ChatPage />} />
            </Route>
          </Routes>
        </HashRouter>
      </SocketProvider>
    </AuthProvider>
  );
};

export default App;
