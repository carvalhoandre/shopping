import './styles.css'

export default function Footer() {

    return (
        <footer className='footer section'>
            <div className='footer_container container grid'>
                <div className='footer_content'>
                    <h3 className='footer_title'>
                        Our information
                    </h3>

                    <ul className='footer_list'>
                        <li>BR - Brasil</li>
                        <li>São Paulo</li>
                        <li>55 11 949245875</li>
                    </ul>
                </div>

                <div className='footer_content'>
                    <h3 className='footer_title'>About BR</h3>

                    <ul className='footer_links'>
                        <li>
                            <a href="#" className='footer_link'>
                                Support Center
                            </a>
                        </li>
                        <li>
                            <a href="#" className='footer_link'>
                                Customer Support
                            </a>
                        </li>
                        <li>
                            <a href="#" className='footer_link'>
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className='footer_link'>
                                Copy Rigth
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='footer_content'>
                    <h3 className='footer_title'>Product</h3>

                    <ul className='footer_links'>
                        <li>
                            <a href="#" className='footer_link'>
                                Mountain bikes
                            </a>
                        </li>
                        <li>
                            <a href="#" className='footer_link'>
                                Eletric
                            </a>
                        </li>
                        <li>
                            <a href="#" className='footer_link'>
                                Road Bikes
                            </a>
                        </li>
                        <li>
                            <a href="#" className='footer_link'>
                                Accesories
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='footer_content'>
                    <h3 className='footer_title'>Social</h3>

                    <ul className='footer_social'>
                        <a href="#" className='footer_social-link'>
                            <i className='bx bxl-facebook' />
                        </a>
                        <a href="#" className='footer_social-link'>
                            <i className='bx bxl-instagram' />
                        </a>
                        <a href="#" className='footer_social-link'>
                            <i className='bx bxl-youtube' />
                        </a>
                    </ul>
                </div>
            </div>

            <span className='footer_copy'>
                &#169; André Carvalho. All rigths reserved
            </span>
        </footer>
    )
}