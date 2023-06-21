import {SectionTitle} from "Components/SectionTitle";
import {CardOneLayout} from "Components/CardOneLayout";
import {CardOne} from "Components/CardOne";
import analisis from "Assets/Servicios/analisis_clinilcos.jpg";
import analisisespcializados from "Assets/Servicios/especializad.jpg";
import urgencias from "Assets/Servicios/WEB_ URGENCIAS.jpg";
import domicilio from "Assets/Servicios/servicio_a_domicilio.jpg";
import togo from "Assets/services_icons/domicilio.svg";
import emergency from "Assets/services_icons/emergency.svg";
import specialstudies from "Assets/services_icons/specialstudies.svg";
import studies from "Assets/services_icons/studies.svg";

export const Servicios = () => {
    return <main className="container services animation-to-top">
        <SectionTitle>
            Nuestros servicios
        </SectionTitle>
        <CardOneLayout>
            <CardOne title="Análisis Clínicos" image={analisis} icon={studies}>
                Realizamos <em>más de 350 estudios</em> de rutina
                con la más <em>alta tecnología</em>.
                <a href="https://cotizador.labnova.com.mx"
                   target="_blank" rel="prefetch">Cotizar</a>
            </CardOne>
            <CardOne title="Análisis Clínicos Especializados" image={analisisespcializados} icon={specialstudies}>
                Convenio con <em>los mejores laboratorios del país</em>,
                para estudios de <em>alta especialidad</em>.
                <a href="https://cotizador.labnova.com.mx"
                   target="_blank" rel="prefetch">Cotizar</a>
            </CardOne>
            <CardOne title="Servicio de Urgencias" className={"fitTop"} image={urgencias} icon={emergency}>
                A tu disposición <em>24/7 los 365 días</em> del año.
                Llámanos al <em>618 175 3034</em>.
                <a href="tel:6181753034">Llamar</a>
            </CardOne>
            <CardOne title="Servicio a Domicilio" image={domicilio} icon={togo}>
                Estamos para servirte cuando y
                donde tú nos necesites, <em>los 365 días del año</em>.
                <a href="https://wa.me/+5216181588403?text=Quiero%20programar%20una%20cita"
                target="_blank" rel="nofollow noreferrer noopener">Programar cita</a>
            </CardOne>
        </CardOneLayout>
    </main>
}
