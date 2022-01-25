import './styles.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper/core';

//images
import Image from '../../assets/images/testimonial.png'
import ImageOne from '../../assets/images/testimonial1.jpg'
import ImageTwo from '../../assets/images/testimonial2.jpg'
import ImageThree from '../../assets/images/testimonial3.jpg'

// install Swiper modules
SwiperCore.use([Pagination]);

export default function Testimonial() {

    return (
        <section className='testimonial section container'>
            <div className='testimonial__container grid'>
                <div className='swiper testimonial-swiper'>
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
                        <SwiperSlide className='testimonial__card swiper-slide'>
                            <div class="testimonial__quote">
                                <i className='bx bxs-quote-alt-left' />
                            </div>
                            <p className="testimonial__description">
                                They are the best watches that one acquires, also they are always with the latest
                                news and trends, with a very comfortable price and especially with the attention
                                you receive, they are always attentive to your questions.
                            </p>
                            <h3 className="testimonial__date">March 27. 2021</h3>

                            <div className="testimonial__perfil">
                                <img src={ImageOne} alt="Image_ilustrativa" className="testimonial__perfil-img" />

                                <div className="testimonial__perfil-data">
                                    <span className="testimonial__perfil-name">Lee Doe</span>
                                    <span className="testimonial__perfil-detail">Director of a company</span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="testimonial__card swiper-slide">
                            <div className="testimonial__quote">
                                <i className='bx bxs-quote-alt-left' />
                            </div>
                            <p className="testimonial__description">
                                They are the best watches that one acquires, also they are always with the latest
                                news and trends, with a very comfortable price and especially with the attention
                                you receive, they are always attentive to your questions.
                            </p>
                            <h3 className="testimonial__date">March 27. 2021</h3>

                            <div className="testimonial__perfil">
                                <img src={ImageTwo} alt="Image_ilustrativa" className="testimonial__perfil-img" />

                                <div className="testimonial__perfil-data">
                                    <span className="testimonial__perfil-name">Samantha Mey</span>
                                    <span className="testimonial__perfil-detail">Director of a company</span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="testimonial__card swiper-slide">
                            <div className="testimonial__quote">
                                <i className='bx bxs-quote-alt-left' />
                            </div>
                            <p className="testimonial__description">
                                They are the best watches that one acquires, also they are always with the latest
                                news and trends, with a very comfortable price and especially with the attention
                                you receive, they are always attentive to your questions.
                            </p>
                            <h3 className="testimonial__date">March 27. 2021</h3>

                            <div className="testimonial__perfil">
                                <img src={ImageThree} alt="Image_ilustrativa" className="testimonial__perfil-img" />

                                <div className="testimonial__perfil-data">
                                    <span className="testimonial__perfil-name">Raul Zaman</span>
                                    <span className="testimonial__perfil-detail">Director of a company</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>
            <div class="testimonial__images">
                <div class="testimonial__square" />
                <img src={Image} alt="Image_ilustrativa" class="testimonial__img" />
            </div>
        </section>
    )
}