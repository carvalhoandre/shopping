import './styles.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
// import Swiper core and required modules
import SwiperCore, {
    Autoplay,
    Keyboard,
    Mousewheel,
    Navigation,
    Pagination,

} from 'swiper/core';
//images
import Image from '../../assets/images/testimonial.png'
import ImageOne from '../../assets/images/testimonial1.jpg'
import ImageTwo from '../../assets/images/testimonial2.jpg'
import ImageThree from '../../assets/images/testimonial3.jpg'
// install Swiper modules
SwiperCore.use([Pagination, Navigation, Mousewheel, Keyboard, Autoplay]);

export default function Testimonial() {

    return (
        <section className="testimonial section container">
            <div className="testimonial_container grid">
                <div className="swiper testimonial-swiper">
                    <Swiper
                        navigation={true}
                        pagination={{ "dynamicBullets": true }}
                        className="swiper-wrapper"
                        autoplay={{
                            delay: 7000,
                        }}

                        keyboard={true}
                    >
                        <SwiperSlide className="testimonial_card swiper-slide">
                            <div className="testimonial_quote">
                                <i className='bx bxs-quote-alt-left' />
                            </div>
                            <p className="testimonial_description">
                                They are the best watches that one acquires, also they are always with the latest
                                news and trends, with a very comfortable price and especially with the attention
                                you receive, they are always attentive to your questions.
                            </p>
                            <h3 className="testimonial_date">March 27. 2021</h3>

                            <div class="testimonial_perfil">
                                <img src={ImageOne} alt="" className="testimonial_perfil-img" />

                                <div className="testimonial_perfil-data">
                                    <span className="testimonial_perfil-name">Lee Doe</span>
                                    <span className="testimonial_perfil-detail">Director of a company</span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="testimonial_card swiper-slide">
                            <div className="testimonial_quote">
                                <i className='bx bxs-quote-alt-left' />
                            </div>
                            <p className="testimonial_description">
                                They are the best watches that one acquires, also they are always with the latest
                                news and trends, with a very comfortable price and especially with the attention
                                you receive, they are always attentive to your questions.
                            </p>
                            <h3 className="testimonial_date">March 27. 2021</h3>

                            <div className="testimonial_perfil">
                                <img src={ImageTwo} alt="" className="testimonial_perfil-img" />

                                <div className="testimonial_perfil-data">
                                    <span className="testimonial_perfil-name">Samantha Mey</span>
                                    <span className="testimonial_perfil-detail">Director of a company</span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="testimonial_card swiper-slide">
                            <div className="testimonial_quote">
                                <i className='bx bxs-quote-alt-left' />
                            </div>
                            <p className="testimonial_description">
                                They are the best watches that one acquires, also they are always with the latest
                                news and trends, with a very comfortable price and especially with the attention
                                you receive, they are always attentive to your questions.
                            </p>
                            <h3 className="testimonial_date">March 27. 2021</h3>

                            <div className="testimonial_perfil">
                                <img src={ImageThree} alt="" className="testimonial_perfil-img" />

                                <div className="testimonial_perfil-data">
                                    <span className="testimonial_perfil-name">Raul Zaman</span>
                                    <span className="testimonial_perfil-detail">Director of a company</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="testimonial_images">
                    <div className="testimonial_square"> </div>
                    <img src={Image} alt="" className="testimonial_img" />
                </div>
            </div>
        </section>
    )
}