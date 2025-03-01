import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex justify-center bg-gray-100 h-10 items-center shadow-md">
        <ul className="flex gap-3">
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/about'}>About</Link></li>
            <li><Link href={'/contact'}>Contact</Link></li>
            <li><Link href={'/blog'}>Blog</Link></li>
        </ul>
    </div>
  )
}

export default Navbar