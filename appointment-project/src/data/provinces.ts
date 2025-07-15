// src/data/provinces.ts

export interface Province {
  id: number;
  name: string;
  code: string; // Código para identificación
}

export const provinces: Province[] = [
  {
    id: 1,
    name: "San José",
    code: "SJ"
  },
  {
    id: 2,
    name: "Alajuela",
    code: "A"
  },
  {
    id: 3,
    name: "Cartago",
    code: "C"
  },
  {
    id: 4,
    name: "Heredia",
    code: "H"
  },
  {
    id: 5,
    name: "Guanacaste",
    code: "G"
  },
  {
    id: 6,
    name: "Puntarenas",
    code: "P"
  },
  {
    id: 7,
    name: "Limón",
    code: "L"
  }
];

// Función helper para obtener provincia por nombre
export const getProvinceByName = (name: string): Province | undefined => {
  return provinces.find(province => province.name === name);
};

// Función helper para obtener provincia por código
export const getProvinceByCode = (code: string): Province | undefined => {
  return provinces.find(province => province.code === code);
};