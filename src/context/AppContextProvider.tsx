import { useState, type ReactNode } from "react";
import { type Users, type FormData } from "../Model/Model";
import { AppContext } from "./AppContext";

// Create the context (undefined default so we enforce provider usage)

// Provider component
export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState<Users>();

  return (
    <AppContext.Provider
      value={{
        formData,
        setFormData,
        showPassword,
        setShowPassword,
        showConfirmedPassword,
        setShowConfirmedPassword,
        isLoading,
        setIsLoading,
        error,
        setError,
        userData,
        setUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
