import Complementos from '../components/Complementos';
import ContactCom from '../components/ContactCom';

const ComplementosPage = () => {
    return (
        <div className="pt-35 px-5 md:px-8 pb-20 max-w-7xl mx-auto flex flex-col gap-12">
            <Complementos />
            <ContactCom />
        </div>
    );
};

export default ComplementosPage;
