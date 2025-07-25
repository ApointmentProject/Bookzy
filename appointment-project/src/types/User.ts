export interface UserType {
    id?: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    birthday: Date;
    id_number: string;
    gender: "Male" | "Female" | "Other" | "Prefer not to say";
    password_hash: string;
    created_at?: Date;
}

export interface UserPasswordValidationType {
    email: string;
    password: string;
}