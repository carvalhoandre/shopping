import './styles.css'

export default function NewsLetter() {

    return (
        <section className='newsletter section container'>
            <div className='newsletter_bg grid'>
                <div>
                    <h2 className='newsletter_title'>
                        Subscribe Our <br /> Newsletter
                    </h2>
                    <p className='newsletter_description'>
                        Don't miss out on your discounts. Subscribe to our email
                        newsletter to get the best offers, discounts, coupons,
                        gifts and much more.
                    </p>
                </div>

                <form className='newsletter_subscribe' action=''> 
                    <input type="email" className='newsletter_input' placeholder='Enter your email'/>
                    <button className='button'>
                        SUBSCRIBE
                    </button>
                </form>
            </div>

            
        </section>
    )
}