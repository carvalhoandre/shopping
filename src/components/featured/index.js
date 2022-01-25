import './styles.css'
import Image from '../../assets/images/featured1.png'
import ImageTwo from '../../assets/images/featured2.png'
import ImageThree from '../../assets/images/featured3.png'

export default function Featured() {
    return (
        <section className="featured section container" id='featured'>
            <h2 className='section_title'>
                Featured
            </h2>

            <div className='featured_container grid'>
                <article className='featured_card'>
                    <span className='featured_tag'>Sale</span>

                    <img src={Image} alt="Image_Ilustrativa" className='featured_img' />

                    <div className='featured_data'>
                        <h3 className='featured_title'>Jazzmaster</h3>
                        <span className='featured_price'>$1050</span>
                    </div>

                    <button className='button featured_button'>
                        ADD TO CART
                    </button>
                </article>
                
                <article className='featured_card'>
                    <span className='featured_tag'>Sale</span>

                    <img src={ImageTwo} alt="Image_Ilustrativa" className='featured_img' />

                    <div className='featured_data'>
                        <h3 className='featured_title'>Ingersoll</h3>
                        <span className='featured_price'>$250</span>
                    </div>

                    <button className='button featured_button'>
                        ADD TO CART
                    </button>
                </article>
                
                <article className='featured_card'>
                    <span className='featured_tag'>Sale</span>

                    <img src={ImageThree} alt="Image_Ilustrativa" className='featured_img' />

                    <div className='featured_data'>
                        <h3 className='featured_title'>Rose Gold</h3>
                        <span className='featured_price'>$890</span>
                    </div>

                    <button className='button featured_button'>
                        ADD TO CART
                    </button>
                </article>
            </div>
        </section>
    )
}