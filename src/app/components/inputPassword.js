'use client'
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function InputPassword({ passwordErrorMessage, handlePasswordChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mt-7">
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="shadow-md rounded-md border py-2 px-3 w-76"
          onChange={(e) => handlePasswordChange(e.target.value)}
        />
        <div
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer"
        >
          {showPassword ? (
            <EyeOffIcon className="h-5 w-5 text-gray-600" />
          ) : (
            <EyeIcon className="h-5 w-5 text-gray-600" />
          )}
        </div>
      </div>
      {passwordErrorMessage && (
        <p className="text-red-500 text-sm mt-2">{passwordErrorMessage}</p>
      )}
    </div>
  );
}

