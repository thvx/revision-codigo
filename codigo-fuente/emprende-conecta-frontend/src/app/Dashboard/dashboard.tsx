import Sidebar from '../../components/Organism/Siderbar/Sidebar';
import Dashboard from '../../components/Templates/Dashboard/dashboard'
import Footer from '../../components/Organism/footer/footer';
import React, { useState, useEffect } from 'react';
import {getProductsRequest} from '../../api/products';

const App: React.FC = () => {
    interface TableResult {
        id: number;
        name: string;
        price: string;
        category: string;
    }
    
    interface CardData {
        id: number,
        image: string;
        title: string;
        description: string;
        badges: string[];
        isNew?: boolean;
        extraClasses?: string;
    }
    const [tableResults, setTableResults] = useState<TableResult[]>([]);
    const [cardsData, setCardsData] = useState<CardData[]>([]);
    
    const getProductTags = (tags: { name: string }[]) => tags.map((tag) => tag.name);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await getProductsRequest();
              const dataTableResult = response.map((product) => ({
                id: product.id,
                name: product.name,
                price: `S/. ${product.price}`,
                category: product.product_category.name,
              }));

              const BASE_URL = 'http://localhost:8000';

              const dataCards = response.map((product) => ({
                id: product.id,
                image: `${BASE_URL}${product.image}`,
                title: product.name,
                description: `S/. ${product.price}`,
                badges: getProductTags(product.product_tags),
              }));

                setTableResults(dataTableResult);
                setCardsData(dataCards);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

  return (
    <div className="app-container h-min-screen flex-grow bg-custom-blue flex flex-col">
      <div className="flex">
        <Sidebar />
        <main className="main-content ml-8 p-4">
          <Dashboard tableResults={tableResults} cardsData={cardsData} />
        </main>
      </div>
      <Footer />
    </div>
  );
};
export default App;