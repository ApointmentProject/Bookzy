// src/data/cantons.ts

export interface Canton {
  id: number;
  name: string;
  provinceId: number; // Referencia al ID de la provincia
  provinceName: string; // Para facilitar búsquedas
}

export const cantons: Canton[] = [
  // SAN JOSÉ (provinceId: 1)
  { id: 1, name: "San José", provinceId: 1, provinceName: "San José" },
  { id: 2, name: "Escazú", provinceId: 1, provinceName: "San José" },
  { id: 3, name: "Desamparados", provinceId: 1, provinceName: "San José" },
  { id: 4, name: "Puriscal", provinceId: 1, provinceName: "San José" },
  { id: 5, name: "Tarrazú", provinceId: 1, provinceName: "San José" },
  { id: 6, name: "Aserrí", provinceId: 1, provinceName: "San José" },
  { id: 7, name: "Mora", provinceId: 1, provinceName: "San José" },
  { id: 8, name: "Goicoechea", provinceId: 1, provinceName: "San José" },
  { id: 9, name: "Santa Ana", provinceId: 1, provinceName: "San José" },
  { id: 10, name: "Alajuelita", provinceId: 1, provinceName: "San José" },
  { id: 11, name: "Vázquez de Coronado", provinceId: 1, provinceName: "San José" },
  { id: 12, name: "Acosta", provinceId: 1, provinceName: "San José" },
  { id: 13, name: "Tibás", provinceId: 1, provinceName: "San José" },
  { id: 14, name: "Moravia", provinceId: 1, provinceName: "San José" },
  { id: 15, name: "Montes de Oca", provinceId: 1, provinceName: "San José" },
  { id: 16, name: "Turrubares", provinceId: 1, provinceName: "San José" },
  { id: 17, name: "Dota", provinceId: 1, provinceName: "San José" },
  { id: 18, name: "Curridabat", provinceId: 1, provinceName: "San José" },
  { id: 19, name: "Pérez Zeledón", provinceId: 1, provinceName: "San José" },
  { id: 20, name: "León Cortés Castro", provinceId: 1, provinceName: "San José" },

  // ALAJUELA (provinceId: 2)
  { id: 21, name: "Alajuela", provinceId: 2, provinceName: "Alajuela" },
  { id: 22, name: "San Ramón", provinceId: 2, provinceName: "Alajuela" },
  { id: 23, name: "Grecia", provinceId: 2, provinceName: "Alajuela" },
  { id: 24, name: "San Mateo", provinceId: 2, provinceName: "Alajuela" },
  { id: 25, name: "Atenas", provinceId: 2, provinceName: "Alajuela" },
  { id: 26, name: "Naranjo", provinceId: 2, provinceName: "Alajuela" },
  { id: 27, name: "Palmares", provinceId: 2, provinceName: "Alajuela" },
  { id: 28, name: "Poás", provinceId: 2, provinceName: "Alajuela" },
  { id: 29, name: "Orotina", provinceId: 2, provinceName: "Alajuela" },
  { id: 30, name: "San Carlos", provinceId: 2, provinceName: "Alajuela" },
  { id: 31, name: "Zarcero", provinceId: 2, provinceName: "Alajuela" },
  { id: 32, name: "Valverde Vega", provinceId: 2, provinceName: "Alajuela" },
  { id: 33, name: "Upala", provinceId: 2, provinceName: "Alajuela" },
  { id: 34, name: "Los Chiles", provinceId: 2, provinceName: "Alajuela" },
  { id: 35, name: "Guatuso", provinceId: 2, provinceName: "Alajuela" },

  // CARTAGO (provinceId: 3)
  { id: 36, name: "Cartago", provinceId: 3, provinceName: "Cartago" },
  { id: 37, name: "Paraíso", provinceId: 3, provinceName: "Cartago" },
  { id: 38, name: "La Unión", provinceId: 3, provinceName: "Cartago" },
  { id: 39, name: "Jiménez", provinceId: 3, provinceName: "Cartago" },
  { id: 40, name: "Turrialba", provinceId: 3, provinceName: "Cartago" },
  { id: 41, name: "Alvarado", provinceId: 3, provinceName: "Cartago" },
  { id: 42, name: "Oreamuno", provinceId: 3, provinceName: "Cartago" },
  { id: 43, name: "El Guarco", provinceId: 3, provinceName: "Cartago" },

  // HEREDIA (provinceId: 4)
  { id: 44, name: "Heredia", provinceId: 4, provinceName: "Heredia" },
  { id: 45, name: "Barva", provinceId: 4, provinceName: "Heredia" },
  { id: 46, name: "Santo Domingo", provinceId: 4, provinceName: "Heredia" },
  { id: 47, name: "Santa Bárbara", provinceId: 4, provinceName: "Heredia" },
  { id: 48, name: "San Rafael", provinceId: 4, provinceName: "Heredia" },
  { id: 49, name: "San Isidro", provinceId: 4, provinceName: "Heredia" },
  { id: 50, name: "Belén", provinceId: 4, provinceName: "Heredia" },
  { id: 51, name: "Flores", provinceId: 4, provinceName: "Heredia" },
  { id: 52, name: "San Pablo", provinceId: 4, provinceName: "Heredia" },
  { id: 53, name: "Sarapiquí", provinceId: 4, provinceName: "Heredia" },

  // GUANACASTE (provinceId: 5)
  { id: 54, name: "Liberia", provinceId: 5, provinceName: "Guanacaste" },
  { id: 55, name: "Nicoya", provinceId: 5, provinceName: "Guanacaste" },
  { id: 56, name: "Santa Cruz", provinceId: 5, provinceName: "Guanacaste" },
  { id: 57, name: "Bagaces", provinceId: 5, provinceName: "Guanacaste" },
  { id: 58, name: "Carrillo", provinceId: 5, provinceName: "Guanacaste" },
  { id: 59, name: "Cañas", provinceId: 5, provinceName: "Guanacaste" },
  { id: 60, name: "Abangares", provinceId: 5, provinceName: "Guanacaste" },
  { id: 61, name: "Tilarán", provinceId: 5, provinceName: "Guanacaste" },
  { id: 62, name: "Nandayure", provinceId: 5, provinceName: "Guanacaste" },
  { id: 63, name: "La Cruz", provinceId: 5, provinceName: "Guanacaste" },
  { id: 64, name: "Hojancha", provinceId: 5, provinceName: "Guanacaste" },

  // PUNTARENAS (provinceId: 6)
  { id: 65, name: "Puntarenas", provinceId: 6, provinceName: "Puntarenas" },
  { id: 66, name: "Esparza", provinceId: 6, provinceName: "Puntarenas" },
  { id: 67, name: "Buenos Aires", provinceId: 6, provinceName: "Puntarenas" },
  { id: 68, name: "Montes de Oro", provinceId: 6, provinceName: "Puntarenas" },
  { id: 69, name: "Osa", provinceId: 6, provinceName: "Puntarenas" },
  { id: 70, name: "Quepos", provinceId: 6, provinceName: "Puntarenas" },
  { id: 71, name: "Golfito", provinceId: 6, provinceName: "Puntarenas" },
  { id: 72, name: "Coto Brus", provinceId: 6, provinceName: "Puntarenas" },
  { id: 73, name: "Parrita", provinceId: 6, provinceName: "Puntarenas" },
  { id: 74, name: "Corredores", provinceId: 6, provinceName: "Puntarenas" },
  { id: 75, name: "Garabito", provinceId: 6, provinceName: "Puntarenas" },

  // LIMÓN (provinceId: 7)
  { id: 76, name: "Limón", provinceId: 7, provinceName: "Limón" },
  { id: 77, name: "Pococí", provinceId: 7, provinceName: "Limón" },
  { id: 78, name: "Siquirres", provinceId: 7, provinceName: "Limón" },
  { id: 79, name: "Talamanca", provinceId: 7, provinceName: "Limón" },
  { id: 80, name: "Matina", provinceId: 7, provinceName: "Limón" },
  { id: 81, name: "Guácimo", provinceId: 7, provinceName: "Limón" }
];

// Función helper para obtener cantones por provincia
export const getCantonsByProvince = (provinceId: number): Canton[] => {
  return cantons.filter(canton => canton.provinceId === provinceId);
};

// Función helper para obtener cantones por nombre de provincia
export const getCantonsByProvinceName = (provinceName: string): Canton[] => {
  return cantons.filter(canton => canton.provinceName === provinceName);
};

// Función helper para obtener un cantón específico
export const getCantonById = (id: number): Canton | undefined => {
  return cantons.find(canton => canton.id === id);
};

// Función helper para obtener un cantón por nombre
export const getCantonByName = (name: string): Canton | undefined => {
  return cantons.find(canton => canton.name === name);
};