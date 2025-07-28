// context/BusinessContext.tsx
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Business } from "../types/Business";
interface BusinessContextProps {
  business: Business | null;
  setBusiness: (data: Business | null) => void;
  clearBusiness: () => void;
  loading: boolean;
}

const BusinessContext = createContext<BusinessContextProps | undefined>(undefined);

export const BusinessProvider = ({ children }: { children: ReactNode }) => {
  const [business, setBusinessState] = useState<Business | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("businessData");
    if (stored) {
      try {
        const parsed: Business = JSON.parse(stored);
        setBusinessState(parsed);
      } catch {
        localStorage.removeItem("businessData");
      }
    }
    setLoading(false);
  }, []);

  const setBusiness = (data: Business | null) => {
    if (data) {
      localStorage.setItem("businessData", JSON.stringify(data));
      setBusinessState(data);
    } else {
      clearBusiness();
    }
  };

  const clearBusiness = () => {
    localStorage.removeItem("businessData");
    setBusinessState(null);
  };

  return (
    <BusinessContext.Provider value={{ business, setBusiness, clearBusiness, loading }}>
      {children}
    </BusinessContext.Provider>
  );
};

export const useBusiness = () => {
  const context = useContext(BusinessContext);
  if (!context) {
    throw new Error("useBusiness debe ser usado dentro de un BusinessProvider");
  }
  return context;
};
