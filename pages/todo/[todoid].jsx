import Link from 'next/link'

import { useRouter } from 'next/router'

export async function getStaticProps(context) { //get only one
    const {params} = context
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoid}`)
    const todo = await data.json()
    return{
        props: {todo},
    } 
    
}

export async function getStaticPaths() { //get all data from api
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const data = await res.json()
    const paths = data.map((todo)=>{
        return{
            params: {
                todoid: `${todo.id}`,
            }
        }
    })

    return{paths, fallback: false}
}

export default function Todo({todo}) {

    /*const router = useRouter()
    const showTodoId = router.query.todoid //todoid is the name of my jsx archive */
    return (
        <>
            <Link href="/todo">Home</Link>
            <h1>Show todo : {todo.id}</h1>
            <p>Coments <Link href={`${todo.id}/comments/1`}>here</Link></p>
            <h3>{todo.title}</h3>
        </>
    )
}