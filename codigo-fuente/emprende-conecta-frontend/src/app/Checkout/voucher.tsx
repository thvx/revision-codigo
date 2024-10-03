import Voucher from '../../components/Templates/Checkout/voucher'
import Footer from '../../components/Organism/footer/footer';
import Sidebar from '../../components/Organism/Siderbar/Sidebar';

const App: React.FC = () => {
  const stepsText = [
    'Visualización de Productos',
    'Confirmación de pago',
    'Entrega de voucher'
  ];

  return (
    <div className="app-container h-min-screen bg-custom-blue flex flex-row">
        <Sidebar />
          <div className="flex flex-col justify-center flex-grow">
            <main className="main-content flex flex-col m-8 px-8">
              <Voucher
              stepsData={[{ stepsText: stepsText, numPages: 3, actualPage: 3 }]}
              userName='Christian'  
              />
            </main>
            <Footer />
          </div>
      </div>
  );
};

export default App;


