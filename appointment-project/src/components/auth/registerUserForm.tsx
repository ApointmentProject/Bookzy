import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Input,
  Button,
  Select,
  Option,
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";
import { registerUserSchema } from "../../validations/authSchemas";
import { useCreateUser } from "../../hooks/user/useCreateUser";
import { UserRegistrationFormData } from "../../validations/registration/validateUserRegistration";
import { useToast } from "../../context/ToastContext";
import { useNavigate } from "react-router-dom";

type FormInputs = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  dob: string; // string por input type="date"
  idNumber: string;
  gender: string;
  password: string;
  confirmPassword: string;
};

export function RegisterUserForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(registerUserSchema),
  });

  const [isPending, setIsPending] = useState(false);
  const createUserMutation = useCreateUser();
  const navigate = useNavigate();
  const { addToast } = useToast();

  const onSubmit = async (data: FormInputs) => {
    setIsPending(true);

    const formattedData: UserRegistrationFormData = {
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      email: data.email,
      dob: data.dob,
      idNumber: data.idNumber,
      gender: data.gender as any,
      password: data.password,
    };

    createUserMutation.mutate(formattedData, {
      onSuccess: () => {
        addToast({
          type: "success",
          title: "Usuario creado",
          message: "El usuario se ha registrado exitosamente.",
        });
        setTimeout(() => {
          navigate("/login"); // ✅ Redirigir al login
        }, 1000);
      },
      onError: (error) => {
        addToast({
          type: "error",
          title: "Error al registrar",
          message: error.message,
        });
      },
      onSettled: () => {
        setIsPending(false);
      },
    });
  };

  return (
    <Card className="mx-auto max-w-2xl p-6">
      <CardBody>
        <div className="mb-6 text-center">
          <Typography variant="h4" color="blue-gray">
            Registro de Usuario
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Completa tus datos para crear una cuenta
          </Typography>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input label="Nombre" {...register("firstName")} crossOrigin={undefined} />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
            </div>
            <div>
              <Input label="Apellidos" {...register("lastName")} crossOrigin={undefined} />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input label="Teléfono" type="tel" {...register("phone")} crossOrigin={undefined} />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>
            <div>
              <Input label="Correo Electrónico" type="email" {...register("email")} crossOrigin={undefined} />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input label="Fecha de Nacimiento" type="date" {...register("dob")} crossOrigin={undefined} />
              {errors.dob && <p className="text-red-500 text-sm">{errors.dob.message}</p>}
            </div>
            <div>
              <Input label="Cédula" {...register("idNumber")} crossOrigin={undefined} />
              {errors.idNumber && <p className="text-red-500 text-sm">{errors.idNumber.message}</p>}
            </div>
          </div>

          <div className="w-full">
            <Select
              label="Género"
              onChange={(value) => setValue("gender", value || "")}
            >
              <Option value="masculino">Masculino</Option>
              <Option value="femenino">Femenino</Option>
              <Option value="otro">Otro</Option>
              <Option value="prefiero-no-decir">Prefiero no decir</Option>
            </Select>
            {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input label="Contraseña" type="password" {...register("password")} crossOrigin={undefined} />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>
            <div>
              <Input label="Confirmar Contraseña" type="password" {...register("confirmPassword")} crossOrigin={undefined} />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
            </div>
          </div>

          <Button type="submit" fullWidth disabled={isPending}>
            {isPending ? "Creando cuenta..." : "Crear Cuenta"}
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}
