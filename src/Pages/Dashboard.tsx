import { useContext } from "react";
import { AppContext } from "../context/AppContext";

import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    navigate("/");
  };
  const appData = useContext(AppContext);
  const user = appData?.userData;
  if (!user) {
    return;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Welcome, {user.name}!</span>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="w-8 h-8 text-green-500" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Welcome to your Dashboard!
              </h2>
              <p className="text-gray-600">
                You've successfully signed up and logged in.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">
              Your Account Details:
            </h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>User ID:</strong> {user.id}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
