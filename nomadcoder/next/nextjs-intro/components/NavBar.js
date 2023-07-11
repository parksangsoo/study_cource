import Link from "next/link";

export default function NavBar() {
    return <nav>
        <Link href="/">
            <div>Home</div>
        </Link>
        <Link href="/about">
            <div>About</div>
        </Link>
        
    </nav>
}