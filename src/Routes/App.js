import {Header} from "Components/Layout/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Servicios} from "Pages/Servicios";
import {Podcast} from "Pages/Podcast";
import {Contacto} from "Pages/Contacto";
import {SucursalCard} from "Components/SucursalCard";
import {Resultados} from "Pages/Resultados";
import {GalleryLayout} from "Components/Gallery/GalleryLayout";
import {Inicio} from "Pages/Inicio";

const App = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/Galeria" element={<GalleryLayout/>}/>
                <Route path="/Resultados" element={<Resultados/>}/>
                <Route path="/Servicios" element={<Servicios/>}/>
                <Route path="/Podcast" element={<Podcast/>}/>
                <Route path="/Contacto" element={<Contacto/>}>
                    <Route index element={<h2 className="animation-to-top displayed">Selecciona una sucursal</h2>}/>
                    <Route path="Matriz" element={<SucursalCard
                        location="Matriz"
                        phone={"618 811 72 30"}
                        map={<iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1736.6720298567661!2d-104.65472625430382!3d24.02238913994956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c5bd3f47c23c2f%3A0xa948eb2fa785f99b!2sLaboratorio%20de%20An%C3%A1lisis%20Cl%C3%ADnicos%20Nova!5e0!3m2!1sen!2smx!4v1644197858421!5m2!1sen!2smx"
                            loading="lazy" className="contact-map"/>}
                        address={"Av. Cuauhtémoc #609 Sur, Zona Centro C.P. 34000, Durango, Dgo."}
                        hours={<em>Lunes a Sábado 7:30 a 20:00 Domingos y Días festivos 8:00 a 16:00</em>}
                    />}/>
                    <Route path="Plaza-DOMA" element={<SucursalCard
                        map={<iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7106451800723!2d-104.66434458456132!3d24.00599288487994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bc91777856635%3A0x49be8ec5286a1d0c!2sDoma%20Plaza%20Comercial!5e0!3m2!1sen!2smx!4v1644202066471!5m2!1sen!2smx"
                            className={"contact-map"} loading="lazy"/>}
                        location="Plaza DOMA"
                        phone={"618 811 72 30"}
                        hours={<em>Lunes a Sábado 7:30 a 15:30</em>}
                        address={"Blvd. Domingo Arrieta 909, Lienzo Charro, 34150 Durango, Dgo"}
                    />}/>
                    <Route path="Punto-Guadiana" element={<SucursalCard
                        location="Punto Guadiana"
                        map={<iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.4902640926543!2d-104.69340818456125!3d24.013770784579975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bc9db5341d50d%3A0x969240aa2f8d637e!2sPlaza%20Punto%20Guadiana%20Durango!5e0!3m2!1sen!2smx!4v1644201708469!5m2!1sen!2smx"
                            loading="lazy" className="contact-map"/>}
                        address={"Paseo Loma Dorada, Planta baja, Av. Paseo Loma Bonita C.P. 34104, Durango, Dgo."}
                        phone={"618 811 72 30"}
                        hours={<em>Lunes a Sábado 7:30 a 15:30</em>}
                    />}/>
                    <Route path="Victoria" element={<SucursalCard
                        map={<iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.111021793737!2d-104.12534558455613!3d24.446933167726044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869af01536ddff93%3A0xabbb7fdf153f32ee!2sJos%C3%A9%20Ram%C3%B3n%20Valdez%20105%2C%20Zona%20Centro%2C%2034700%20Cd%20Guadalupe%20Victoria%2C%20Dgo.!5e0!3m2!1sen!2smx!4v1644201899582!5m2!1sen!2smx"
                            className="contact-map" loading="lazy"/>}
                        location="Guadalupe Victoria"
                        address={"José Ramón Valdez 105, Plaza Marsan, local 7 (Frente a la Plaza Principal)"}
                        hours={<em>Lunes a Sábado 7:30 a 15:30</em>}
                        phone={"618 811 72 30"}
                    />}/>
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default App;
