import React from 'react';

import './Products.css';

import { BsArrowRight } from 'react-icons/bs';
import StarWars1 from '../../assets/images/star-wars.png';
import StarWars2 from '../../assets/images/star-wars2.png';
import StarWars3 from '../../assets/images/star-wars3.png';
import StarWars4 from '../../assets/images/star-wars4.png';
import StarWars5 from '../../assets/images/star-wars5.png';
import StarWars6 from '../../assets/images/star-wars6.png';

const Products = () => {
    return(
        <div className='products'>
           <div className='products-top'>
                <h2 className='products-title'>Star Wars</h2>
                <a className='products-link-top' href="#p">Ver Tudo <BsArrowRight  /></a>
           </div>
           <div className='container'>
                <div className='box'>
                    <img className='product-image' src={StarWars1} alt="" />
                    <h3 className='box-image-title'>Produto XYZ</h3>
                    <p className='box-product-price'>R$ 60,00</p>
                    <a className='box-product-details' href="#d">Ver Produto</a>
                </div>
                <div className='box'>
                    <img className='product-image' src={StarWars2} alt="" />
                    <h3 className='box-image-title'>Produto XYZ</h3>
                    <p className='box-product-price'>R$ 60,00</p>
                    <a className='box-product-details' href="#d">Ver Produto</a>
                </div>
                <div className='box'>
                    <img className='product-image' src={StarWars3} alt="" />
                    <h3 className='box-image-title'>Produto XYZ</h3>
                    <p className='box-product-price'>R$ 60,00</p>
                    <a className='box-product-details' href="#d">Ver Produto</a>
                </div>
                <div className='box'>
                    <img className='product-image' src={StarWars4} alt="" />
                    <h3 className='box-image-title'>Produto XYZ</h3>
                    <p className='box-product-price'>R$ 60,00</p>
                    <a className='box-product-details' href="#d">Ver Produto</a>
                </div>
                <div className='box desktop'>
                    <img className='product-image' src={StarWars5} alt="" />
                    <h3 className='box-image-title'>Produto XYZ</h3>
                    <p className='box-product-price'>R$ 60,00</p>
                    <a className='box-product-details' href="#d">Ver Produto</a>
                </div>
                <div className='box desktop'>
                    <img className='product-image' src={StarWars6} alt="" />
                    <h3 className='box-image-title'>Produto XYZ</h3>
                    <p className='box-product-price'>R$ 60,00</p>
                    <a className='box-product-details' href="#d">Ver Produto</a>
                </div>
           </div>
        </div>
    )
}

export default Products;