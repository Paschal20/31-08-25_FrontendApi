import axios from "axios";
import type { AuthResponse } from "../Model/Model";
import type { AuthApi } from "../Model/Model";

export const authApi = {
  signUp: async ({ name, email, password }: AuthApi): Promise<AuthResponse> => {
    try {
      const res = await axios.post<AuthResponse>(
        "http://localhost:3230/api/signup", // TODO: replace with your real endpoint
        { name, email, password }
      );
      return res.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // ✅ Axios-specific error
        return {
          success: false,
          message:
            error.response?.data?.message || error.message || "Signup failed",
        };
      } else if (error instanceof Error) {
        // ✅ Non-Axios JS error
        return {
          success: false,
          message: error.message || "Sign up failed",
        };
      } else {
        return {
          success: false,
          message: "Network Error. Please try again later.",
        };
      }
    }
  },
};

export default authApi;
