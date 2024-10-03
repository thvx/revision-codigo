import React from "react";

type MenuItem = {
    title: string,
    iconLink: string,
    d: string,
}

type MenuProps = {
    variant: "style1" | "style2"
}

const menuData: MenuItem[] = [
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

const Menu: React.FC<MenuProps> = ({variant}) => {
    const items = menuData;
    
    if (variant === "style1") {
        return (
            <>
                <ul className="menu bg-custom-blue rounded-box">
                    {menuData.map((item, index) => (
                        <li key={index} className="relative group">
                            <a className={`text-white`}>
                                <svg xmlns={item.iconLink} className="h-8 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.d} />
                                </svg>
                                <span className="absolute left-1/2 -translate-x-1/2 -top-6 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded py-1 px-2">
                                    {item.title}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </>
        );
    } else {
        return (
            <>
                <ul className="menu bg-transparent w-56 rounded-box">
                    {items.map((item, index) => (
                        index === 0 ? (
                            <li key={index}>
                                <a className="text-cyan-500 font-bold">
                                    <svg xmlns={item.iconLink} className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.d} /></svg>
                                    {item.title}
                                </a>
                            </li>
                        ) : (
                            <li key={index}>
                                <a className="text-white">
                                    <svg xmlns={item.iconLink} className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.d} /></svg>
                                    {item.title}
                                </a>
                            </li>
                        )
                    ))}
                </ul>
            </>
        );
    }
}

export default Menu;
