import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import LoginPage from "../pages/LoginPage";
import ChatPage from "../pages/ChatPage";

const ProtectedRoutes = () => {
  // Aquí va la condición. Puede ser una condición de cualquier tipo. Lo que
  // Importa es que valide si el usuario está loggeado o no
  const { auth, verificaToken } = useContext(AuthContext);

  useEffect(() => {
    verificaToken();
    console.log(auth);
  }, []);

  if (auth.logged) {
    return <ChatPage />;
  } else {
    return <Navigate to="/login" />;
  } // Aquí le debemos decir la ruta a la que queremos llevar
}; // al usuario si no está autenticado

export default ProtectedRoutes;
