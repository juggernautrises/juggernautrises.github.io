import React from "react";
export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hello, I'm Ash!
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I'm currently a full stack developer with a strong focus on the backend.
                        Previously, I worked as a technical director and pipeline developer for animated films.
                    </p>
                    <p className="mb-8 leading-relaxed">
                        Outside of development, I run, ride bikes, and co-habit with a glorious dog named Juggernaut.
                    </p>
                </div>
                <div className="md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="extremely rare"
                        src="./images/jug_cover.jpg"
                    />
                </div>
            </div>
        </section>
    )
}
