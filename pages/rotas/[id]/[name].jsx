import { useRouter } from "next/router"

export default function Name(){

    const route = useRouter()
    console.log(route);

    const code = route.query.id
    const name = route.query.name

    return (
        <>
            <h1>Rotas / {code} / { name }</h1>
        </>
    )
}