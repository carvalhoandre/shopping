import React, { useState } from "react"
import './styles.css'

function Header() {

    const[open, setOpen] = useState(false)

    const Opening = () => {
        let orOpen = !open
        setOpen(orOpen)
    }

    return (
        <nav className="nav container">
            <a href="#" className="nav_logo">
                <i className='bx bxs-watch nav_logo-icon' /> Rolex
            </a>

            <div className={`nav_menu ${open ? "show-menu" : null}`} id="nav-menu">
                <ul className="nav_list">
                    <li className="nav_item">
                        <a href="#home" className="nav_link active-link">Home</a>
                    </li>
                    <li className="nav_item">
                        <a href="#featured" className="nav_link">Featured</a>
                    </li>
                    <li className="nav_item">
                        <a href="#products" className="nav_link">Products</a>
                    </li>
                    <li className="nav_item">
                        <a href="#new" className="nav_link">New</a>
                    </li>
                </ul>

                <div className="nav_close" id="nav-close" onClick={Opening}>
                    <i className='bx bx-x' />
                </div>
            </div>

            <div className="nav_btns">

                <i className='bx bx-moon change-theme' id="theme-button"></i>

                <div className="nav_shop" id="cart-shop">
                    <i className='bx bx-shopping-bag' />
                </div>

                <div className="nav_toggle" id="nav-toggle" onClick={Opening}>
                    <i className='bx bx-grid-alt' />
                </div>
            </div>
        </nav>
    )
}

export default Header;