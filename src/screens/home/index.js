import React from "react";
import './styles.css'
/* components */
import Bar from "../../components/bar";
import Header from "../../components/header";

export default function Home() {

    return (
        <>
            <body>
                <Header />

                <main className="main">
                    <Bar />
                </main>
            </body>
        </>
    )
}
