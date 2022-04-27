import { useRouter } from "next/router"

export default function Search(){

    const route = useRouter()
    console.log(route);

    const code = route.query.id
    console.log(route.query.id);
    return (
        <>
            <h1>Rotas / {code} / search</h1>
        </>
    )
}