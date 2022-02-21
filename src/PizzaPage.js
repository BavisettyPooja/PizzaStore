import React,{useState} from 'react'
import Feature from './Components/Feature'
import Footer from './Components/Footer'
import Navbar from './Components/PagesNav'
import Sidebar from '../src/Components/Sidebar';
import Cards from './Components/Cards/Cards'
import {pizzas} from './Components/Products/pizzas';

function PizzaPage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Feature heading="Favorite pizza of the day!" text="Truffle alfredo sauce topped with 24 carat gold dust." url="pizza" />
            <Cards data={pizzas}/>
            <Footer/>
            
        </div>
    )
}

export default PizzaPage
