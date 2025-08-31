import { Route, Routes } from "react-router-dom";
import { AppContextProvider } from "./context/AppContextProvider";
import SignUpForm from "./Auth/SignUpForm";
import { Dashboard } from "./Pages/Dashboard";

const App: React.FC = () => {
  return (
    <div>
      <AppContextProvider>
        <Routes>
          <Route index element={<SignUpForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AppContextProvider>
    </div>
  );
};

export default App;
