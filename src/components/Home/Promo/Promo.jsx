import React from 'react';

import './Promo.css';

const Promo = () => {
    return(
        <div className='banner'>
            <div className='banner-info'>
                <h1 className='banner-title'>Dezembro Promocional</h1>
                <p className='banner-text'>Produtos selecionados com 33% de desconto</p>
                <button className='banner-btn'>Ver Consoles</button>
            </div>
        </div>
    )
}

export default Promo;