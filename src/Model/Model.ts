export interface Users {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  user?: Users;
  token?: string;
  message: string;
}

export interface AuthApi {
  name: string;
  email: string;
  password: string;
}

export interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AppContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  showConfirmedPassword: boolean;
  setShowConfirmedPassword: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  userData?: Users;
  setUserData: React.Dispatch<React.SetStateAction<Users | undefined>>;
}