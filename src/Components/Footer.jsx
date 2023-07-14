import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    max-width: 1200px;
    margin-inline: auto;
    padding-block: 30px;
    display: flex;
    justify-content: center;
    a{
        text-align: center;
        color: #0063AD;
        text-decoration: none;
        &:hover{
            color: #83AD18;
        }
    }
`

export const Footer = () => {
  return (
      <StyledFooter>
        <Link to="/privacidad">Aviso de privacidad</Link>
      </StyledFooter>
  )
}
