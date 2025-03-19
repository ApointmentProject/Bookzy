import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { Input, Select, Option, Popover, PopoverHandler, PopoverContent, Button } from "@material-tailwind/react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdBook } from "react-icons/md";
import { userRegistrationSchema, UserRegistrationFormData } from "../../validations/validateUserRegistration";
import { useAuth } from "../../context/AuthContext";
import { useCreateUser } from "../../hooks/user/useCreateUser";

export default function AditionalInformation() {
  const { isDarkMode } = useTheme();
  const { user } = useAuth();
  const navigate = useNavigate();
  const inputColor = isDarkMode ? "white" : "blue";
  const initialEmail = user?.email || "";

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<UserRegistrationFormData>({
    resolver: yupResolver(userRegistrationSchema),
    mode: "onBlur",
    defaultValues: { email: initialEmail }
  });

  const { mutate: createUser, isSuccess, isError, error } = useCreateUser();

  const onSubmit = (data: UserRegistrationFormData) => {
    console.log("Datos del formulario:", data);
    createUser(data);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/profile");
    }
  }, [isSuccess, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className={`w-full max-w-md p-6 border rounded-lg shadow ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-700"}`}>
        <div className="flex flex-col items-center mb-6 text-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <MdBook className="w-12 h-12 text-indigo-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Thanks for registering in Bookzy</h2>
          <p className="text-gray-600">Por favor, proporciona esta información para completar tu configuración.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Nombre */}
          <div>
            <Input {...register("firstName")} color={inputColor} label="Nombre" type="text" crossOrigin={undefined} />
            <p className="text-red-500 text-sm mt-2">{errors.firstName?.message}</p>
          </div>
          {/* Apellido */}
          <div>
            <Input {...register("lastName")} color={inputColor} label="Apellido" type="text" crossOrigin={undefined} />
            <p className="text-red-500 text-sm mt-2">{errors.lastName?.message}</p>
          </div>
          {/* Teléfono */}
          <div>
            <Input {...register("phoneNumber")} color={inputColor} label="Teléfono" type="tel" autoComplete="tel" crossOrigin={undefined} />
            <p className="text-red-500 text-sm mt-2">{errors.phoneNumber?.message}</p>
          </div>
          {/* Email (deshabilitado) */}
          <div>
            <Input {...register("email")} color={inputColor} label="Email" type="email" disabled crossOrigin={undefined} />
            <p className="text-red-500 text-sm mt-2">{errors.email?.message}</p>
          </div>
          {/* Fecha de Nacimiento */}
          <div>
            <Controller
              name="dateOfBirth"
              control={control}
              render={({ field }) => (
                <Popover placement="bottom-start">
                  <PopoverHandler>
                    <Input
                      label="Fecha de Nacimiento"
                      value={field.value ? format(new Date(field.value), "dd/MM/yyyy") : ""}
                      readOnly
                      className="cursor-pointer"
                      color={inputColor}
                      crossOrigin={undefined}
                    />
                  </PopoverHandler>
                  <PopoverContent className={`p-2 rounded-md shadow-lg ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-700"}`}>
                    <DayPicker
                      mode="single"
                      selected={field.value ? new Date(field.value) : undefined}
                      onSelect={(date) => field.onChange(date ? date.toISOString() : "")}
                    />
                  </PopoverContent>
                </Popover>
              )}
            />
            <p className="text-red-500 text-sm mt-2">{errors.dateOfBirth?.message}</p>
          </div>
          {/* Cédula */}
          <div>
            <Input {...register("idCard")} color={inputColor} label="Cédula" type="text" crossOrigin={undefined} />
            <p className="text-red-500 text-sm mt-2">{errors.idCard?.message}</p>
          </div>
          {/* Género */}
          <div>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <Select
                  label="Género"
                  color={isDarkMode ? "blue-gray" : "blue"}
                  className="min-w-full"
                  value={field.value || ""}
                  onChange={(e) => field.onChange(e)}
                >
                  <Option value="Male">Masculino</Option>
                  <Option value="Female">Femenino</Option>
                  <Option value="Other">Otro</Option>
                  <Option value="Prefer not to say">Prefiero no responder</Option>
                </Select>
              )}
            />
            <p className="text-red-500 text-sm mt-2">{errors.gender?.message}</p>
          </div>
          {/* Contraseña */}
          <div>
            <Input {...register("password")} color={inputColor} label="Contraseña" type="password" crossOrigin={undefined} />
            <p className="text-red-500 text-sm mt-2">{errors.password?.message}</p>
          </div>
          {/* Confirmar Contraseña */}
          <div>
            <Input {...register("confirmPassword")} color={inputColor} label="Confirmar Contraseña" type="password" crossOrigin={undefined} />
            <p className="text-red-500 text-sm mt-2">{errors.confirmPassword?.message}</p>
          </div>
          <Button fullWidth type="submit" className="flex items-center justify-center gap-2 py-3 px-4 mt-4 bg-indigo-600 hover:bg-indigo-700">
            Enviar
          </Button>
          {/* Mostrar error si ocurre uno en la creación */}
          {isError && <p className="text-red-500 text-center mt-4">Ocurrió un error: {error instanceof Error ? error.message : "Error desconocido"}</p>}
        </form>
      </div>
    </div>
  );
}
