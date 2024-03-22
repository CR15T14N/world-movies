import { useContext } from 'react';
import "../styles/Presentation.css";
import Login from "../components/Login";
import { DataContext } from '../context/DataContext';

function Presentation() {
    const {openLoginForm} = useContext(DataContext);


    return (
        <>
        <main className='bgBlur'>

            <header className="login">
                <span className="logo">WM</span>

                <nav className="loginNav">
                    <ul className="lBox">
                        <button className="btnLogin" onClick={openLoginForm}>
                            INGRESA
                        </button>
                        <button className="suscribe">
                            SUSCRIBITE
                        </button>
                    </ul>
                </nav>
            </header>

            <section className="mainPresentation">
                <div className="infoMain">
                    <h1>WORLD of MOVIES</h1>
                    <p>Les damos la bienvenida la plataforma numero 1 en streaming</p>
                    <p>Los planes empiezan desde <strong>$2500</strong></p>
                </div>
                <button className="suscribeBtn">
                    SUSCRIBETE AHORA
                </button>
            </section>

            <section className="moreSeries">
                <h2>¿Qué vas a ver primero?</h2>
                <div className="imgSeries"></div>
            </section>

            <section className="mostViewed">
                <div className="infoMostViewed">
                    <h2>Los Simpson como nunca antes los viste. Sin límites.</h2>
                    <p>Todos los episodios, la película, los cortos y las nuevas temporadas en exclusiva. ¿Vas a poder con tanto Simpson?</p>
                </div>
            </section>

             <Login />
        </main>
        </>
    )
}

export default Presentation;

