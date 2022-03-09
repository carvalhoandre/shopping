import './styles.css'
import Image from '../../assets/images/home.png'

export default function Bar() {
    return (
        <section className="home" id="home">
            <div className="home_container container grid">
                <div className="home_img-bg">
                    <img src={Image} alt="relogio" className='home_img' />
                </div>

                <div className='home_social'>
                    <a href="https://www.facebook.com/" target="_new" rel="external" className='home_social-link'>
                        Facebook
                    </a>
                    <a href="https://www.twitter.com/" target="_new" rel="external" className='home_social-link'>
                        Twitter
                    </a>
                    <a href="https://www.instagram.com/" target="_new" rel="external" className='home_social-link'>
                        Instagram
                    </a>
                </div>

                <div className='home_data'>
                    <h1>
                        NEW WATCH <br /> COLLECTIONS B720
                    </h1>
                    <p className='home_description'>
                        Latest arrival of the new imported watches with a modern and resistant design.
                    </p>
                    <span className='home_price'>$1245</span>
                    <div className='home_btns'>
                        <a href="home" className='button button--gray button--small'>
                            Discover
                        </a>
                        <button className='button home_button'>
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}