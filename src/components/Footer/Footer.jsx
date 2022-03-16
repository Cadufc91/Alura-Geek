import React from 'react';
import { GiConsoleController } from 'react-icons/gi';

import './Footer.css';

const Footer = () => {
    return(
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-top'>
                    <div className='footer-logo'>
                        <GiConsoleController className='footer-console'/>
                        <div className='footer-title'>Alura<span className='footer-title-colored'>Geek</span></div>
                    </div>
                </div>
                <div className='footer-info'>
                    <ul className='footer-links'>
                        <li><a href="#q">Quem somos nós</a></li>
                        <li><a href="#pp">Política de privacidade</a></li>
                        <li><a href="#pf">Programa fidelidade</a></li>
                        <li><a href="#n">Nossas lojas</a></li>
                        <li><a href="#qf">Quero ser franqueado</a></li>
                        <li><a href="#a">Anuncie Aqui</a></li>
                    </ul>
                </div>
                <div className='footer-contact'>
                    <h3 className='footer-contact-title'>Fale Conosco</h3>
                    <input className='footer-contact-name' type="text" placeholder='Nome' />
                    <textarea className='footer-contact-message' name="text" id="message" cols="30" rows="20" placeholder='Escreva sua mensagem'></textarea>
                    <button className='footer-btn'>Enviar mensagem</button>
                </div>
            </div>
            <div className='footer-copyright'>
                <p className='copyright'>Desenvolvido por <a href="https://github.com/Cadufc91">Cadu</a> 2022</p>
            </div>
        </div>
    )
}

export default Footer;