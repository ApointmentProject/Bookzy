export interface UserRegistrationFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  dob: string; // string en formato ISO yyyy-mm-dd
  idNumber: string;
  gender: "masculino" | "femenino" | "otro" | "prefiero-no-decir";
  password: string;
}
