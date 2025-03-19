
import { auth } from "./firebase"
import { GoogleAuthProvider,signInWithPopup, signOut} from "firebase/auth";
interface ProviderData {
    providerId: string;
    uid: string;
    displayName: string | null;
    email: string | null;
    phoneNumber: string | null;
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

export async function signInWithGoogle() {
    try {
        const result = await signInWithPopup(auth, provider);
        // El usuario ya se logueó
        // result.user contiene la información del usuario
        console.log(result.user);
        // const userProviderData = new UserProviderData(result.user);
        return result.user.uid;
    } catch (error) {
        console.error("Error al iniciar sesión con Google:", error);
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