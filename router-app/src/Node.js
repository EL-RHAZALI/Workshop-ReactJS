import React from "react";



export default function Node() {
    return (
        <>
            <header>
                <nav>
                    <div className="Title">Go My Code</div>
                    <ul>
                        <li><a href="Home">Home</a></li>
                        <li><a href="React">React</a></li>
                        <li><a href="Html">Html</a></li>
                        <li><a href="Node">Node</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <p className="phrase">Hi Node</p>
            </main>
            <footer>
                <p className="anas">Dev by Anas</p>
            </footer>
        </>
    )
}