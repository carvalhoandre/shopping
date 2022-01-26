import React, { useState } from "react"
import { getTheme, setTheme } from '../../service/theme'
import './styles.css'

function Header({ alterCard }) {

    const [open, setOpen] = useState(false)

    const [theme] = useState(getTheme())

    const Opening = () => {
        let orOpen = !open
        setOpen(orOpen)
    }

    function scrollHeader() {
        const header = document.getElementById('header')
        // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
        if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
    }
    window.addEventListener('scroll', scrollHeader)

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav_logo">
                    <i className='bx bxs-watch nav_logo-icon' /> Rolex
                </a>

                <div className={`nav_menu ${open ? "show-menu" : null}`} id="nav-menu">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <a href="#home" className="nav_link" onClick={Opening}>Home</a>
                        </li>
                        <li className="nav_item">
                            <a href="#featured" className="nav_link" onClick={Opening}>Featured</a>
                        </li>
                        <li className="nav_item">
                            <a href="#products" className="nav_link" onClick={Opening}>Products</a>
                        </li>
                        <li className="nav_item">
                            <a href="#new" className="nav_link" onClick={Opening}>New</a>
                        </li>
                    </ul>

                    <div className="nav_close" id="nav-close" onClick={Opening}>
                        <i className='bx bx-x' />
                    </div>
                </div>

                <div className="nav_btns">
                    <i className={`bx ${theme === 'light' ? 'bx-moon' : 'bxs-sun'} change-theme`} id="theme-button"
                        onClick={(() => {
                            theme === 'dark' ? setTheme('light') : setTheme('dark')
                            window.location.reload();
                        })}
                    />

                    <div className="nav_shop" id="cart-shop">
                        <i className='bx bx-shopping-bag' onClick={alterCard} />
                    </div>

                    <div className="nav_toggle" id="nav-toggle" onClick={Opening}>
                        <i className='bx bx-grid-alt' />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;