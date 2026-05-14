import React from 'react'
import { Header } from 'Components/Layout/Header'
import { Footer } from '../Components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Servicios } from 'Pages/Servicios'
import { Podcast } from 'Pages/Podcast'
import { Contacto } from 'Pages/Contacto'
import { SucursalCard } from 'Components/SucursalCard'
import { Resultados } from 'Pages/Resultados'
import { GalleryLayout } from 'Components/Gallery/GalleryLayout'
import { Inicio } from 'Pages/Inicio'
import { AvisoDePrivacidad as Privacidad } from '../Pages/AvisoDePrivacidad'

const App = () => {
  return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/privacidad" element={<Privacidad/>}/>
                <Route path="/Galeria" element={<GalleryLayout/>}/>
                <Route path="/Resultados" element={<Resultados/>}/>
                <Route path="/Servicios" element={<Servicios/>}/>
                <Route path="/Podcast" element={<Podcast/>}/>
                <Route path="/Contacto" element={<Contacto/>}>
                    <Route index element={<h2 className="animation-to-top displayed">Selecciona una sucursal</h2>}/>
                    <Route path="Matriz" element={<SucursalCard
                        location="Matriz"
                        phone={'618 811 72 30'}
                        map={<iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1736.6720298567661!2d-104.65472625430382!3d24.02238913994956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c5bd3f47c23c2f%3A0xa948eb2fa785f99b!2sLaboratorio%20de%20An%C3%A1lisis%20Cl%C3%ADnicos%20Nova!5e0!3m2!1sen!2smx!4v1644197858421!5m2!1sen!2smx"
                            loading="lazy" className="contact-map"/>}
                        address={'Av. Cuauhtémoc #609 Sur, Zona Centro C.P. 34000, Durango, Dgo.'}
                        hours={<em>Lunes a Sábado 7:00 a 20:00 <br/>Domingos y Días festivos 7:30 a 15:30</em>}
                    />}/>
                     <Route path="Torre-v1" element={<SucursalCard
                        location="Torre V1"
                        phone={'618 811 72 30'}
                        map={<iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14577.590418878777!2d-104.6811541!3d24.0170403!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bc813585b3e7f%3A0x88bde738d74c2383!2sTORRE%20VI!5e0!3m2!1sen!2smx!4v1688497580227!5m2!1sen!2smx"
                            className={'contact-map'} loading="lazy"/>}
                        address={'Torre V1 - Medical center. Local 9-D Primer Nivel. Av. Universidad #234, Lomas del Guadiana C.P. 34138 Durango, Dgo.'}
                        hours={<em>Lunes a Viernes 7:30 a 19:30 <br/>Sábados 7:30 a 15:30</em>}
                    />}/>
                    <Route path="Plaza-DOMA" element={<SucursalCard
                        map={<iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7106451800723!2d-104.66434458456132!3d24.00599288487994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bc91777856635%3A0x49be8ec5286a1d0c!2sDoma%20Plaza%20Comercial!5e0!3m2!1sen!2smx!4v1644202066471!5m2!1sen!2smx"
                            className={'contact-map'} loading="lazy"/>}
                        location="Plaza DOMA"
                        phone={'618 811 72 30'}
                        hours={<em>Lunes a Sábado 7:30 a 15:30</em>}
                        address={'Blvd. Domingo Arrieta 909, Lienzo Charro, 34150 Durango, Dgo'}
                    />}/>
                    <Route path="Punto-Guadiana" element={<SucursalCard
                        location="Punto Guadiana"
                        map={<iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.4902640926543!2d-104.69340818456125!3d24.013770784579975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bc9db5341d50d%3A0x969240aa2f8d637e!2sPlaza%20Punto%20Guadiana%20Durango!5e0!3m2!1sen!2smx!4v1644201708469!5m2!1sen!2smx"
                            loading="lazy" className="contact-map"/>}
                        address={'Paseo Loma Dorada, Planta baja, Av. Paseo Loma Bonita C.P. 34104, Durango, Dgo.'}
                        phone={'618 811 72 30'}
                        hours={<em>Lunes a Sábado 7:30 a 15:30</em>}
                    />}/>
                    <Route path="Victoria" element={<SucursalCard
                        map={<iframe
                            src="https://www.google.com/maps/place/Laboratorio+de+An%C3%A1lisis+Clinicos+Nova/@24.014117,-104.9882815,10z/data=!4m6!3m5!1s0x869af1ba6a076b61:0xd937a69a8d23a3f0!8m2!3d24.4478836!4d-104.1202141!16s%2Fg%2F11w42smgl9?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D"
                            className="contact-map" loading="lazy"/>}
                        location="Guadalupe Victoria"
                        address={'Francisco I. Madero #200 Nte. Zona Centro (Esq. con calle Carrillo Puerto)'}
                        hours={<em>Lunes a Sábado 7:30 a 13:30</em>}
                        phone={'618 811 72 30'}
                    />}/>
                    <Route path="plaza-jardines" element={<SucursalCard
                        map={<iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3643.7341787033743!2d-104.63409152443687!3d24.040437278473618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bb7b713324aa1%3A0xe82d0433762f67c9!2sPlaza%20Jardines!5e0!3m2!1ses-419!2smx!4v1761931126022!5m2!1ses-419!2smx"
                            className="contact-map" loading="lazy"/>}
                        location="Plaza Jardines"
                        address='Local 25, Blvd. Francisco Villa #200, Glorieta. C.P. 34200, Durango, Dgo.'
                        hours={<em>Lunes a Sábado 7:30 a 15:30</em>}
                        phone={'618 811 72 30'}
                    />}/>
                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
  )
}

export default App