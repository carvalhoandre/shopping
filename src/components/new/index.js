import './styles.css'
//images
import Image from '../../assets/images/new1.png'
import ImageTwo from '../../assets/images/new2.png'
import ImageThree from '../../assets/images/new3.png'
import ImageFor from '../../assets/images/new4.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper/core';
// install Swiper modules
SwiperCore.use([Pagination]);

export default function New() {
    return (
        <section className='new section container' id="new">
            <h2 className='section_title'>
                New Arrivals
            </h2>

            <div className='new_ontainer'>
                <div className="swiper new-swiper">
                    <Swiper
                        navigation={true}
                        pagination={{ "dynamicBullets": true }}
                        className="swiper-wrapper"
                        autoplay={{
                            delay: 1000,
                        }}
                        mousewheel={true}
                        keyboard={true}
                    >
                        <SwiperSlide className="new_card swiper-slide">
                            <span className="new_tag">New</span>

                            <img src={Image} alt="Imagem_Ilustrativa" className="new_img" />

                            <div className="new_data">
                                <h3 className="new_title">Longines rose</h3>
                                <span className="new_price">$980</span>
                            </div>

                            <button className="button new_button">ADD TO CART</button>
                        </SwiperSlide>

                        <SwiperSlide className="new_card swiper-slide">
                            <span className="new_tag">New</span>

                            <img src={ImageTwo} alt="Imagem_Ilustrativa" className="new_img" />

                            <div className="new_data">
                                <h3 className="new_title">Jazzmaster</h3>
                                <span className="new_price">$1150</span>
                            </div>

                            <button className="button new_button">ADD TO CART</button>
                        </SwiperSlide>

                        <SwiperSlide className="new_card swiper-slide">
                            <span className="new_tag">New</span>

                            <img src={ImageThree} alt="Imagem_Ilustrativa" className="new_img" />

                            <div className="new_data">
                                <h3 className="new_title">Dreyfuss gold</h3>
                                <span className="new_price">$750</span>
                            </div>

                            <button className="button new_button">ADD TO CART</button>
                        </SwiperSlide>

                        <SwiperSlide className="new_card swiper-slide">
                            <span className="new_tag">New</span>

                            <img src={ImageFor} alt="Imagem_Ilustrativa" className="new_img" />

                            <div className="new_data">
                                <h3 className="new_title">Portuguese rose</h3>
                                <span className="new_price">$1590</span>
                            </div>

                            <button className="button new_button">ADD TO CART</button>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}