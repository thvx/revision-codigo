import SearchInput from "../../Atoms/Input/search/search";
import Table from "../../Atoms/DataDisplay/Table/Table";
import CardProductos from "../../Atoms/DataDisplay/Card/CardProductos";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

interface DashboardProps {
    tableResults:{
        id: number;
        name: string;
        price: string;
        category: string;
    }[];
    cardsData: {
        id: number,
        image: string
        title: string;
        description: string;
        badges: string[];
        isNew?: boolean;
        extraClasses?: string;
    }[];
    
}

const Dashboard: React.FC<DashboardProps> = ({tableResults, cardsData}) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredTableResults, setFilteredTableResults] = useState(tableResults);
    const [filteredResultsCards, setFilteredResultsCards] = useState(cardsData);
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const query = params.get('search') ?? '';
        setSearchQuery(query);
    }, [location.search]);

    useEffect(() => {
        const fetchData = async () => {
            // Filtrar resultados de la tabla
            const filteredResults = tableResults.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
            setFilteredTableResults(filteredResults);
            
            // Filtrar tarjetas de resultados
            const filteredCards = cardsData.filter(card => card.title.toLowerCase().includes(searchQuery.toLowerCase()));
            setFilteredResultsCards(filteredCards);
        };
        fetchData();
    }, [searchQuery, tableResults, cardsData]);

    return (
        <div className="flex flex-col">
            <div className="flex flex-col text-white items-center m-12">
                <Link to="/dashboard">
                    <button className="btn btn-ghost text-3xl mb-12">Emprende&Conecta</button>
                </Link>
                <div className="mx-16 w-full max-w-6xl justify-center">
                    <SearchInput placeholder="Buscar" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    <Table data={filteredTableResults} />
                </div>
            </div>
            <div className="flex flex-row gap-6">
                <div className="flex flex-col items-center gap-6 p-6">
                    <h2 className="text-white text-2xl">Recomendados</h2>
                    <div className="flex flex-col gap-6 p-6">
                        {cardsData.map((card) => (
                            <CardProductos key={card.id} {...card} extraClasses="h-80"/>
                        ))}
                    </div>
                </div>
                
                <div className="flex flex-col items-center gap-6 p-6">
                    <h2 className="text-white text-2xl">Resultados</h2>
                    <div className="flex flex-row justify-center gap-6 p-6 flex-wrap">
                        {filteredResultsCards.map((card) => (
                            <CardProductos key={card.id} {...card} extraClasses="h-96"/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;