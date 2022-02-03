import Link from 'next/link'

import { useRouter } from 'next/router'

export default function Todo(params) {

    const router = useRouter()
    const showTodoId = router.query.todoid //todoid is the name of my jsx archive
    return (
        <>
            <Link href="/">Home</Link>
            <h1>Show todo : {showTodoId}</h1>
            <p>Coments <Link href={`${showTodoId}/comments/1`}>here</Link></p>
        </>
    )
}