import { useTheme } from "../../context/ThemeContext";
import { Input, Select, Option, Popover, PopoverHandler, PopoverContent, Button } from "@material-tailwind/react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserRegistrationFormData, userRegistrationSchema } from "../../validations/validateUserRegistration.ts";

export default function RegisterUser() {
    const { isDarkMode } = useTheme();
    const inputColor = isDarkMode ? "white" : "blue";

    const { register, handleSubmit, formState: { errors }, control } = useForm<UserRegistrationFormData>({
        resolver: yupResolver(userRegistrationSchema),
        mode: "onBlur",
        reValidateMode: "onSubmit",
        shouldUseNativeValidation: false
    });

    const submitForm = (data: UserRegistrationFormData) => {
        console.log("Form Data:", data);
        console.log(errors);
    };

    return (
        <form className={`space-y-6 ${isDarkMode ? "text-white" : "text-gray-700"}`} onSubmit={handleSubmit(submitForm)}>
            <div>
                <Input {...register("firstName")} color={inputColor} label="First Name" type="text" crossOrigin={undefined}/>
                <p className="text-red-500 text-sm mt-2">{errors.firstName?.message}</p>
            </div>

            <div>
                <Input {...register("lastName")} color={inputColor} label="Last Name" type="text" crossOrigin={undefined}/>
                <p className="text-red-500 text-sm mt-2">{errors.lastName?.message}</p>
            </div>

            {/* Teléfono y Correo Electrónico */}
            <div>
                <Input {...register("phoneNumber")} color={inputColor} label="Phone Number" type="tel" crossOrigin={undefined}/>
                <p className="text-red-500 text-sm mt-2">{errors.phoneNumber?.message}</p>
            </div>

            <div>
                <Input {...register("email")} color={inputColor} label="Email" type="email"  crossOrigin={undefined}/>
                <p className="text-red-500 text-sm mt-2">{errors.email?.message}</p>
            </div>

            {/* Date Picker */}
            <div>
                <Controller
                    name="dateOfBirth"
                    control={control}
                    render={({ field }) => (
                        <Popover placement="bottom-start">
                            <PopoverHandler>
                                <Input label="Date of Birth" value={field.value ? format(new Date(field.value), "dd/MM/yyyy") : ""} readOnly className="cursor-pointer" color={inputColor} crossOrigin={undefined}/>
                            </PopoverHandler>
                            <PopoverContent className={`p-2 rounded-md shadow-lg ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-700"}`}>
                                <DayPicker mode="single" selected={field.value ? new Date(field.value) : undefined} onSelect={(date) => field.onChange(date?.toISOString())} />
                            </PopoverContent>
                        </Popover>
                    )}
                />
                <p className="text-red-500 text-sm mt-2">{errors.dateOfBirth?.message}</p>
            </div>

            {/* Cédula */}
            <div>
                <Input {...register("idCard")} color={inputColor} label="ID Card" type="text" crossOrigin={undefined}/>
                <p className="text-red-500 text-sm mt-2">{errors.idCard?.message}</p>
            </div>

            {/* Select de Género */}
            <div>
                <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                        <Select label="Gender" color={isDarkMode ? "blue-gray" : "blue"} className="min-w-full" value={field.value} onChange={(e) => field.onChange(e)}>
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                            <Option value="other">Other</Option>
                            <Option value="prefer-not-to-say">Prefer not to say</Option>
                        </Select>
                    )}
                />
                <p className="text-red-500 text-sm mt-2">{errors.gender?.message}</p>
            </div>

            {/* Contraseña y Confirmación */}
            <div>
                <Input {...register("password")} color={inputColor} label="Password" type="password" crossOrigin={undefined}/>
                <p className="text-red-500 text-sm mt-2">{errors.password?.message}</p>
            </div>

            <div>
                <Input {...register("confirmPassword")} color={inputColor} label="Confirm Password" type="password" crossOrigin={undefined}/>
                <p className="text-red-500 text-sm mt-2">{errors.confirmPassword?.message}</p>
            </div>

            {/* Botón de Enviar */}
            <Button fullWidth className="flex items-center justify-center gap-2 py-3 px-4 mt-4 bg-indigo-600 hover:bg-indigo-700" type="submit">
                Create Account
            </Button>
        </form>
    );
}