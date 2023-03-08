import About from "./About"
import Navbar from "./Navbar"
import Projects from "./Projects"

export default function Home() {
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <Navbar />
            <About />
            <Projects />
        </main>

    )
}