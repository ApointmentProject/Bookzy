import { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import {
  Input,
  Button,
  Select,
  Option,
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react"
import { registerUserSchema } from "../../validations/authSchemas"

type FormInputs = {
  firstName: string
  lastName: string
  phone: string
  email: string
  dob: string // corregido: string en lugar de Date
  idNumber: string
  gender: string
  password: string
  confirmPassword: string
}

export function RegisterUserForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(registerUserSchema),
  })

  const [isPending, setIsPending] = useState(false)
  const [state, setState] = useState<{ success: boolean; message: string } | null>(null)

  const onSubmit = async (data: FormInputs) => {
    setIsPending(true)
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
    const result = await response.json()
    setState(result)
    setIsPending(false)
  }

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

          {state?.message && (
            <Typography
              variant="small"
              className={`text-center ${
                state.success ? "text-green-500" : "text-red-500"
              }`}
            >
              {state.message}
            </Typography>
          )}
        </form>
      </CardBody>
    </Card>
  )
}
