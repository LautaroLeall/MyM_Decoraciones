import Contratar from '../components/Contratar';
import Requisitos from '../components/Requisitos';

const ContratacionPage = () => {
    return (
        <div className="pt-35 px-5 md:px-8 pb-20 max-w-7xl mx-auto flex flex-col gap-12">
            <Contratar />
            <Requisitos />
        </div>
    );
};

export default ContratacionPage;
