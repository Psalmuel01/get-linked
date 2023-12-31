import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Judging from "./components/Judging";
import Partners from "./components/Partners";
import Privacy from "./components/Privacy";
import Prizes from "./components/Prizes";
import Rules from "./components/Rules";
import Timeline from "./components/Timeline";


const Home = () => {
    return (
        <div>
            <Hero />
            <Intro />
            <Rules />
            <Judging />
            <Faq />
            <Timeline />
            <Prizes />
            <Partners />
            <Privacy />
            <Footer />
        </div>
    )
}

export default Home;