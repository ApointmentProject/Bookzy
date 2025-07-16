// src/components/business/RegisterBusinessForm.tsx
import {
  Button,
  Input,
  Textarea,
  Checkbox,
  Radio,
  Select,
  Option,
} from "@material-tailwind/react";
import { Controller } from "react-hook-form";
import { useTheme } from "../../../context/ThemeContext";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { businessCategories } from "../../../constants/data/categories";
import { provinces } from "../../../constants/data/costaRicaLocations";
import { useRegisterBusiness } from "./useRegisterBusiness";
import { BusinessFormData } from "./registerBusiness.types";

export function RegisterBusinessForm() {
  const { isDarkMode } = useTheme();
  const {
    /* ---------- hooks ---------- */
    businessForm,
    newUserForm,
    existingUserForm,
    /* ---------- estado ---------- */
    mode,
    setMode,
    selectedProvince,
    setSelectedProvince,
    selectedCanton,
    setSelectedCanton,
    selectedDistrict,
    setSelectedDistrict,
    availableCantons,
    availableDistricts,
    hasFacebook,
    hasInstagram,
    hasWhatsapp,
    setHasFacebook,
    setHasInstagram,
    setHasWhatsapp,
    /* ---------- feedback ---------- */
    isLoading,
    error,
    success,
    handleSubmit: submitAllForms, // <- renombrado para claridad
  } = useRegisterBusiness();

  const {
    register,
    control,
    setValue,
    formState: { errors },
    handleSubmit,            // <- handleSubmit propio de businessForm
  } = businessForm;

  /* ---- sincróniza selects externos con RHF ---- */
  const syncProvince = (prov: string) => {
    setSelectedProvince(prov);
    setValue("province", prov, { shouldValidate: true });
  };
  const syncCanton = (canton: string) => {
    setSelectedCanton(canton);
    setValue("canton", canton, { shouldValidate: true });
  };
  const syncDistrict = (dist: string) => {
    setSelectedDistrict(dist);
    setValue("district", dist, { shouldValidate: true });
  };

  /* ---------- estilos ---------- */
  const inputColor = isDarkMode ? "blue" : "blue";
  const inputClassName = `${isDarkMode ? "text-white" : "text-gray-900"}`;
  const labelClassName = `block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-200" : "text-gray-700"
    }`;
  const sectionClassName = `space-y-4 rounded-lg border p-4 ${isDarkMode ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-white"
    }`;

  /* ----------- envío ----------- */
  const onSubmit = () =>
    submitAllForms((data) => {
      // aquí llega SÓLO SI TODO ES VÁLIDO
      console.log("Payload final →", data);
      /* tu request al backend… */
    });

  return (
    <div className="mx-auto w-full max-w-3xl space-y-6 p-4 sm:p-6">
      {/* cabecera */}
      <div className="space-y-2 text-center">
        <h1 className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
          Registro de Negocio
        </h1>
        <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
          Completa los datos de tu negocio
        </p>
      </div>

      {/* ------------ FORMULARIO ------------ */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Información del negocio */}
        <div className={sectionClassName}>
          <h2 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Información General
          </h2>

          {/* Categoría (Controller) */}
          <div className="space-y-2">
            <label className={labelClassName}>Categoría</label>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  value={field.value || ""}
                  onChange={(v) => field.onChange(v || "")}
                  color={inputColor}
                >
                  {businessCategories.map((cat) => (
                    <Option key={cat.value} value={cat.value}>
                      {cat.label}
                    </Option>
                  ))}
                </Select>
              )}
            />
            {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
          </div>

          {/* Nombre y Slogan */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className={labelClassName}>Nombre del Negocio</label>
              <Input
                {...register("businessName")}
                placeholder="Mi Negocio S.A."
                color={inputColor}
                crossOrigin={undefined}
              />
              {errors.businessName && (
                <p className="text-red-500 text-sm">{errors.businessName.message}</p>
              )}
            </div>
            <div>
              <label className={labelClassName}>Slogan (opcional)</label>
              <Input
                {...register("slogan")}
                placeholder="Tu mejor opción"
                color={inputColor}
                crossOrigin={undefined}
              />
            </div>
          </div>

          {/* Teléfono */}
          <div>
            <label className={labelClassName}>Teléfono del Negocio</label>
            <Input
              {...register("businessPhone")}
              type="tel"
              placeholder="8888-8888"
              color={inputColor}
              crossOrigin={undefined}
            />
            {errors.businessPhone && (
              <p className="text-red-500 text-sm">{errors.businessPhone.message}</p>
            )}
          </div>

          {/* Dirección */}
          <div>
            <label className={labelClassName}>Dirección Exacta</label>
            <Textarea
              {...register("exactAddress")}
              placeholder="Calle principal, edificio #123"
              color={inputColor}
              className={inputClassName}
            />
            {errors.exactAddress && (
              <p className="text-red-500 text-sm">{errors.exactAddress.message}</p>
            )}
          </div>

          {/* Provincia, Cantón, Distrito */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <label className={labelClassName}>Provincia</label>
              <Select value={selectedProvince} onChange={(v) => syncProvince(v || "")} color={inputColor}>
                {provinces.map((prov) => (
                  <Option key={prov.province} value={prov.province}>
                    {prov.province}
                  </Option>
                ))}
              </Select>
              {errors.province && <p className="text-red-500 text-sm">{errors.province.message}</p>}
            </div>
            <div>
              <label className={labelClassName}>Cantón</label>
              <Select
                value={selectedCanton}
                onChange={(v) => syncCanton(v || "")}
                disabled={!selectedProvince}
                color={inputColor}
              >
                {availableCantons.map((c) => (
                  <Option key={c.canton} value={c.canton}>
                    {c.canton}
                  </Option>
                ))}
              </Select>
              {errors.canton && <p className="text-red-500 text-sm">{errors.canton.message}</p>}
            </div>
            <div>
              <label className={labelClassName}>Distrito</label>
              <Select
                value={selectedDistrict}
                onChange={(v) => syncDistrict(v || "")}
                disabled={!selectedCanton}
                color={inputColor}
              >
                {availableDistricts.map((d) => (
                  <Option key={d} value={d}>
                    {d}
                  </Option>
                ))}
              </Select>
              {errors.district && <p className="text-red-500 text-sm">{errors.district.message}</p>}
            </div>
          </div>

          {/* Descripción */}
          <div>
            <label className={labelClassName}>Descripción</label>
            <Textarea
              {...register("businessDescription")}
              placeholder="Describe tu negocio..."
              className={`min-h-[100px] ${inputClassName}`}
              color={inputColor}
            />
            {errors.businessDescription && (
              <p className="text-red-500 text-sm">{errors.businessDescription.message}</p>
            )}
          </div>
        </div>

        {/* Redes Sociales */}
        <div className={sectionClassName}>
          <h2 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Redes Sociales (Opcional)
          </h2>

          {[
            {
              icon: <FaInstagram className="h-5 w-5" />,
              checked: hasInstagram,
              setChecked: setHasInstagram,
              label: "Instagram",
              field: "socialMedia.instagram",
            },
            {
              icon: <FaFacebook className="h-5 w-5" />,
              checked: hasFacebook,
              setChecked: setHasFacebook,
              label: "Facebook",
              field: "socialMedia.facebook",
            },
            {
              icon: <FaWhatsapp className="h-5 w-5" />,
              checked: hasWhatsapp,
              setChecked: setHasWhatsapp,
              label: "WhatsApp",
              field: "socialMedia.whatsapp",
            },
          ].map(({ icon, checked, setChecked, label, field }) => (
            <div className="flex items-center gap-4" key={label}>
              <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                color={inputColor}
                crossOrigin={undefined}
              />
              {icon}
              <Input
                {...register(field as keyof BusinessFormData)}

                disabled={!checked}
                placeholder={`${label}.com/minegocio`}
                className="flex-1"
                color={inputColor}
                crossOrigin={undefined}
              />
            </div>
          ))}
          {/* errores de redes */}
          {errors.socialMedia?.instagram && (
            <p className="text-red-500 text-sm">{errors.socialMedia.instagram.message}</p>
          )}
          {errors.socialMedia?.facebook && (
            <p className="text-red-500 text-sm">{errors.socialMedia.facebook.message}</p>
          )}
          {errors.socialMedia?.whatsapp && (
            <p className="text-red-500 text-sm">{errors.socialMedia.whatsapp.message}</p>
          )}
        </div>

        {/* Vincular a una Cuenta */}
        <div className={sectionClassName}>
          <h2 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Vincular a una Cuenta
          </h2>

          <Radio
            name="account"
            label="Registrar nuevo usuario"
            checked={mode === "new-user"}
            onChange={() => setMode("new-user")}
            color={inputColor}
            crossOrigin={undefined}
          />
          <Radio
            name="account"
            label="Vincular a usuario existente"
            checked={mode === "existing-user"}
            onChange={() => setMode("existing-user")}
            color={inputColor}
            crossOrigin={undefined}
          />

          {mode === "new-user" ? (
            <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Nuevo Usuario */}
              <div>
                <Input label="Nombre" {...newUserForm.register("firstName")} crossOrigin={undefined} />
                {newUserForm.formState.errors.firstName && (
                  <p className="text-red-500 text-sm">{newUserForm.formState.errors.firstName.message}</p>
                )}
              </div>
              <div>
                <Input label="Apellidos" {...newUserForm.register("lastName")} crossOrigin={undefined} />
                {newUserForm.formState.errors.lastName && (
                  <p className="text-red-500 text-sm">{newUserForm.formState.errors.lastName.message}</p>
                )}
              </div>
              <div>
                <Input label="Teléfono" {...newUserForm.register("phone")} crossOrigin={undefined} />
                {newUserForm.formState.errors.phone && (
                  <p className="text-red-500 text-sm">{newUserForm.formState.errors.phone.message}</p>
                )}
              </div>
              <div>
                <Input label="Correo" type="email" {...newUserForm.register("email")} crossOrigin={undefined} />
                {newUserForm.formState.errors.email && (
                  <p className="text-red-500 text-sm">{newUserForm.formState.errors.email.message}</p>
                )}
              </div>
              <div>
                <Input label="Fecha Nacimiento" type="date" {...newUserForm.register("dateOfBirth")} crossOrigin={undefined} />
                {newUserForm.formState.errors.dateOfBirth && (
                  <p className="text-red-500 text-sm">{newUserForm.formState.errors.dateOfBirth.message}</p>
                )}
              </div>
              <div>
                <Input label="Cédula" {...newUserForm.register("idNumber")} crossOrigin={undefined} />
                {newUserForm.formState.errors.idNumber && (
                  <p className="text-red-500 text-sm">{newUserForm.formState.errors.idNumber.message}</p>
                )}
              </div>
              <div>
                <Select
                  label="Género"
                  onChange={(val) => newUserForm.setValue("gender", val || "", { shouldValidate: true })}
                >
                  <Option value="Male">Masculino</Option>
                  <Option value="Female">Femenino</Option>
                  <Option value="Other">Otro</Option>
                  <Option value="Prefer not to say">Prefiero no decir</Option>
                </Select>
                {newUserForm.formState.errors.gender && (
                  <p className="text-red-500 text-sm">{newUserForm.formState.errors.gender.message}</p>
                )}
              </div>
              <div>
                <Input label="Contraseña" type="password" {...newUserForm.register("password")} crossOrigin={undefined} />
                {newUserForm.formState.errors.password && (
                  <p className="text-red-500 text-sm">{newUserForm.formState.errors.password.message}</p>
                )}
              </div>
              <div>
                <Input label="Confirmar Contraseña" type="password" {...newUserForm.register("confirmPassword")} crossOrigin={undefined} />
                {newUserForm.formState.errors.confirmPassword && (
                  <p className="text-red-500 text-sm">{newUserForm.formState.errors.confirmPassword.message}</p>
                )}
              </div>
            </div>
          ) : (
            <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Usuario Existente */}
              <div>
                <Input label="Correo del Usuario" {...existingUserForm.register("email")} crossOrigin={undefined} />
                {existingUserForm.formState.errors.email && (
                  <p className="text-red-500 text-sm">{existingUserForm.formState.errors.email.message}</p>
                )}
              </div>
              <div>
                <Input label="Contraseña" type="password" {...existingUserForm.register("password")} crossOrigin={undefined} />
                {existingUserForm.formState.errors.password && (
                  <p className="text-red-500 text-sm">{existingUserForm.formState.errors.password.message}</p>
                )}
              </div>
            </div>
          )}
        </div>


        <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700" disabled={isLoading}>
          {isLoading ? "Registrando..." : "Registrar Negocio"}
        </Button>

        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
      </form>
    </div>
  );
}
