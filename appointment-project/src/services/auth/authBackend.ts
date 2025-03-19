// services/authBackend.ts

export interface AuthUser {
    uid: string;
    profilePic: string;
}

export async function signInWithEmailBackend(email: string, password: string): Promise<AuthUser> {
    try {
        // Reemplaza la URL con el endpoint de tu API
        const response = await fetch("https://tu-api.com/api/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error("Error en la autenticación");
        }

        const data = await response.json();

        // Se asume que la respuesta de tu API tiene las propiedades 'uid' y 'profilePic'
        const authUser: AuthUser = {
            uid: data.uid,
            profilePic: data.profilePic,
        };

        return authUser;
    } catch (error) {
        console.error("Error en signInWithEmailBackend:", error);
        throw error;
    }
}


export async function fetchUserDataFromBackend(uid: string): Promise<AuthUser> {
    try {
        // Reemplaza la URL con el endpoint correspondiente de tu API
        const response = await fetch(`https://tu-api.com/api/users/${uid}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Error al obtener los datos del usuario");
        }

        const data = await response.json();

        // Se asume que la respuesta de la API retorna un objeto con 'uid' y 'profilePic'
        const user: AuthUser = {
            uid: data.uid,
            profilePic: data.profilePic,
        };

        return user;
    } catch (error) {
        console.error("Error en fetchUserDataFromBackend:", error);
        throw error;
    }
}
