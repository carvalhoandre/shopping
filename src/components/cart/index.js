import './styles.css'
import Image from '../../assets/images/featured1.png'
import ImageOne from '../../assets/images/featured2.png'
import ImageTwo from '../../assets/images/featured3.png'


export default function Cart({ cart, alterCard }) {
    
    return (
        <div className={`cart ${cart ? 'show-cart' : null}`} id='cart'>
            <i className='bx bx-x cart_close' id="cart-close" onClick={alterCard} />

            <h2 className='cart_title-center'>
                My Cart
            </h2>

            <div className='cart_container'>
                <article className='cart_card'>
                    <div className='cart_box'>
                        <img src={Image} alt="Imagem ilustrativa" className='cart_img' />
                    </div>

                    <div className='cart_details'>
                        <h3 className='cart_title'>Jazzmaster</h3>
                        <span className='cart_price'>$1050</span>

                        <div className='cart_amount'>
                            <div className='cart_amount-content'>
                                <span className='cart_amount-box'>
                                    <i className='bx bx-minus' />
                                </span>

                                <span className='cart_amount-number'>1</span>

                                <span className='cart_amount-box'>
                                    <i className='bx bx-plus' />
                                </span>
                            </div>

                            <i className='bx bx-trash cart_amount-trash' />
                        </div>
                    </div>
                </article>

                <article className='cart_card'>
                    <div className='cart_box'>
                        <img src={ImageOne} alt="Imagem ilustrativa" className='cart_img' />
                    </div>

                    <div className='cart_details'>
                        <h3 className='cart_title'>Rose Gold</h3>
                        <span className='cart_price'>$850</span>

                        <div className='cart_amount'>
                            <div className='cart_amount-content'>
                                <span className='cart_amount-box'>
                                    <i className='bx bx-minus' />
                                </span>

                                <span className='cart_amount-number'>1</span>

                                <span className='cart_amount-box'>
                                    <i className='bx bx-plus' />
                                </span>
                            </div>

                            <i className='bx bx-trash cart_amount-trash' />
                        </div>
                    </div>
                </article>

                <article className='cart_card'>
                    <div className='cart_box'>
                        <img src={ImageTwo} alt="Imagem ilustrativa" className='cart_img' />
                    </div>

                    <div className='cart_details'>
                        <h3 className='cart_title'>Longines Rose</h3>
                        <span className='cart_price'>$ 980</span>

                        <div className='cart_amount'>
                            <div className='cart_amount-content'>
                                <span className='cart_amount-box'>
                                    <i className='bx bx-minus' />
                                </span>

                                <span className='cart_amount-number'>1</span>

                                <span className='cart_amount-box'>
                                    <i className='bx bx-plus' />
                                </span>
                            </div>

                            <i className='bx bx-trash cart_amount-trash' />
                        </div>
                    </div>
                </article>
            </div>

            <div className='cart_prices'>
                <span className='cart_prices-item'>3 items</span>
                <span className='cart_prices-total'>$2880</span>
            </div>
        </div>
    )
}