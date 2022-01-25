import './styles.css'
import Image from '../../assets/images/product1.png'
import ImageTwo from '../../assets/images/product2.png'
import ImageThree from '../../assets/images/product3.png'
import ImageFor from '../../assets/images/product4.png'
import ImageFive from '../../assets/images/product5.png'

export default function Products() {

    return (
        <section className='products section container' id='products'>
            <h2 className='section_title'>
                Products
            </h2>

            <div className='products_container grid'>
                <article className='products_card'>
                    <img src={Image} alt="Imagem_Ilustrativa" className='products_img' />

                    <h3 className='products_title'>

                    </h3>
                    <span className='products_price'>

                    </span>

                    <button className='products_button'>
                        <i className='bx bx-shopping-bag' />
                    </button>
                </article>
                
                <article className='products_card'>
                    <img src={Image} alt="Imagem_Ilustrativa" className='products_img' />

                    <h3 className='products_title'>
                        Spirit Rose
                    </h3>
                    <span className='products_price'>
                        $1500
                    </span>

                    <button className='products_button'>
                        <i className='bx bx-shopping-bag' />
                    </button>
                </article>

                <article className='products_card'>
                    <img src={ImageTwo} alt="Imagem_Ilustrativa" className='products_img' />

                    <h3 className='products_title'>
                        Khaki Pilot
                    </h3>
                    <span className='products_price'>
                        $870
                    </span>

                    <button className='products_button'>
                        <i className='bx bx-shopping-bag' />
                    </button>
                </article>

                <article className='products_card'>
                    <img src={ImageThree} alt="Imagem_Ilustrativa" className='products_img' />

                    <h3 className='products_title'>
                        Jubilee black
                    </h3>
                    <span className='products_price'>
                        $852
                    </span>

                    <button className='products_button'>
                        <i className='bx bx-shopping-bag' />
                    </button>
                </article>

                <article className='products_card'>
                    <img src={ImageFor} alt="Imagem_Ilustrativa" className='products_img' />

                    <h3 className='products_title'>
                        Fosil
                    </h3>
                    <span className='products_price'>
                        $650
                    </span>

                    <button className='products_button'>
                        <i className='bx bx-shopping-bag' />
                    </button>
                </article>
                
                <article className='products_card'>
                    <img src={ImageFive} alt="Imagem_Ilustrativa" className='products_img' />

                    <h3 className='products_title'>
                        Duchen
                    </h3>
                    <span className='products_price'>
                        $950
                    </span>

                    <button className='products_button'>
                        <i className='bx bx-shopping-bag' />
                    </button>
                </article>

            </div>
        </section>
    )
}