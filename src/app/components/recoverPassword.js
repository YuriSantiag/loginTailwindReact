import Link from "next/link";
export default function RecoverPassword (){
    return(
        <div className="mt-2">
         <Link href="/recover" class="underline text-black hover:text-orange-400 text-xs">Recover password</Link>
        </div>
    )
}