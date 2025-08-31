import { createContext } from "react";
import { type AppContextType } from "../Model/Model";

export const AppContext = createContext<AppContextType | undefined>(undefined);
