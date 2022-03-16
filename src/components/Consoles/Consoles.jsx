import React from 'react';

import './Consoles.css';

import { BsArrowRight } from 'react-icons/bs';
import Consoles1 from '../../assets/images/consoles.png';
import Consoles2 from '../../assets/images/consoles2.png';
import Consoles3 from '../../assets/images/consoles3.png';
import Consoles4 from '../../assets/images/consoles4.png';
import Consoles5 from '../../assets/images/consoles5.png';
import Consoles6 from '../../assets/images/consoles6.png';

const Consoles = () => {
    return(
        <div className='consoles'>
            <div className='consoles-container'>
                <div className='consoles-top'>
                        <h2 className='consoles-title'>Consoles</h2>
                        <a className='consoles-link-top' href="#p">Ver Tudo <BsArrowRight  /></a>
                </div>
                <div className='container'>
                        <div className='box'>
                            <img className='consoles-image' src={Consoles1} alt="" />
                            <h3 className='box-image-title'>Consoles XYZ</h3>
                            <p className='box-consoles-price'>R$ 60,00</p>
                            <a className='box-consoles-details' href="#d">Ver Produto</a>
                        </div>
                        <div className='box'>
                            <img className='consoles-image' src={Consoles2} alt="" />
                            <h3 className='box-image-title'>Controle e consoles XYZ</h3>
                            <p className='box-consoles-price'>R$ 60,00</p>
                            <a className='box-consoles-details' href="#d">Ver Produto</a>
                        </div>
                        <div className='box'>
                            <img className='consoles-image' src={Consoles3} alt="" />
                            <h3 className='box-image-title'>Consoles XYZ</h3>
                            <p className='box-consoles-price'>R$ 60,00</p>
                            <a className='box-consoles-details' href="#d">Ver Produto</a>
                        </div>
                        <div className='box'>
                            <img className='consoles-image' src={Consoles4} alt="" />
                            <h3 className='box-image-title'>Consoles XYZ</h3>
                            <p className='box-consoles-price'>R$ 60,00</p>
                            <a className='box-consoles-details' href="#d">Ver Produto</a>
                        </div>
                        <div className='box desktop'>
                            <img className='consoles-image' src={Consoles5} alt="" />
                            <h3 className='box-image-title'>Consoles XYZ</h3>
                            <p className='box-consoles-price'>R$ 60,00</p>
                            <a className='box-consoles-details' href="#d">Ver Produto</a>
                        </div>
                        <div className='box desktop'>
                            <img className='consoles-image' src={Consoles6} alt="" />
                            <h3 className='box-image-title'>Game Boy Color</h3>
                            <p className='box-consoles-price'>R$ 60,00</p>
                            <a className='box-consoles-details' href="#d">Ver Produto</a>
                        </div>
                </div>
           </div>
        </div>
    )
}

export default Consoles;