import SelectEnter from "./selectEnterprise";
import SelectTower from "./selectTower";

export default function BoxEnt(){
    return(
<main className="justify-center flex mt-16">
    <div className="bg-white bg-opacity-90 rounded-3xl md:h-40 md:px-20">
        <h1 className="bg-gray-600 text-white rounded-xl mt-5 p-2  md:px-44 md:h-10 text-center">Empreendimento</h1>
        <div className="justify-center flex mt-7">
            <SelectEnter/>
            <SelectTower/>  
        </div>
    </div>
</main>
     
    )
}