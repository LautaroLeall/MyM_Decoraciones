import Contratar from '../components/Contratar';
import Requisitos from '../components/Requisitos';

const ContratacionPage = () => {
    return (
        <div className="pt-35 px-5 md:px-55 pb-20 mx-auto flex flex-col gap-12">
            <Contratar />
            <Requisitos />
        </div>
    );
};

export default ContratacionPage;
