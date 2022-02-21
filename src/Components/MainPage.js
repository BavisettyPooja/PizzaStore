import React from 'react'
import Feature from './Feature'
import Footer from './Footer'
import Hero from './Hero'
import Products from './Products'
import {  productData,productDataTwo } from './Products/data';
import {GlobalStyle} from '../globalFiles'

const MainPage = () => {
    return (
        <div>
            <GlobalStyle/>
            <Hero/>
            <Products heading='Choose your favorite pizza!' data={productData}/>
            <Feature heading="Favorite pizza of the day!" text="Truffle alfredo sauce topped with 24 carat gold dust." url="pizza" />
            <Products heading='Choose your sweet treats!' data={productDataTwo}/>
            <Footer/>
        </div>
    )
}

export default MainPage
