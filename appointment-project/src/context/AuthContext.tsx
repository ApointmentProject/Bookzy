import { createContext, useContext, ReactNode, useEffect, useState } from "react";
import { signInWithGoogle as firebaseSignInWithGoogle, logout as firebaseLogout } from "../services/firebase/authService";
import { fetchUserDataFromBackend, signInWithEmailBackend, linkFirebaseToUser } from "../services/auth/authBackend";
import { useToast } from "./ToastContext";

export interface AuthUser {
  uid?: string; // ← ya no obligatorio
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
  const { addToast } = useToast();

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
      // 1. Login con Firebase
      const firebaseUser = await firebaseSignInWithGoogle();

      if (!firebaseUser.email) {
        throw new Error("No se pudo obtener el email del usuario de Firebase.");
      }

      // 2. Buscar usuario en la base de datos por email
      let dbUser = await fetchUserDataFromBackend(firebaseUser.email);

      // 3. Verificar si el UID ya está asociado en la BD
      if (!dbUser.uid || dbUser.uid.trim() === '') {
        // 4. Si no está asociado, lo vinculamos
        dbUser = await linkFirebaseToUser(
          firebaseUser.email,
          firebaseUser.uid,
          firebaseUser.photoURL || ''
        );
      }

      // 5. Guardamos el usuario
      const authUser: AuthUser = {
        uid: dbUser.uid,
        profilePic: dbUser.profilePic,
        email: firebaseUser.email,
        firstName: dbUser.firstName,
        lastName: dbUser.lastName,
      };

      localStorage.setItem("authUser", JSON.stringify(authUser));
      setUser(authUser);

      // 6. Toast de éxito
      addToast({
        type: "success",
        title: "Inicio de sesión exitoso",
        message: `¡Bienvenido${authUser.firstName ? `, ${authUser.firstName}` : ""}!`,
      });

    } catch (err: unknown) {
      setError(err as Error);
      localStorage.removeItem("authUser");
      setUser(null);

      // Opcional: Toast de error
      addToast({
        type: "error",
        title: "Error de inicio con Google",
        message: (err as Error).message || "Ocurrió un error inesperado",
      });

    } finally {
      setLoading(false);
    }
  };


  const signInWithEmail = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const dbUser: AuthUser = await signInWithEmailBackend(email, password);
      const authUser: AuthUser = { ...dbUser, email };

      localStorage.setItem("authUser", JSON.stringify(authUser));
      setUser(authUser);

      // ✅ Toast de éxito
      addToast({
        type: "success",
        title: "Inicio de sesión exitoso",
        message: `¡Bienvenido${authUser.firstName ? `, ${authUser.firstName}` : ""}!`,
      });

    } catch (err: any) {
      addToast({
        type: "error",
        title: "Error de inicio de sesión",
        message: err.message || "Verifica tus credenciales.",
      });
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