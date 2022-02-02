import Link from 'next/link'

export default function index(params) {
    return (
        <div>
            <h1>This is index subrota</h1>
            <ul>
                <li>
                    <Link href={'/'}>Go back home</Link>
                </li>
            </ul>
        </div>
    )
}