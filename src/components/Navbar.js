import React from "react";
import github from "../assets/icons/GitHub-Mark-Light-64px.png"
import linkedin from "../assets/icons/LI-In-Bug.png"
import imdb from "../assets/icons/imdb.png"

export default function Navbar() {
    const date = new Date()
    const [isWednesday, setWednesday] = React.useState(date.getDay() === 3)
    const wedImage = isWednesday ? "./images/wednesday.png" : "./images/tuesday.png"
    const wedTitle = isWednesday ? "It is Wednesday, my dudes!" : "It is not Wednesday, my dudes 😢"
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="https://ashnayar.com" className="title-font font-medium text-white mb-4 md:mb-0">
                    <div className="ml-3 text-xl">ash nayar</div>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                    <a href="http://github.com/juggernautrises" target="_blank" rel="noreferrer" className="mr-5 hover:text-white">
                        <img src={github} width="45px" alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/ash-nayar/" target="_blank" rel="noreferrer" className="mr-5 hover:text-white">
                        <img src={linkedin} width="50px" alt="linkedin" />
                    </a>
                    <a href="https://www.imdb.com/name/nm2363452/" target="_blank" rel="noreferrer" className="mr-5 hover:text-white">
                        <img src={imdb} width="45px" alt="imdb" />
                    </a>
                </nav>
                <div><img src={wedImage} alt={wedTitle} title={wedTitle} /></div>
            </div>
        </header>
    )
}