import { useForm } from "react-hook-form";
import { BusinessFormData, RegisterBusinessFinalData, RegisterMode, UserFormData, ExistingUserFormData } from "./registerBusiness.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { businessSchema } from "../../../validations/businessSchemas";
import { newUserSchema } from "../../../validations/businessSchemas";
import { existingUserSchema } from "../../../validations/businessSchemas";
import { useState, useEffect, useMemo } from "react";
import { provinces } from "../../../constants/data/costaRicaLocations";

export function useRegisterBusiness() {
    const businessForm = useForm<BusinessFormData>({
        resolver: yupResolver(businessSchema),
        mode: "onBlur",
    });

    const newUserForm = useForm<UserFormData>({
        resolver: yupResolver(newUserSchema),
        mode: "onBlur",
    });

    const existingUserForm = useForm<ExistingUserFormData>({
        resolver: yupResolver(existingUserSchema),
        mode: "onBlur",
    });

    const [mode, setMode] = useState<RegisterMode>("new-user");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedCanton, setSelectedCanton] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");

    const [hasInstagram, setHasInstagram] = useState(false);
    const [hasFacebook, setHasFacebook] = useState(false);
    const [hasWhatsapp, setHasWhatsapp] = useState(false);

    useEffect(() => {
        setSelectedCanton("");
        setSelectedDistrict("");
    }, [selectedProvince]);

    useEffect(() => {
        setSelectedDistrict("");
    }, [selectedCanton]);

    const availableCantons = useMemo(() => {
        const prov = provinces.find((p) => p.province === selectedProvince);
        return prov ? prov.cantons : [];
    }, [selectedProvince]);

    const availableDistricts = useMemo(() => {
        const canton = availableCantons.find((c) => c.canton === selectedCanton);
        return canton ? canton.districts : [];
    }, [availableCantons, selectedCanton]);

    async function handleSubmit(onSuccess: (data: RegisterBusinessFinalData) => void) {
        setIsLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const isBusinessValid = await businessForm.trigger();
            const isUserValid =
                mode === "new-user"
                    ? await newUserForm.trigger()
                    : await existingUserForm.trigger();

            if (!isBusinessValid || !isUserValid) return;

            const businessData = businessForm.getValues();
            let user:
                | ({ type: "new-user" } & UserFormData)
                | ({ type: "existing-user" } & ExistingUserFormData);

            if (mode === "new-user") {
                user = {
                    type: "new-user",
                    ...(newUserForm.getValues() as UserFormData),
                };
            } else {
                user = {
                    type: "existing-user",
                    ...(existingUserForm.getValues() as ExistingUserFormData),
                };
            }

            const finalData: RegisterBusinessFinalData = {
                business: {
                    ...businessData,
                    province: selectedProvince,
                    canton: selectedCanton,
                    district: selectedDistrict,
                    socialMedia: {
                        instagram: hasInstagram ? businessData.socialMedia?.instagram ?? null : null,
                        facebook: hasFacebook ? businessData.socialMedia?.facebook ?? null : null,
                        whatsapp: hasWhatsapp ? businessData.socialMedia?.whatsapp ?? null : null,
                    },
                },
                user,
            };


            await new Promise((resolve) => setTimeout(resolve, 1500));
            setSuccess("¡Negocio registrado exitosamente!");
            onSuccess(finalData);
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : "Error al registrar negocio");
        } finally {
            setIsLoading(false);
        }
    }

    return {
        mode,
        setMode,
        businessForm,
        newUserForm,
        existingUserForm,
        selectedProvince,
        setSelectedProvince,
        selectedCanton,
        setSelectedCanton,
        selectedDistrict,
        setSelectedDistrict,
        availableCantons,
        availableDistricts,
        hasInstagram,
        hasFacebook,
        hasWhatsapp,
        setHasInstagram,
        setHasFacebook,
        setHasWhatsapp,
        isLoading,
        error,
        success,
        handleSubmit,
    };
}