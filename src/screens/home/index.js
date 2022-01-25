import React from "react";
import './styles.css'
/* components */
import Bar from "../../components/bar";
import Header from "../../components/header";
import Featured from "../../components/featured";
import Story from "../../components/story";

export default function Home() {

    return (
        <>
            <body>
                <Header />

                <main className="main">
                    <Bar />
                    <Featured />
                    <Story />
                </main>
            </body>
        </>
    )
}
