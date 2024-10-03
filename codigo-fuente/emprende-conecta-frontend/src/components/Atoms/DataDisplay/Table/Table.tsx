import React from 'react';


type TableRow = {
    id: number;
    name: string;
    price: string;
    category: string;
  };
  
  type TableProps = {
    data: TableRow[];
  };
  
  const Table: React.FC<TableProps> = ({ data }) => {
    return (
      <div className="overflow-x-auto bg-primary-focus">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <th>{row.id}</th>
                <td>{row.name}</td>
                <td>{row.price}</td>
                <td>{row.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default Table;