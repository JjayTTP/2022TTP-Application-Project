import React from 'react'
import image from "../background-Image.jpeg"

export default function Home() {
    return (
        <main style={{backgroundColor: "#d6d3d1"}}>
            <img src={image} alt="Background" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-black-100 font-bold cursive leading-none lg:leading-snug home-name">
                    Hello, Welcome to my Portfolio.
                </h1>
            </section>
        </main>
    )
}