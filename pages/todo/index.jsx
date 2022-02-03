import Link from "next/link"


export async function getStaticProps(params) {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')

    const todos = await data.json()
    //console.log(todos);

    return {
        props: {todos},
    }
}

export default function Todos({todos}) {
    return(
        <>
            <h1>My Task to do:</h1>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>{todo.title} -- {todo.id}<Link href={`todo/${todo.id}`}> Go more</Link> </li>
                ))}
            </ul>
        </>
    )
}