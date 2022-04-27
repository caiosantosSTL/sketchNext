import Link from "next/link";
import router, { useRouter } from "next/router"

export default function Param(){

    // http://localhost:3000/rotas/param?nome=Dudu&id=22
    const route = useRouter()
    console.log(route);

    const id = route.query.id
    const nome = route.query.nome

    function navComParam(){ // other form to link routes
        router.push({
            pathname: "/rotas/param",
            query:{
                id: 1234,
                nome: 'Elias'
            }
        })
    }

    return (
        <>
            <h1>Param, {id} nome es {nome}</h1>
            <Link href="/rotas/2/search">
                <button>go to search</button>
            </Link>

            <button onClick={navComParam}>new param</button>
        </>
    )
}