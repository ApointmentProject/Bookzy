import { createContext, useContext, ReactNode, useEffect, useState } from "react";
import { signInWithGoogle as firebaseSignInWithGoogle, logout as firebaseLogout } from "../services/firebase/authService";
import { fetchUserDataFromBackend, signInWithEmailBackend, linkFirebaseToUser } from "../services/auth/authBackend";

export interface AuthUser {
  uid: string;
  profilePic: string;
  email?: string;
  firstName?: string;
  lastName?: string;
}

interface AuthContextProps {
  user: AuthUser | null;
  loading: boolean;
  error: Error | null;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Cargar usuario desde localStorage al iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");

    if (storedUser) {
      try {
        const parsedUser: AuthUser = JSON.parse(storedUser);
        if (parsedUser.uid && parsedUser.uid.trim() !== '') {
          setUser(parsedUser);
        } else {
          localStorage.removeItem("authUser");
        }
      } catch (parseError) {
        localStorage.removeItem("authUser");
      }
    }

    setLoading(false);
  }, []);

  const signInWithGoogle = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const firebaseUser = await firebaseSignInWithGoogle();

      if (!firebaseUser.email) {
        throw new Error("No se pudo obtener el email del usuario de Firebase.");
      }

      let dbUser = await fetchUserDataFromBackend(firebaseUser.email);

      // Vincular UID si no existe
      if (!dbUser.uid || dbUser.uid.trim() === '') {
        dbUser = await linkFirebaseToUser(
          firebaseUser.email,
          firebaseUser.uid,
          firebaseUser.photoURL || ''
        );
      }

      const authUser: AuthUser = {
        uid: dbUser.uid,
        profilePic: dbUser.profilePic,
        email: firebaseUser.email,
      };
      
      localStorage.setItem("authUser", JSON.stringify(authUser));
      setUser(authUser);
      
    } catch (err: unknown) {
      setError(err as Error);
      localStorage.removeItem("authUser");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const dbUser: AuthUser = await signInWithEmailBackend(email, password);

      if (!dbUser.uid || dbUser.uid.trim() === '') {
        throw new Error("Usuario no tiene credenciales de Firebase vinculadas");
      }

      const authUser: AuthUser = {
        ...dbUser,
        email,
      };

      localStorage.setItem("authUser", JSON.stringify(authUser));
      setUser(authUser);
    } catch (err: unknown) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await firebaseLogout();
      localStorage.removeItem("authUser");
      setUser(null);
      setError(null);
    } catch (err: unknown) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  const value: AuthContextProps = {
    user,
    loading,
    error,
    signInWithGoogle,
    signInWithEmail,
    logout,
    clearError
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};