import PerfilNegocio from '../src/app/Perfil/negocio'
import Preregistro from './app/Registro/preregistro'
import Dashboard from './app/Dashboard/dashboard'
import Checkout from './app/Checkout/checkout'
import Pago from './app/Checkout/tipo-pago'
import Voucher from './app/Checkout/voucher'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegistroComprador from '../src/app/Registro/registroComprador'
import RegistroVendedor from '../src/app/Registro/registroVendedor'
import Login from './app/Login/login'
import Homepage from './app/Homepage/homepage'
import Perfilusuario from './app/Perfilusuario/perfilusuario'
import ProductosFav from './app/Productosfav/Productos'
import ProductDetailsPage from './app/ProductDetailsPage/productdetailspage'
import Mensaje from './app/Mensaje/mensaje'
import { TotalAmountProvider } from './app/Checkout/totalAmountContext'

function App() {

  return (
    <TotalAmountProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/preregistro" element={<Preregistro />} />
          <Route path="/registro/comprador" element={<RegistroComprador />} />
          <Route path="/registro/vendedor" element={<RegistroVendedor />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/pago" element={<Pago />} />
          <Route path="/voucher" element={<Voucher />} />
          <Route path="/perfil/negocio" element={<PerfilNegocio/>} />
          <Route path="/perfil/usuario" element={<Perfilusuario />} />
          <Route path='/favoritos' element={<ProductosFav />} />
          <Route path='/productdetails/:id' element={<ProductDetailsPage />} />
          <Route path='/mensaje' element={<Mensaje />} />
      </Routes>
      </BrowserRouter>
      </TotalAmountProvider>
  );
}

export default App
