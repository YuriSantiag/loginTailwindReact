import AttetionMessage from "../components/attention";
import NewRegisterModal from "../components/newRegisterModal";
import TextNewReg from "../components/textNewRegister";

export default function NewRegister (){
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="bg-neutral-200 w-96 h-80 border rounded-xl flex flex-col justify-center items-center">
        <NewRegisterModal/>
        <div className="text-center">
        <AttetionMessage/>
        <TextNewReg/>  
        </div>
        </div>
        </main>
    )
}