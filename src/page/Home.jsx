import Hero from '../components/Hero';
import Info from '../components/Info';
import Paquetes from '../components/Paquetes';
import CtaFinal from '../components/CtaFinal';
import ProcessConditions from '../components/ProcessConditions';

const Home = () => {
    return (
        <main className="home-main">
            <Hero />
            <Info />
            <ProcessConditions />
            <div className="home-paquetes-wrapper flex flex-col">
                <Paquetes />
            </div>
            <CtaFinal />
        </main>
    );
};

export default Home;
