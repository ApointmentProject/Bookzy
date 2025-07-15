"use client"
import { useTheme } from "../../context/ThemeContext"
import type React from "react"
import { Button, Popover, PopoverHandler, PopoverContent } from "@material-tailwind/react"
import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"
import { useState, useEffect } from "react"
import { format } from "date-fns"
import { FaInstagram, FaFacebookF, FaWhatsapp, FaCheck } from "react-icons/fa"

// Importar las provincias y cantones
import { provinces, type Province } from "../../data/provinces"
import { getCantonsByProvince, type Canton } from "../../data/cantons"

export default function RegisterBusiness() {
  const { isDarkMode } = useTheme()
  const [selectedBirthdate, setSelectedBirthdate] = useState<Date | undefined>(undefined)
  const [activeSocial, setActiveSocial] = useState<"instagram" | "facebook" | "whatsapp">("instagram")
  const [socialValues, setSocialValues] = useState({
    instagram: "",
    facebook: "",
    whatsapp: "",
  })

  // Estados para los campos del negocio
  const [category, setCategory] = useState("")
  const [businessName, setBusinessName] = useState("")
  const [businessSlug, setBusinessSlug] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [businessEmail, setBusinessEmail] = useState("")
  const [address, setAddress] = useState("")
  const [selectedProvince, setSelectedProvince] = useState<Province | null>(null)
  const [selectedCanton, setSelectedCanton] = useState<Canton | null>(null)
  const [district, setDistrict] = useState("")
  const [businessDescription, setBusinessDescription] = useState("")

  // Estados para información del usuario
  const [userAssociationType, setUserAssociationType] = useState<"new" | "existing">("new") // 'new' o 'existing'
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [idCard, setIdCard] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [password, setPassword] = useState("")
  const [gender, setGender] = useState("")

  // Estados para usuario existente
  const [existingUserEmail, setExistingUserEmail] = useState("")
  const [fetchedFirstName, setFetchedFirstName] = useState("")
  const [fetchedLastName, setFetchedLastName] = useState("")
  const [isFetchingUser, setIsFetchingUser] = useState(false)
  const [userFetchError, setUserFetchError] = useState("")

  // Opciones para categorías
  const categories = [
    "Barbería",
    "Salón de Belleza",
    "Dentista",
    "Médico",
    "Veterinaria",
    "Spa",
    "Gimnasio",
    "Mecánico",
    "Abogado",
    "Contador",
    "Fotógrafo",
    "Otros",
  ]
  const genders = ["Masculino", "Femenino", "Otro", "Prefiero no decir"]

  // Obtener cantones filtrados por provincia seleccionada
  const availableCantons = selectedProvince ? getCantonsByProvince(selectedProvince.id) : []

  // Limpiar cantón seleccionado cuando cambie la provincia
  useEffect(() => {
    if (selectedProvince && selectedCanton?.provinceId !== selectedProvince.id) {
      setSelectedCanton(null)
    }
  }, [selectedProvince, selectedCanton])

  // Manejar cambio de provincia
  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const provinceName = e.target.value
    const province = provinces.find((p) => p.name === provinceName) || null
    setSelectedProvince(province)
  }

  // Manejar cambio de cantón
  const handleCantonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cantonName = e.target.value
    const canton = availableCantons.find((c) => c.name === cantonName) || null
    setSelectedCanton(canton)
  }

  // Simular petición al backend para buscar usuario
  const fetchUserByEmail = async (email: string) => {
    setIsFetchingUser(true)
    setUserFetchError("")
    setFetchedFirstName("")
    setFetchedLastName("")
    try {
      // Simular un retraso de red
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simular respuesta del backend
      if (email === "existing@example.com") {
        setFetchedFirstName("Juan")
        setFetchedLastName("Pérez")
      } else {
        setUserFetchError("User not found with this email.")
      }
    } catch (error) {
      setUserFetchError("Error fetching user data.")
      console.error("Error fetching user:", error)
    } finally {
      setIsFetchingUser(false)
    }
  }

  const getSocialIcon = (social: "instagram" | "facebook" | "whatsapp") => {
    const isActive = activeSocial === social
    const hasContent = socialValues[social].trim() !== ""
    const baseClasses = `w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer border-2 relative`

    if (isDarkMode) {
      return `${baseClasses} ${
        isActive
          ? "bg-white text-gray-900 border-white"
          : hasContent
            ? "bg-green-600 text-white border-green-600"
            : "bg-transparent text-white border-gray-600 hover:border-white hover:bg-white/10"
      }`
    } else {
      return `${baseClasses} ${
        isActive
          ? "bg-gray-900 text-white border-gray-900"
          : hasContent
            ? "bg-green-600 text-white border-green-600"
            : "bg-transparent text-gray-600 border-gray-300 hover:border-gray-900 hover:bg-gray-50"
      }`
    }
  }

  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSocialValues({
      ...socialValues,
      [activeSocial]: e.target.value,
    })
  }

  const getSocialPlaceholder = (social: "instagram" | "facebook" | "whatsapp") => {
    switch (social) {
      case "facebook":
        return "https://facebook.com/yourpage"
      case "whatsapp":
        return "+506 1234 5678"
      case "instagram":
        return "@yourusername"
      default:
        return ""
    }
  }

  const getSocialLabel = (social: "instagram" | "facebook" | "whatsapp") => {
    switch (social) {
      case "facebook":
        return "Facebook Page URL"
      case "whatsapp":
        return "WhatsApp Number"
      case "instagram":
        return "Instagram Username"
      default:
        return ""
    }
  }

  // Componente personalizado para campos con label arriba
  const CustomField = ({
    label,
    children,
    required = false,
  }: {
    label: string
    children: React.ReactNode
    required?: boolean
  }) => (
    <div className="space-y-2">
      <label className={`block text-sm font-medium ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  )

  const inputClassName = `w-full px-3 py-2 border rounded-md transition-colors ${
    isDarkMode
      ? "border-gray-600 bg-gray-800 text-white focus:border-gray-400 focus:outline-none"
      : "border-gray-300 bg-white text-gray-900 focus:border-gray-500 focus:outline-none"
  }`

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

// Agrega esta función para manejar cuando el campo pierde el foco
  const handleEmailBlur = () => {
    if (userAssociationType === "existing" && existingUserEmail.trim() !== "") {
      if (isValidEmail(existingUserEmail)) {
        fetchUserByEmail(existingUserEmail)
      } else {
        setUserFetchError("Please enter a valid email address")
      }
    }
  }

  return (
    <div className={`w-full max-w-lg mx-auto px-4 py-6 ${isDarkMode ? "text-white" : "text-gray-700"}`}>
      <form className="space-y-8">
        {/* Business Information */}
        <div className="space-y-6">
          <h2 className={`text-xl font-semibold text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Business Information
          </h2>

          <div className="space-y-5">
            <CustomField label="Category" required>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className={inputClassName}>
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </CustomField>

            <CustomField label="Business Name" required>
              <input
                type="text"
                placeholder="Your Business Name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className={inputClassName}
              />
            </CustomField>

            <CustomField label="Business Slug" required>
              <input
                type="text"
                placeholder="business-name-location"
                value={businessSlug}
                onChange={(e) => setBusinessSlug(e.target.value)}
                className={inputClassName}
              />
            </CustomField>

            <CustomField label="Phone Number" required>
              <input
                type="tel"
                placeholder="+506 1234 5678"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className={inputClassName}
              />
            </CustomField>

            <CustomField label="Business Email" required>
              <input
                type="email"
                placeholder="business@example.com"
                value={businessEmail}
                onChange={(e) => setBusinessEmail(e.target.value)}
                className={inputClassName}
              />
            </CustomField>

            <CustomField label="Address" required>
              <input
                type="text"
                placeholder="Complete street address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={inputClassName}
              />
            </CustomField>

            <CustomField label="Province" required>
              <select value={selectedProvince?.name || ""} onChange={handleProvinceChange} className={inputClassName}>
                <option value="">Select a province</option>
                {provinces.map((province) => (
                  <option key={province.id} value={province.name}>
                    {province.name}
                  </option>
                ))}
              </select>
            </CustomField>

            <CustomField label="Canton" required>
              <select
                value={selectedCanton?.name || ""}
                onChange={handleCantonChange}
                className={inputClassName}
                disabled={!selectedProvince}
              >
                <option value="">{selectedProvince ? "Select a canton" : "First select a province"}</option>
                {availableCantons.map((canton) => (
                  <option key={canton.id} value={canton.name}>
                    {canton.name}
                  </option>
                ))}
              </select>
            </CustomField>

            <CustomField label="District" required>
              <input
                type="text"
                placeholder="District"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className={inputClassName}
              />
            </CustomField>

            <CustomField label="Business Description">
              <div className="mt-2">
                <textarea
                  placeholder="Describe your business, services, and what makes you unique..."
                  value={businessDescription}
                  onChange={(e) => setBusinessDescription(e.target.value)}
                  className={`${inputClassName} min-h-[100px] resize-none`}
                  rows={4}
                />
              </div>
            </CustomField>
          </div>
        </div>

        {/* Social Media Information */}
        <div className="space-y-6">
          <h3 className={`text-xl font-semibold text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Social Media
          </h3>

          {/* Social Media Icons */}
          <div className="flex justify-center items-center space-x-8">
            <div onClick={() => setActiveSocial("instagram")} className={getSocialIcon("instagram")}>
              {socialValues.instagram.trim() !== "" && activeSocial !== "instagram" ? (
                <FaCheck size={16} />
              ) : (
                <FaInstagram size={20} />
              )}
            </div>
            <div onClick={() => setActiveSocial("facebook")} className={getSocialIcon("facebook")}>
              {socialValues.facebook.trim() !== "" && activeSocial !== "facebook" ? (
                <FaCheck size={16} />
              ) : (
                <FaFacebookF size={18} />
              )}
            </div>
            <div onClick={() => setActiveSocial("whatsapp")} className={getSocialIcon("whatsapp")}>
              {socialValues.whatsapp.trim() !== "" && activeSocial !== "whatsapp" ? (
                <FaCheck size={16} />
              ) : (
                <FaWhatsapp size={20} />
              )}
            </div>
          </div>

          {/* Social Media Input */}
          <CustomField label={getSocialLabel(activeSocial)}>
            <input
              type="text"
              placeholder={getSocialPlaceholder(activeSocial)}
              value={socialValues[activeSocial]}
              onChange={handleSocialChange}
              className={inputClassName}
            />
          </CustomField>

          {/* Social Media Summary */}
          {Object.entries(socialValues).some(([_, value]) => value.trim() !== "") && (
            <div className={`mt-6 p-4 rounded-lg ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}>
              <p className="text-sm font-medium mb-3">Added Social Media:</p>
              <div className="space-y-2">
                {socialValues.instagram.trim() !== "" && (
                  <div className="flex items-center gap-3 text-sm">
                    <FaInstagram size={16} />
                    <span>Instagram: {socialValues.instagram}</span>
                  </div>
                )}
                {socialValues.facebook.trim() !== "" && (
                  <div className="flex items-center gap-3 text-sm">
                    <FaFacebookF size={16} />
                    <span>Facebook: {socialValues.facebook}</span>
                  </div>
                )}
                {socialValues.whatsapp.trim() !== "" && (
                  <div className="flex items-center gap-3 text-sm">
                    <FaWhatsapp size={16} />
                    <span>WhatsApp: {socialValues.whatsapp}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* User Information */}
        <div className="space-y-6">
          <h3 className={`text-xl font-semibold text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            User Information
          </h3>

          <div className="space-y-5">
            <CustomField label="User Type" required>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="userType"
                    value="new"
                    checked={userAssociationType === "new"}
                    onChange={() => setUserAssociationType("new")}
                    className="form-radio h-4 w-4 text-gray-900"
                  />
                  <span className={isDarkMode ? "text-gray-200" : "text-gray-700"}>New User</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="userType"
                    value="existing"
                    checked={userAssociationType === "existing"}
                    onChange={() => setUserAssociationType("existing")}
                    className="form-radio h-4 w-4 text-gray-900"
                  />
                  <span className={isDarkMode ? "text-gray-200" : "text-gray-700"}>Existing User</span>
                </label>
              </div>
            </CustomField>

            {userAssociationType === "existing" ? (
              <>
                <CustomField label="User Email" required>
                  <input
                    type="email"
                    placeholder="Enter existing user's email"
                    value={existingUserEmail}
                    onChange={(e) => setExistingUserEmail(e.target.value)}
                    className={inputClassName}
                  />
                </CustomField>

                {isFetchingUser && (
                  <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Searching for user...</p>
                )}
                {userFetchError && <p className="text-sm text-red-500">{userFetchError}</p>}

                {fetchedFirstName && fetchedLastName && (
                  <>
                    <CustomField label="First Name">
                      <input
                        type="text"
                        value={fetchedFirstName}
                        readOnly
                        className={`${inputClassName} ${isDarkMode ? "bg-gray-700" : "bg-gray-100"} cursor-not-allowed`}
                      />
                    </CustomField>
                    <CustomField label="Last Name">
                      <input
                        type="text"
                        value={fetchedLastName}
                        readOnly
                        className={`${inputClassName} ${isDarkMode ? "bg-gray-700" : "bg-gray-100"} cursor-not-allowed`}
                      />
                    </CustomField>
                    <CustomField label="Password" required>
                      <input
                        type="password"
                        placeholder="Enter user's password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={inputClassName}
                      />
                    </CustomField>
                  </>
                )}
              </>
            ) : (
              <>
                <CustomField label="First Name" required>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={inputClassName}
                  />
                </CustomField>

                <CustomField label="Last Name" required>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={inputClassName}
                  />
                </CustomField>

                <CustomField label="Birthdate" required>
                  <Popover placement="bottom-start">
                    <PopoverHandler>
                      <input
                        value={selectedBirthdate ? format(selectedBirthdate, "dd/MM/yyyy") : ""}
                        placeholder="Select your birthdate"
                        readOnly
                        className={`${inputClassName} cursor-pointer`}
                      />
                    </PopoverHandler>
                    <PopoverContent
                      className={`p-3 rounded-lg shadow-xl border z-50 ${
                        isDarkMode ? "bg-gray-800 text-white border-gray-700" : "bg-white text-gray-700 border-gray-200"
                      }`}
                    >
                      <DayPicker
                        mode="single"
                        selected={selectedBirthdate}
                        onSelect={(date) => setSelectedBirthdate(date)}
                        className="border-none"
                      />
                    </PopoverContent>
                  </Popover>
                </CustomField>

                <CustomField label="ID Card (Cédula)" required>
                  <input
                    type="text"
                    placeholder="Enter your ID number"
                    value={idCard}
                    onChange={(e) => setIdCard(e.target.value)}
                    className={inputClassName}
                  />
                </CustomField>

                <CustomField label="User Email" required>
                  <input
                    type="email"
                    placeholder="user@example.com"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className={inputClassName}
                  />
                </CustomField>

                <CustomField label="Password" required>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={inputClassName}
                  />
                </CustomField>

                <CustomField label="Gender">
                  <select value={gender} onChange={(e) => setGender(e.target.value)} className={inputClassName}>
                    <option value="">Select gender</option>
                    {genders.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </CustomField>
              </>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <Button
            fullWidth
            className="bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-lg font-medium transition-colors duration-200 shadow-lg text-lg"
            type="submit"
            onClick={(e) => {
              e.preventDefault()
              const formData = {
                business: {
                  category,
                  businessName,
                  businessSlug,
                  phoneNumber,
                  businessEmail,
                  address,
                  province: selectedProvince?.name,
                  canton: selectedCanton?.name,
                  district,
                  businessDescription,
                },
                socialMedia: socialValues,
                user:
                  userAssociationType === "existing"
                    ? {
                        type: "existing",
                        email: existingUserEmail,
                        password: password, // Password for existing user
                        firstName: fetchedFirstName, // Fetched, read-only
                        lastName: fetchedLastName, // Fetched, read-only
                      }
                    : {
                        type: "new",
                        firstName,
                        lastName,
                        birthdate: selectedBirthdate,
                        idCard,
                        email: userEmail,
                        password,
                        gender,
                      },
              }
              console.log("Form Data:", formData)
            }}
          >
            Register Business
          </Button>
        </div>
      </form>
    </div>
  )
}
