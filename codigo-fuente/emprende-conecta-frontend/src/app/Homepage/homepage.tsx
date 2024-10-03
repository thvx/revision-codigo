import Footer from "../../components/Organism/footer/footer";
import Navbar from "../../components/Organism/navbar/navbar";
import { ChangeEvent, useState } from 'react';
import HomeTemplate from "../../components/Templates/Homepage/HomeTemplate";

function App() {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    return (
        <div className="h-full flex flex-col bg-custom-blue">
            <div>
                <Navbar 
                    searchValue={searchValue} 
                    onSearchChange={handleSearchChange}
                />
                <HomeTemplate />
                <Footer />
            </div>
        </div>
    );
}

export default App;