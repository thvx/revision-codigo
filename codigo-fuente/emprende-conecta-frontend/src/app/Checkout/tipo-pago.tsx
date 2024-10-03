import Pago from '../../components/Templates/Checkout/tipo-pago'
import Footer from '../../components/Organism/footer/footer';
import Sidebar from '../../components/Organism/Siderbar/Sidebar';

const App: React.FC = () => {
  const stepsText = [
    'Visualización de Productos',
    'Confirmación de pago',
    'Entrega de voucher'
  ];

  const paymentOptions = [
    { img: 'https://cdn-icons-png.freepik.com/512/2/2244.png', type: 'Tarjetas de débito y crédito' },
    { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQht3rSmIKnojLYmjhI3OAqkw7uVjQHwX-YNQ&s', type: 'Pago Efectivo' },
    { img: 'https://cdn-icons-png.flaticon.com/512/2543/2543363.png', type: 'Pago Contraentrega' }
  ];

  return (
    <div className="app-container h-min-screen bg-custom-blue flex flex-row">
        <Sidebar />
          <div className="flex flex-col justify-center flex-grow">
            <main className="main-content flex flex-col m-8 px-8">
              <Pago
              stepsData={[{ stepsText: stepsText, numPages: 3, actualPage: 2 }]}
              paymentOptions={paymentOptions}  
              />
            </main>
            <Footer />
          </div>
      </div>
  );
};

export default App;


