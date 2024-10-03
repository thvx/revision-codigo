import Button2 from "../../Atoms/Actions/button2/button2";
import Portada from "../../../assets/imagenes/Portada.png";
import CategoryAvatar from "../../Atoms/Actions/categoryavatar/categoryavatar";
import Banner from "../../../assets/imagenes/Banner-medio.jpg";
import Carousel from "../../Organism/carousel/carousel";
import { Link } from 'react-router-dom';
import {getProductsRequest} from '../../../api/products';
import { useState, useEffect } from 'react';

const HomeTemplate = () => {
    const [items, setItems] = useState<{ image: string; title: string; price: string; badges: string[]; }[]>([]);
    const getProductTags = (tags: { name: string }[]) => tags.map((tag) => tag.name);

    const mapProducts = (products: any[]) => {
        const BASE_URL = 'http://localhost:8000';
        return products.map((product) => ({
          image: `${BASE_URL}${product.image}`,
          title: product.name,
          price: `S/. ${product.price}`,
          badges: getProductTags(product.product_tags),
        }));
      };
      
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await getProductsRequest();
            setItems(mapProducts(response));
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);

    return (
        <>
            <div className="flex flex-col md:justify-center md:flex-row-reverse md:items-center p-5 ">
                <div className="flex  justify-center">
                    <img src={Portada} alt="Portada"></img>
                </div>
                <div className="flex flex-col gap-6  ">
                    <div>
                        <p className="text-center leading-10">
                            <b className="text-white text-3xl sm:text-4xl">
                                Lleva tu negocio al mundo digital y{" "}
                            </b>
                            <br></br>
                            <b className="text-custom-yellow text-3xl sm:text-4xl">
                                Vende a todo el Perú
                            </b>
                        </p>
                    </div>
                    <div>
                        <p className="text-white text-lg  text-center md:text-start ">
                            <span>Sin comisiones. Digitaliza tu MYPE</span>
                            <br></br>
                            <span>
                                Sin tarifas. Crecimiento digital en Perú
                            </span>
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <Link to="/login">
                            <Button2
                                styles="max-w-56 rounded-lg"
                                variant="yellow"
                                text="¡Vamos!"
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col  p-5 gap-16">
                <strong className="text-white text-center text-3xl sm:text-4xl">
                    Lo mejor para tu negocio digital
                </strong>
                <div className="flex flex-wrap gap-20 justify-center ">
                    <CategoryAvatar
                        imgSrc={"../src/assets/imagenes/salud.jpeg"}
                        title="Salud"
                    />
                    <CategoryAvatar
                        imgSrc={"../src/assets/imagenes/mascotas.jpg"}
                        title="Mascotas"
                    />
                    <CategoryAvatar
                        imgSrc={"../src/assets/imagenes/deportes.jpg"}
                        title="Deporte"
                    />
                    <CategoryAvatar
                        imgSrc={"../src/assets/imagenes/postres.jpg"}
                        title="Postres"
                    />
                </div>
            </div>
            <div className="flex flex-col  p-5 gap-16">
                <strong className="text-white text-center text-3xl sm:text-4xl">
                    Lo nuevo en Emprende Conecta
                </strong>
                <div>
                    <ul className="flex flex-row gap-20 justify-center mb-8">
                        <li className="p-4 last-of-type:border-none border-r-custom-blue border-r-1 text-custom-blue bg-custom-yellow ">
                            <strong>TODO</strong>
                        </li>
                        <li className="p-4 last-of-type:border-none border-r-custom-blue border-r-1  text-custom-blue  bg-custom-yellow">
                            <strong>DEPORTE</strong>
                        </li>
                        <li className="p-4 last-of-type:border-none border-r-custom-blue border-r-1  text-custom-blue  bg-custom-yellow">
                            <strong>COMIDAS</strong>
                        </li>
                    </ul>
                    <div>
                        <img src={Banner} alt="Banner"></img>
                    </div>
                </div>
            </div>
            <div className="p-5">
                <Carousel items={items} />
            </div>
        </>
    );
};

export default HomeTemplate;
