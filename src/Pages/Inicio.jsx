import {Banner, PodcastIndex, EstudioIndex, ResultadosIndex, SocialMediaIndex, ServiciosIndex, GaleriaIndex, Layout, PodcastView, ResultadosView, ServiciosView, GaleriaView, ContactoIndex} from "Components/InicioElements";

import slide from "Assets/banner-principal.jpg";
import podcastImg from "Assets/podcast_img.jpeg";
import play from "Assets/Icons/play-circle-line.svg";
import resultados from "Assets/home_images/WEB_RESULTADOS.jpg";
import estudios from "Assets/home_images/WEB_ COTIZADOR_.jpg";
import arrow from "Assets/Icons/nextArrow.svg";
import fb from "Assets/Icons/socialmedia/facebook-circle-fill.svg";
import ig from "Assets/Icons/socialmedia/instagram-fill.svg";
import wa from "Assets/Icons/socialmedia/whatsapp-fill.svg";
import yt from "Assets/Icons/socialmedia/youtube-fill.svg";
import galeria from "Assets/home_images/WEB_ EL MEJOR EQUIPO HUMANO Y TECNOLÓGICO.jpg";
import home_services from "Assets/home_images/WEB_SERVICIOS.jpg";
import contact_image from "Assets/gallery/img_32.jpg";

export const Inicio = () => {
  return (
        <div className="container services">
            <Layout>
                <Banner image={slide}/>
                <PodcastIndex to="/Podcast" imagen={podcastImg}>
                    <PodcastView>
                        <img src={play} alt="Ir al podcast"/>
                        <em>Descubre</em>
                        <h2>Nova Podcast</h2>
                        <span>Un podcast en pro de la vida</span>
                    </PodcastView>
                </PodcastIndex>
                <EstudioIndex href="https://cotizador.labnova.com.mx" target="_blank" imagen={estudios}>
                    <ResultadosView>
                        <h3>¿Necesitas un estudio?</h3>
                        <span>Cotizar <img src={arrow} alt="Ir"/></span>
                    </ResultadosView>
                </EstudioIndex>
                <ResultadosIndex href="http://novadurango.dyndns.org:8083/resultados/" target="_blank" imagen={resultados}>
                    <ResultadosView>
                        <h3>Tus resultados en línea</h3>
                        <span>Consultar <img src={arrow} alt="Ir"/></span>
                    </ResultadosView>
                </ResultadosIndex>
                <SocialMediaIndex bgcolor={"#25D366"} target={"_blank"} rel={"noreferrer"} href="https://api.whatsapp.com/send?phone=526181588403&app=facebook&entry_point=page_cta&fbclid=IwAR3vNWkBit4u8lF7H4Limb2aURS0rvVc_2EXaj9Gg4XaQMk_lIO7opqUZ_0" area={"e"}>
                    <img src={wa} alt="whatsapp"/>
                </SocialMediaIndex>
                <SocialMediaIndex bgcolor={"#3b5998"} target={"_blank"} rel={"noreferrer"} href="https://www.facebook.com/labnovamx" area={"f"}>
                    <img src={fb} alt="facebook"/>
                </SocialMediaIndex>
                <SocialMediaIndex bgcolor={"#bc2a8d"} target={"_blank"} rel={"noreferrer"} href="https://www.instagram.com/laboratorionovamx/" area={"g"}>
                    <img src={ig} alt="instagram"/>
                </SocialMediaIndex>
                <SocialMediaIndex bgcolor={"#c4302b"} target={"_blank"} rel={"noreferrer"}  href="https://www.youtube.com/channel/UCp9wwNw9sUZSTp9JPfteTFw" area={"h"}>
                    <img src={yt} alt="youtube"/>
                </SocialMediaIndex>
                <ServiciosIndex to={"/Servicios"} image={home_services}>
                    <ServiciosView>
                        <em>Descubre</em>
                        <h2>Nuestros servicios</h2>
                    </ServiciosView>
                </ServiciosIndex>
                <GaleriaIndex to={"/Galeria"} image={galeria}>
                    <GaleriaView>
                        <em>Equipo de primer nivel</em>
                        <h2>Explora nuestra galería</h2>
                    </GaleriaView>
                </GaleriaIndex>
                <ContactoIndex to={"/contacto"} image={contact_image} onlyMobile={true}>
                    <h2>Contacto</h2>
                </ContactoIndex>
            </Layout>
        </div>
    )
}
