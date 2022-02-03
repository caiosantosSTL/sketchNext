import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Comment(params) {
    const router = useRouter()
    const showTodoId = router.query.todoid
    const showCommentId = router.query.commentid

    return (
        <>
            <Link href={`/todo/${showTodoId}`}>Voltar</Link>
            <h1>Show comentario num {showCommentId}</h1>    
        </>
    )
}