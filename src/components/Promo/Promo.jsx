import React from 'react';

import './Promo.css';

import Banner from '../../assets/images/banner-image.png';

const Promo = () => {
    return(
        <div className='banner'>
            <img className='banner-img' src={Banner} alt="Banner Promo" />
            <div className='banner-info'>
                <h1 className='banner-title'>Dezembro Promocional</h1>
                <p className='banner-text'>Produtos selecionados com 33% de desconto</p>
                <button className='banner-btn'>Ver Consoles</button>
            </div>
        </div>
    )
}

export default Promo;