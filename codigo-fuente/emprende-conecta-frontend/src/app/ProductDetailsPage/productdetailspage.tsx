import Footer from "../../components/Organism/footer/footer";
import ProductDetailsTemplate from "../../components/Templates/ProductDetailsTemplate/productdetailstemplate";
import NavBar from "../../components/Organism/navbar/navbar2";
import { useParams } from 'react-router-dom';
import { Product } from "../../api/products";
import { getProductsByIdRequest } from "../../api/products";
import { useEffect, useState } from "react";

const ProductDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const [item, setItem] = useState<Product | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response: Product = await getProductsByIdRequest(id!);
              response.image = `http://localhost:8000${response.image}`;
              
              setItem(response);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, []);

    return (
        <div className="h-full flex flex-col bg-custom-blue">
            <NavBar />
            {item && <ProductDetailsTemplate {...item} />}
            <Footer />
        </div>
    );
};

export default ProductDetailsPage;
