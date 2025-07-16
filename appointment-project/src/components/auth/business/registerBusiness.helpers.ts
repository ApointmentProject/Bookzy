// src/components/business/registerBusiness.helpers.ts
import { provinces } from "../../../constants/data/costaRicaLocations";

export function getCantonsByProvince(provinceName: string) {
  const province = provinces.find((p) => p.province === provinceName);
  return province?.cantons ?? [];
}

export function getDistrictsByCanton(provinceName: string, cantonName: string) {
  const cantons = getCantonsByProvince(provinceName);
  const canton = cantons.find((c) => c.canton === cantonName);
  return canton?.districts ?? [];
}
