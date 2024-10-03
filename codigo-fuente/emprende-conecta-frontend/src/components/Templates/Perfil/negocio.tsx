import Menu from "../../Atoms/Navigation/menu/menu";
import Button from "../../Atoms/Actions/button/button";
import zapatillaJordan from "../../../assets/imagenes/zapatilla_jordan.jpg"
import zapatillaRoja from "../../../assets/imagenes/zapatilla_roja.jpg"
import logoCordillera from "../../../assets/imagenes/Logo-cordillera-blanco.png"
import banner from "../../../assets/imagenes/vendedor.jpg"
import CardProductos from "../../Atoms/DataDisplay/Card/CardProductos";

const PerfilNegocio = () => {
    const menuItems1 = [
        {
          title: 'Inicio',
          iconLink: 'http://www.w3.org/2000/svg',
          d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
        },
        {
          title: 'Carrito de Compras',
          iconLink: 'http://www.w3.org/2000/svg',
          d: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        },
        {
          title: 'Favoritos',
          iconLink: 'http://www.w3.org/2000/svg',
          d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
        },
        {
          title: 'Perfil',
          iconLink: 'http://www.w3.org/2000/svg',
          d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
        },
        {
          title: 'Notificaciones',
          iconLink: 'http://www.w3.org/2000/svg',
          d: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        },
        {
          title: 'Mensajes',
          iconLink: 'http://www.w3.org/2000/svg',
          d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
        },
      ]

    const menuItems2 = [
        {
            title: "Zapatería",
            iconLink: "http://www.w3.org/2000/svg",
            d: "M6 6h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
        },
        {
            title: "Envíos a todo el país",
            iconLink: "http://www.w3.org/2000/svg",
            d: "M18.5 18C18.5 19.1046 17.6046 20 16.5 20C15.3954 20 14.5 19.1046 14.5 18M18.5 18C18.5 16.8954 17.6046 16 16.5 16C15.3954 16 14.5 16.8954 14.5 18M18.5 18H21.5M14.5 18H13.5M8.5 18C8.5 19.1046 7.60457 20 6.5 20C5.39543 20 4.5 19.1046 4.5 18M8.5 18C8.5 16.8954 7.60457 16 6.5 16C5.39543 16 4.5 16.8954 4.5 18M8.5 18H13.5M4.5 18C3.39543 18 2.5 17.1046 2.5 16V7.2C2.5 6.0799 2.5 5.51984 2.71799 5.09202C2.90973 4.71569 3.21569 4.40973 3.59202 4.21799C4.01984 4 4.5799 4 5.7 4H10.3C11.4201 4 11.9802 4 12.408 4.21799C12.7843 4.40973 13.0903 4.71569 13.282 5.09202C13.5 5.51984 13.5 6.0799 13.5 7.2V18M13.5 18V8H17.5L20.5 12M20.5 12V18M20.5 12H13.5"
        },
        {
            title: "Aquí no hay réplicas",
            iconLink: "http://www.w3.org/2000/svg",
            d: "M10,1a9,9,0,1,0,9,9A9,9,0,0,0,10,1Zm0,16.4A7.4,7.4,0,1,1,17.4,10,7.41,7.41,0,0,1,10,17.4ZM13.29,5.29,10,8.59,6.71,5.29,5.29,6.71,8.59,10l-3.3,3.29,1.42,1.42L10,11.41l3.29,3.3,1.42-1.42L11.41,10l3.3-3.29Z",
        },
        {
            title: "Todo en stock",
            iconLink: "http://www.w3.org/2000/svg",
            d: "M20.73 16.52C20.73 16.52 20.73 16.45 20.73 16.41V7.58999C20.7297 7.47524 20.7022 7.36218 20.65 7.25999C20.5764 7.10119 20.4488 6.97364 20.29 6.89999L12.29 3.31999C12.1926 3.2758 12.0869 3.25293 11.98 3.25293C11.8731 3.25293 11.7674 3.2758 11.67 3.31999L3.67001 6.89999C3.54135 6.96474 3.43255 7.06303 3.35511 7.18448C3.27766 7.30592 3.23444 7.44603 3.23001 7.58999V16.41C3.23749 16.5532 3.28195 16.6921 3.35906 16.813C3.43617 16.9339 3.54331 17.0328 3.67001 17.1L11.67 20.68C11.7668 20.7262 11.8727 20.7501 11.98 20.7501C12.0873 20.7501 12.1932 20.7262 12.29 20.68L20.29 17.1C20.4055 17.0471 20.5061 16.9665 20.5829 16.8653C20.6597 16.7641 20.7102 16.6455 20.73 16.52ZM4.73001 8.73999L11.23 11.66V18.84L4.73001 15.93V8.73999ZM12.73 11.66L19.23 8.73999V15.93L12.73 18.84V11.66ZM12 4.81999L18.17 7.58999L12 10.35L5.83001 7.58999L12 4.81999Z"
        },
        {
            title: "@Klyn",
            iconLink: "http://www.w3.org/2000/svg",
            d: "M14,6h3a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H14A5,5,0,0,0,9,7v3H7a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H9v7a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V14h2.22a1,1,0,0,0,1-.76l.5-2a1,1,0,0,0-1-1.24H13V7A1,1,0,0,1,14,6Z"
        },
        {
            title: "@Klyn",
            iconLink: "http://www.w3.org/2000/svg",
            d: "M6 2c1.2 0 2.2.9 2.2 2.1v1.2h5.6c1.2 0 2.2 1 2.2 2.1 0 1.2-1 2.1-2.1 2.1H8.2v2.9h5.4c1.2 0 2.2 1 2.2 2.1s-1 2.1-2.2 2.1H8.6C5.5 18 4 16 4 13.3V4.1C4 2.9 4.9 2 6 2zm2.3 7.3H14c1.1 0 2.1-.9 2.1-2.1 0-1.2-1-2.1-2.1-2.1H8.2v7.8H8.5c.2 0 .3-.1.3-.3v-3zm0 0H8.2v-1h.1z"
        },
        {
            title: "920145238",
            iconLink: "http://www.w3.org/2000/svg",
            d: "M9.52024 7.76662C9.33885 7.35303 9.13737 7.34298 8.96603 7.34298C8.81477 7.33294 8.65288 7.33294 8.48154 7.33294C8.32083 7.33294 8.04845 7.3932 7.81684 7.64549C7.58464 7.89719 6.95007 8.49217 6.95007 9.71167C6.95007 10.9318 7.83693 12.1111 7.95805 12.2724C8.07858 12.4337 9.67149 15.0139 12.192 16.0124C14.2883 16.839 14.712 16.6777 15.1657 16.6269C15.6189 16.5767 16.6275 16.0325 16.839 15.4476C17.0405 14.8733 17.0405 14.3693 16.9802 14.2682C16.9199 14.1678 16.748 14.1069 16.5064 13.9758C16.2541 13.8552 15.0446 13.2502 14.813 13.1693C14.5808 13.0889 14.4195 13.0487 14.2582 13.2904C14.0969 13.5427 13.623 14.0969 13.4724 14.2582C13.3306 14.4195 13.1799 14.4396 12.9377 14.3185C12.686 14.1979 11.8895 13.9356 10.9418 13.0889C10.2056 12.4331 9.71167 11.6171 9.56041 11.3755C9.41979 11.1232 9.54032 10.992 9.67149 10.8709C9.78257 10.7604 9.92378 10.579 10.0449 10.4378C10.1654 10.296 10.2056 10.1855 10.2966 10.0242C10.377 9.86292 10.3368 9.71167 10.2765 9.59114C10.2157 9.48006 9.74239 8.26056 9.52024 7.76662Z"
        },
    ]

    const cardProductData = [{
        image: zapatillaJordan,
        title: "Zapatillas B2 Jord",
        description: "Vive al estilo Jordan",
        badges: ["badge1", "badge2"],
        isNew: true,
        extraClasses: "Yes"
      },
      {
        image: zapatillaRoja,
        title: "Zapatillas M2 Red",
        description: "Disfruta del red",
        badges: ["badge1", "badge2"],
        isNew: true,
        extraClasses: "Yes"
      }];

    return (
      <div style={{ display: 'flex', width: '100vw'}}>
        <div style={{ boxShadow: '10px 0 5px -2px rgba(0, 0, 0, 0.1)', width:'4rem'}}>
          <Menu items={menuItems1} variant="style1" />
        </div>
        <div className="content" style={{width: '100vw'}}>
          <div className="container mx-auto">
            <div className="relative" style={{ width: "100%" }}>
              <div style={{
                height: "500px",
                backgroundImage: `url(${banner})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }} className="justify-start px-10 mb-5">

              </div>
              <div style={{position:'absolute',bottom: '-30px', left: '50%', transform: 'translateX(-50%)'}}>
                <img src={logoCordillera} alt="Imagen superpuesta"
                  className="w-40 h-40 rounded-full border-4 bg-custom-lightblue shadow-lg" />
              </div>
            </div>

            <div className="flex flex-col items-center mt-20">
              <div className="jusstify-center flex w-full" style={{ marginLeft:'20px'}}>
                <div className="flex-1 justify-center text-center my-5 items-center">
                  <h2 className="text-white font-bold text-2xl text-center"> KLYN </h2>
                  <div className="flex justify-center">
                    <Menu items={menuItems2} variant="style2" />
                  </div>
                  <div className="flex gap-3 my-5 justify-center ">
                        <Button text="Seguir" width="auto" />
                        <Button text="Mensaje" width="auto" />
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-center gap-6 p-6">
                  <CardProductos image={cardProductData[0].image} title={cardProductData[0].title}
                    description={cardProductData[0].description} isNew={cardProductData[0].isNew}
                    badges={cardProductData[0].badges} extraClasses={cardProductData[0].extraClasses} />
                  <CardProductos image={cardProductData[1].image} title={cardProductData[1].title}
                  description={cardProductData[1].description} isNew={cardProductData[1].isNew}
                  badges={cardProductData[1].badges} extraClasses={cardProductData[1].extraClasses} />
                </div>
        
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default PerfilNegocio