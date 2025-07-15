
import { auth } from "./firebase"
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

interface ProviderData {
  providerId: string;
  uid: string;
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
}

export interface FirebaseUserInfo {
  uid: string;
  email: string;
  displayName: string | null;
  photoURL: string | null;
}

// Clase para almacenar y gestionar los datos de providerData
class UserProviderData {
  providerData: ProviderData[];

  constructor(firebaseUser: { providerData: ProviderData[] }) {
    // Se asume que firebaseUser.providerData es un arreglo de objetos
    this.providerData = firebaseUser.providerData.map((provider: ProviderData) => ({
      providerId: provider.providerId,
      uid: provider.uid,
      displayName: provider.displayName,
      email: provider.email,
      phoneNumber: provider.phoneNumber,
      photoURL: provider.photoURL,
    }));
  }
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