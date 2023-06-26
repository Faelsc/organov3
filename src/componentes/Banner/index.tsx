import './Banner.css'

import React from 'react'

interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string
}

export const Banner = ({ enderecoImagem, textoAlternativo } :BannerProps) => {
    // JSX
    return (
        <header className="banner">
            {/* <img src="" alt="O banner principal da página do Organo"/> */}
            <img src={enderecoImagem} alt={textoAlternativo}/>
        </header>
    )
}

export default Banner