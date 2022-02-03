import style from '../styles/Navbar.module.css'
import Link from 'next/link'

export default function NavBar(params) {
    return(
        <>
            <ul className={style.navbar}>
                <li><Link href={'/subrota'}>Subrota</Link></li>
                <li><Link href={'/'}>Home </Link></li>
                <li><Link href={'/about'}>About </Link></li>
                <li><Link href={'/todo'}>API todo </Link></li>
            </ul>
        
        </>
    )
}