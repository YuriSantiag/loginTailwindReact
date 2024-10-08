'use client'
import { useState } from "react";
import EnterButton from "../components/enterButton";
import Inputlogin from "../components/inputLogin";
import InputPassword from "../components/inputPassword";
import Logo from "../components/logo";
import RecoverPassword from "../components/recoverPassword";
import RegisterButton from "../components/register";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [generalErrorMessage, setGeneralErrorMessage] = useState("");

  const handleLogin = () => {
    let valid = true;

    if (!login) {
      setLoginErrorMessage("Enter a valid login");
      valid = false;
    } else {
      setLoginErrorMessage("");
    }

    if (!password) {
      setPasswordErrorMessage("Enter a valid password");
      valid = false;
    } else {
      setPasswordErrorMessage("");
    }

    if (valid) {
      const loginSuccessful = false; 

      if (!loginSuccessful) {
        setGeneralErrorMessage("It wasn't possible to get in.");
      } else {
        setGeneralErrorMessage("");
      
      }
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="bg-neutral-200 w-80 h-auto border rounded-xl flex flex-col shadow-2xl justify-center items-center p-4">
        <Logo />
        <Inputlogin 
          loginErrorMessage={loginErrorMessage} 
          handleLoginChange={setLogin}
        />
        <InputPassword 
          passwordErrorMessage={passwordErrorMessage} 
          handlePasswordChange={setPassword}
        />
        <EnterButton handleLogin={handleLogin} />
        {generalErrorMessage && (
          <p className="text-red-500 text-sm mt-4">{generalErrorMessage}</p>
        )}
        <div className="grid text-center grid-cols-1 mt-4">
          <RecoverPassword />
          <RegisterButton />
        </div>
      </div>
    </main>
  );
}