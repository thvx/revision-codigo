import React, { useState} from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import NavbarUser from '../navbar/navbar2';

const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const location = useLocation();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const isHomePage = location.pathname === '/';

  return (
    <header className="w-full">
      {isHomePage ? (
        <Navbar 
          searchValue={searchValue}
          onSearchChange={handleSearchChange}
        />
      ) : (
        <NavbarUser />
      )}
    </header>
  );
};

export default Header;
