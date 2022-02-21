import React, {useState} from 'react'
import Feature from './Components/Feature'
import Footer from './Components/Footer'
import Navbar from './Components/PagesNav'
import Cards from './Components/Cards/Cards'
import { desserts } from './Components/Products/desserts'
import Sidebar from '../src/Components/Sidebar';

function PizzaPage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Feature heading="Favorite sweet treat of the day!" text="Cruncy choco chips in soft spongy brownie." url="sweet"/>
            <Cards data={desserts}/>
            <Footer/>
            
        </div>
    )
}

export default PizzaPage
