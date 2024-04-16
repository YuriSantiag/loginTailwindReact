import InputEmail from "../components/inputEmail";
import InputUser from "../components/inputUser";
import ReceiveData from "../components/receiveData";
import RecoverData from "../components/recoverData";
import SendButton from "../components/sendButton";

export default function RecoverPass (){
    return(
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="bg-neutral-200 w-96 h-80 border rounded-xl flex flex-col justify-center items-center">
        <RecoverData/>
        <div className="flex flex-col justify-center items-center">
        <ReceiveData/>
        <InputUser/> 
        <InputEmail/>
        <SendButton/>
        </div>
        </div>
        </main>
    )
}