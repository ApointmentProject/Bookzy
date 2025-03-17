import { createContext, useContext, ReactNode } from "react";
import { auth } from "../firebase/firebase";
import { signInWithGoogle as firebaseSignInWithGoogle, logout as firebaseLogout } from "../firebase/authService";
import { useAuthState } from "react-firebase-hooks/auth";
import { User } from "firebase/auth";

interface AuthContextProps {
    user: User | null;
    loading: boolean;
    error: Error | undefined;
    signInWithGoogle: () => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, loading, error] = useAuthState(auth);

    const signInWithGoogle = async () => {
        try {
            await firebaseSignInWithGoogle();
        } catch (err) {
            console.error("Error en signInWithGoogle:", err);
        }
    };

    const logout = async () => {
        try {
            await firebaseLogout();
        } catch (err) {
            console.error("Error al cerrar sesión:", err);
        }
    };

    const value: AuthContextProps = { user: user ?? null, loading, error, signInWithGoogle, logout };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth debe ser usado dentro de un AuthProvider");
    }
    return context;
};
