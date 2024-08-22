import Link from "next/link";

export default function RegisterButton (){
    return(
        <div className="mt-2"> 
         <Link href="/register" class="underline text-black hover:text-orange-400 text-xs">Sign up</Link>
        </div>
    )
}