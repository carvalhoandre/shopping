import './styles.css'
import Image from '../../assets/images/story.png'

export default function Story() {
    
    return (
        <section className="story section container">
            <div className="story_container grid">
                <div className="story_data">
                    <h2 className="section_title story_section-title">
                        Our Story
                    </h2>

                    <h1 className="story_title">
                        Inspirational Watch of <br /> this year
                    </h1>

                    <p className="story_description">
                        The latest and modern watches of this year, is available in various
                        presentations in this store, discover them now.
                    </p>

                    <a href="home" className="button button--small">Discover</a>
                </div>

                <div className="story_images">
                    <img src={Image} alt="" className="story_img" />
                    <div className="story_square"></div>
                </div>
            </div>
        </section>
    )
}