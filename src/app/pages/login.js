import EnterButton from "../components/enterButton";
import Inputlogin from "../components/inputLogin";
import InputPassword from "../components/inputPassword";
import Logo from "../components/logo";
import RecoverPassword from "../components/recoverPassword";
import RegisterButton from "../components/register";

export default function Login (){
    return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-neutral-200 w-80 h-96 border rounded-xl flex flex-col justify-center items-center">
        <Logo/>
        <Inputlogin/>
        <InputPassword/>
        <EnterButton/>
        <div className="grid grid-cols-2 gap-2">
        <RecoverPassword/>
        <RegisterButton/>
        </div>
        </div>
    </main>
        
    )
}