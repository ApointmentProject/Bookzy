import { createContext, useContext, ReactNode, useEffect, useState } from "react";
import { signInWithGoogle as firebaseSignInWithGoogle, logout as firebaseLogout } from "../services/firebase/authService";
import { fetchUserDataFromBackend, signInWithEmailBackend } from "../services/auth/authBackend";

export interface AuthUser {
  uid: string;
  profilePic: string;
  // Puedes agregar más propiedades según lo que retorne tu API
}

interface AuthContextProps {
  user: AuthUser | null;
  loading: boolean;
  error: Error | null;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Cargar usuario almacenado en localStorage al iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const signInWithGoogle = async () => {
    try {
      // Inicia sesión con Google mediante Firebase
      const uid = await firebaseSignInWithGoogle();
      // Después del login, se debe obtener la info del usuario desde tu backend.
      // Se asume que firebaseSignInWithGoogle deja disponible el uid de Firebase o algún identificador
      // que puedas usar para obtener la información completa desde tu backend.
      // Por ejemplo, podrías extraer el uid de firebase o pasarlo como argumento.
      if (!uid) {
        throw new Error("UID is undefined");
      }
      const dbUser: AuthUser = await fetchUserDataFromBackend(uid);
      localStorage.setItem("authUser", JSON.stringify(dbUser));
      setUser(dbUser);
    } catch (err: unknown) {
      setError(err as Error);
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    try {
      const dbUser: AuthUser = await signInWithEmailBackend(email, password);
      localStorage.setItem("authUser", JSON.stringify(dbUser));
      setUser(dbUser);
    } catch (err: unknown) {
      setError(err as Error);
    }
  };

  const logout = async () => {
    try {
      // Si usas Firebase para Google, se cierra sesión en Firebase
      await firebaseLogout();
      localStorage.removeItem("authUser");
      setUser(null);
    } catch (err: unknown) {
      setError(err as Error);
    }
  };

  const value: AuthContextProps = { user, loading, error, signInWithGoogle, signInWithEmail, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};
