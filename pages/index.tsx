import Head from 'next/head'
import About from '../components/About'
// import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
// import Projects from '../components/Projects'
import Sidebar from '../components/Sidebar'
import Skills from '../components/Skills'
import Contact from '../components/Contact'


export default function Home() {
    return (
        <div className="-z-50 snap-y snap-mandatory h-screen overflow-scroll">
            <Head>
                <title>Daniel's Portfolio | Fullstack React Web Developer and Designer in San Diego</title>
                <meta name="description" content="Welcome to Daniel's online portfolio. I am a fullstack react web developer and designer based in San Diego, with experience in designing and building modern web applications. Take a look at my work and get in touch to learn more." />
                <meta name="keywords" content="portfolio, react, fullstack, web developer, web designer, San Diego" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Sidebar */}
            <Sidebar />
            {/* Hero */}
            <section id="hero" className="snap-center">
                <Hero />
            </section>
            {/* About */}
            <section id="about" className="snap-center">
                <About />
            </section>
            {/* Skills */}
            <section id="skills" className="snap-start">
                <Skills />
            </section>
            {/* Projects */}
            <section id="projects" className="snap-start">
                <Projects />
            </section>
            {/* Contact Me */}
            <section id="contact" className="snap-center">
                <Contact />
            </section>
        </div>
    )
}
