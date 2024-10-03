import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TotalAmountContextProps {
  totalAmount: number;
  setTotalAmount: (amount: number) => void;
}

const TotalAmountContext = createContext<TotalAmountContextProps | undefined>(undefined);

export const TotalAmountProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const value = React.useMemo(() => ({ totalAmount, setTotalAmount }), [totalAmount, setTotalAmount]);

  return (
    <TotalAmountContext.Provider value={value}>
      {children}
    </TotalAmountContext.Provider>
  );
};

export const useTotalAmount = (): TotalAmountContextProps => {
  const context = useContext(TotalAmountContext);
  if (!context) {
    throw new Error('useTotalAmount must be used within a TotalAmountProvider');
  }
  return context;
};
