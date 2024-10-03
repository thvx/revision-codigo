import React from 'react';
import Header from '../../components/Organism/header/header';
import RegistroVendedor from '../../components/Templates/Registro/registroVendedor';
import Footer from '../../components/Organism/footer/footer';

const App: React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-custom-blue">
      <Header />
      <RegistroVendedor />
      <Footer />
    </div>
  );
};

export default App;
