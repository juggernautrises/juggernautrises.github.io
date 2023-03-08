import React from "react";
export default function About() {
    const picData = {
        1: "./images/main.jpg",
        2: "./images/run.jpg",
        3: "./images/bike.jpg",
        4: "./images/jug.jpg"
    }
    const [currentPic, setCurrentPic] = React.useState(picData[1])

    function handlePicChange(id) {
        setCurrentPic(picData[id])
    }

    return (
        <div id="about">
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
                        Outside of development, <span className="underline text-blue-600 hover:cursor-pointer" onClick={() => handlePicChange(2)}>I run</span>, <span className="underline text-blue-600 hover:cursor-pointer" onClick={() => handlePicChange(3)}>ride bikes</span>, and co-habit with a glorious dog named <span className="underline text-blue-600 hover:cursor-pointer" onClick={() => handlePicChange(4)}>Juggernaut</span>.
                    </p>
                </div>
                <div className="md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="extremely rare"
                        src={currentPic}

                    />
                </div>
            </div>
        </div>
    )
}
