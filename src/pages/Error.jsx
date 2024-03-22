import { NavLink } from "react-router-dom";
import "../styles/Error.css"


export const Error = () => {
    return (
        <>
        <main className="background">

        <div className="divError">
        <h2>ERROR 404</h2>
        <p>Not found</p>
        <NavLink to={'/home'}>
                <button className="error-btn">Volver a Home</button>
        </NavLink>
        
        </div>
        </main>
        </>
    )
}