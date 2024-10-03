import React from "react";
import Header from "../../components/Organism/header/header";
import RegistroComprador from "../../components/Templates/Registro/registroComprador";
import Footer from '../../components/Organism/footer/footer';

const App: React.FC = () => {
    return (
        <div className="w-full flex flex-col bg-custom-blue">
            <Header />
            <RegistroComprador />
            <Footer />
        </div>
    );
};

export default App;
