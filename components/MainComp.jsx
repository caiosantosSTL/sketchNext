import NavBar from "./NavBar";

export default function MainComp({children}) {
    return(
        <>
            <NavBar/>
            <div>{children}</div>
        </>
    )
}