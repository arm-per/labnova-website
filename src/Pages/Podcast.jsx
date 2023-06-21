import {SectionTitle} from "Components/SectionTitle";
import spotify from "Assets/Icons/spotify.svg"
import "Styles/podcast.scss";

export const Podcast = () => {

    return (
        <main className="container animation-to-top services">
            <SectionTitle>Nova Podcast</SectionTitle>
            <p className="podcast__description">
                Este es un espacio para atender las dudas de la gente
                sobre temáticas de salud, para resolver sus dudas y profundizar
                de forma dinámica y directa en datos sobre enfermedades,
                síntomas y tratamientos, siempre de la mano de especialistas.
            </p>
            <section className="podcast__player grow">
                <iframe className="podcast__player-iframe" loading="lazy" src="https://open.spotify.com/embed/show/1HL0hf1Gkb2PwgdsJaQLrV?utm_source=generator&theme=0"
                        allow="picture-in-picture"/>
            </section>
            <div>
                <h2 className="podcast__topics-title">Descubre temáticas de</h2>
                <article className="podcast__topics">
                    <span className="podcast__topic-item">Salud</span>
                    <span className="podcast__topic-item">Bienestar</span>
                    <span className="podcast__topic-item">Prevención</span>
                    <span className="podcast__topic-item">Recomendaciones</span>
                </article>
            </div>
            <div>
                <a className="podcast__badget" href="https://open.spotify.com/show/1HL0hf1Gkb2PwgdsJaQLrV"
                    target="_blank" rel="nofollow, noopener, noreferrer">
                    <img src={spotify} alt="Escúchanos en spotify"/>
                </a>
            </div>
        </main>
    )
}
