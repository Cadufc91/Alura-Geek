import React from 'react';

import './Miscellaneous.css';

import { BsArrowRight } from 'react-icons/bs';
import Miscellaneous1 from '../../assets/images/miscellaneous.png';
import Miscellaneous2 from '../../assets/images/miscellaneous2.png';
import Miscellaneous3 from '../../assets/images/miscellaneous3.png';
import Miscellaneous4 from '../../assets/images/miscellaneous4.png';


const Miscellaneous = () => {
    return(
        <div className='miscellaneous-container'>
            <div className='miscellaneous'>
                <div className='miscellaneous-top'>
                        <h2 className='miscellaneous-title'>Diversos</h2>
                        <a className='miscellaneous-link-top' href="#p">Ver Tudo <BsArrowRight  /></a>
                </div>
                <div className='container'>
                        <div className='box'>
                            <img className='miscellaneous-image' src={Miscellaneous1} alt="" />
                            <h3 className='box-image-title'>Camisa Atari</h3>
                            <p className='box-miscellaneous-price'>R$ 60,00</p>
                            <a className='box-miscellaneous-details' href="#d">Ver Produto</a>
                        </div>
                        <div className='box'>
                            <img className='miscellaneous-image' src={Miscellaneous2} alt="" />
                            <h3 className='box-image-title'>Camisa SNES</h3>
                            <p className='box-miscellaneous-price'>R$ 60,00</p>
                            <a className='box-miscellaneous-details' href="#d">Ver Produto</a>
                        </div>
                        <div className='box'>
                            <img className='miscellaneous-image' src={Miscellaneous3} alt="" />
                            <h3 className='box-image-title'>Controle e console XYZ</h3>
                            <p className='box-miscellaneous-price'>R$ 60,00</p>
                            <a className='box-miscellaneous-details' href="#d">Ver Produto</a>
                        </div>
                        <div className='box'>
                            <img className='miscellaneous-image' src={Miscellaneous4} alt="" />
                            <h3 className='box-image-title'>Controle e console XYZ</h3>
                            <p className='box-miscellaneous-price'>R$ 60,00</p>
                            <a className='box-miscellaneous-details' href="#d">Ver Produto</a>
                        </div>
                </div>
           </div>
        </div>
    )
}

export default Miscellaneous;