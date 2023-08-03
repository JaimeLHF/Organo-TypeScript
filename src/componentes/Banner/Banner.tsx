import './Banner.css'
import React from 'react'

interface BannerProps {
    endereco: string
    textoAlternativo?: string
}

const Banner = ({ endereco, textoAlternativo }: BannerProps) => {
    // JSX
    return (
        <header className="banner">
            {/* <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/> */}
            <img src={endereco} alt={textoAlternativo} />
        </header>
    )
}

export default Banner;