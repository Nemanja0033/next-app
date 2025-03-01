import Link from "next/link";

export default function NouFound(){
    return(
        <div>
            <h1>Nepostojeca stranica!</h1>
            <Link href={'/'}>Vrati se na glavnu!</Link>
        </div>
    )
}