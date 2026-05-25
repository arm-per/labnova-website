import React from 'react'
import styled from 'styled-components'

const Quality = styled.div`
    margin-inline: auto;
    padding-inline: 21px;
    max-width: 75ch;
    h1{
        font-weight: 500;
        text-align: center;
        color: #0063AD;
    }

    p{
        line-height: 150%;
        margin-bottom: 20px;
    }
`

export const Calidad = () => {
  return (
        <main>
            <Quality>
                <h1>
                    POLITICA DE CALIDAD
                </h1>
                <p>
                "En Laboratorio de Análisis Clínicos NOVA, S.A. DE C.V., organización dedicada a ofrecer servicios de análisis clínicos, hemos implementado un Sistema de Gestión de la Calidad basado en la norma ISO 9001:2015, actuando siempre con responsabilidad y transparencia, garantizando la imparcialidad, confidencialidad y compromiso para lograr la satisfacción de nuestros clientes y partes interesadas mediante la mejora continua de la calidad, el establecimiento y logro de nuestros objetivos, buscando siempre un mejor servicio utilizando tecnología de punta, con el compromiso de cumplir con los requisitos legales, normativos y reglamentarios aplicables al ámbito de competencia.
                Estamos comprometidos con el servicio y entrega de resultados con un alto índice de confiabilidad y oportunidad que apoyen al diagnóstico y pronóstico de problemas de salud de nuestros pacientes”.
                </p>
            </Quality>
        </main>
  )
}