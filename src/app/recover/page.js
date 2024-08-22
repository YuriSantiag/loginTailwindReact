'use client'
import { useState } from "react";
import InputEmail from "../components/inputEmail";
import InputUser from "../components/inputUser";
import ReceiveData from "../components/receiveData";
import RecoverData from "../components/recoverData";
import SendButton from "../components/sendButton";

export default function RecoverPass() {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [userErrorMessage, setUserErrorMessage] = useState("");
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [generalErrorMessage, setGeneralErrorMessage] = useState("");
  
    const handleSend = () => {
      let valid = true;
  
      if (!user) {
        setUserErrorMessage("Enter a valid user");
        valid = false;
      } else {
        setUserErrorMessage("");
      }
  
      if (!email) {
        setEmailErrorMessage("Enter a valid email address");
        valid = false;
      } else {
        setEmailErrorMessage("");
      }
  
      if (valid) {
        const sendSuccessful = false; // Altere para a lógica de envio
  
        if (!sendSuccessful) {
          setGeneralErrorMessage("Could not send.");
        } else {
          setGeneralErrorMessage("");
          // Outras ações após envio bem-sucedido
        }
      }
    };
  
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="bg-neutral-200 w-96 h-auto border rounded-xl shadow-2xl flex flex-col justify-center items-center p-4">
          <RecoverData />
          <div className="flex flex-col justify-center items-center">
            <ReceiveData />
            <InputUser 
              userErrorMessage={userErrorMessage} 
              handleUserChange={setUser} 
            />
            <InputEmail 
              emailErrorMessage={emailErrorMessage} 
              handleEmailChange={setEmail} 
            />
            <SendButton handleSend={handleSend} />
            {generalErrorMessage && (
              <p className="text-red-500 text-sm mt-4">{generalErrorMessage}</p>
            )}
          </div>
        </div>
      </main>
    );
  }