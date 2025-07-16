export interface AuthUser {
    uid: string;
    profilePic: string;
    email?: string;
    firstName?: string;
    lastName?: string;
}

export interface BackendResponse<T> {
    success?: boolean;
    message: string;
    data?: T;
    error?: string;
    passwordMatch?: boolean;
}

export async function fetchUserDataFromBackend(email: string): Promise<AuthUser> {
    const API_URL = import.meta.env.VITE_API_URL;
    
    try {
        const response = await fetch(`${API_URL}/api/users/${encodeURIComponent(email)}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || errorData.message || `Error ${response.status}: ${response.statusText}`);
        }

        const responseData = await response.json();
        const userData = responseData.success ? responseData.data : responseData;

        return {
            uid: userData.uid || "",
            profilePic: userData.profilePic || "",
            email: email,
            firstName: userData.firstName || "",
            lastName: userData.lastName || "",
        };
    } catch (error) {
        console.error("Error en fetchUserDataFromBackend:", error);
        throw error;
    }
}

export async function linkFirebaseToUser(
  email: string,
  uid: string,
  profilePic?: string
): Promise<AuthUser> {
  const API_URL = import.meta.env.VITE_API_URL;

  try {
    const response = await fetch(`${API_URL}/api/users/link-firebase`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        uid,
        profilePic: profilePic || '',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.error || errorData.message || `Error ${response.status}: ${response.statusText}`
      );
    }

    const data = await response.json();

    if (!data.success || !data.data) {
      throw new Error("La vinculación no fue exitosa");
    }

    return {
      uid: data.data.uid || '',
      profilePic: data.data.profilePic || '',
      email: data.data.email || '',
      firstName: data.data.firstName || '',
      lastName: data.data.lastName || '',
    };
  } catch (error) {
    console.error("Error en linkFirebaseToUser:", error);
    throw error;
  }
}

export async function signInWithEmailBackend(email: string, password: string): Promise<AuthUser> {
    const API_URL = import.meta.env.VITE_API_URL;
    
    try {
        const passwordResponse = await fetch(`${API_URL}/api/users/validatePassword`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const passwordData: BackendResponse<null> = await passwordResponse.json();

        if (!passwordResponse.ok) {
            throw new Error(passwordData.error || passwordData.message || `Error ${passwordResponse.status}: ${passwordResponse.statusText}`);
        }

        if (!passwordData.passwordMatch) {
            throw new Error("Credenciales incorrectas");
        }

        return await fetchUserDataFromBackend(email);

    } catch (error) {
        console.error("Error en signInWithEmailBackend:", error);
        throw error;
    }
}