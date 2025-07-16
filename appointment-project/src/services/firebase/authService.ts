
import { auth } from "./firebase"
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

export interface FirebaseUserInfo {
  uid: string;
  email: string;
  displayName: string | null;
  photoURL: string | null;
}


const provider = new GoogleAuthProvider();

export async function signInWithGoogle(): Promise<FirebaseUserInfo> {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    if (!user.email) {
      throw new Error("No se pudo obtener el email del usuario");
    }

    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
  } catch (error) {
    console.error("Error al iniciar sesión con Google:", error);
    throw error;
  }
}


export async function logout() {
  try {
    await signOut(auth);
    console.log("Sesión cerrada");
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
}