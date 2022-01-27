import React, { useState } from "react";
import './styles.css'
/* components */
import Bar from "../../components/bar";
import Header from "../../components/header";
import Featured from "../../components/featured";
import Story from "../../components/story";
import Products from "../../components/products";
import Testimonial from "../../components/testimonial";
import New from "../../components/new";
import NewsLetter from "../../components/newsletter";
import Footer from "../../components/footer";
import Cart from "../../components/cart";
//theme
import { getTheme } from '../../service/theme'

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

export default function Home() {

    const [cart, setCart] = useState(false)

    const [theme] = useState(getTheme())

    const alterCard = () => {
        let aux = !cart
        setCart(aux)
    }

    return (
        <>
            <body className={`${theme === 'light' ? '' : 'dark-theme'}`}>
                <Header alterCard={alterCard} />

                <Cart alterCard={alterCard} cart={cart} />
                <main className="main">
                    <Bar />
                    <Featured />
                    <Story />
                    <Products />
                    <Testimonial />
                    <New />
                    <NewsLetter />
                </main>

                <Footer />

                <a href="home" className="scrollup" id="scroll-up">
                    <i className='bx bx-up-arrow-alt scrollup_icon' />
                </a>
            </body>
        </>
    )
}
