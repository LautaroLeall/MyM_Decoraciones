import Complementos from '../components/Complementos';
import ContactCom from '../components/ContactCom';

const ComplementosPage = () => {
    return (
        <div className="pt-33 px-5 md:px-10 pb-20 mx-auto flex flex-col gap-12">
            <Complementos />
            <ContactCom />
        </div>
    );
};

export default ComplementosPage;
