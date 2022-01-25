import React from "react";
import './styles.css'
/* components */
import Bar from "../../components/bar";
import Header from "../../components/header";
import Featured from "../../components/featured";
import Story from "../../components/story";
import Products from "../../components/products";
import Testimonial from "../../components/testimonial";
import New from "../../components/new";
import NewsLetter from "../../components/newsletter";
import Footer from "../../components/footer";

export default function Home() {

    return (
        <>
            <body>
                <Header />

                <main className="main">
                    <Bar />
                    <Featured />
                    <Story />
                    <Products />
                    <Testimonial />
                    <New />
                    <NewsLetter />
                </main>

                <Footer />
            </body>
        </>
    )
}
