import NavBar from "./NavBar";

export default function MainComp({ children }) {
    return (
        <>
            <NavBar />
            <div className="container">

                <div>{children}</div>
            </div>

        </>
    )
}