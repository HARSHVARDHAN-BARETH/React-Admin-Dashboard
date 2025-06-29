import { useState } from 'react';

const DataTable = () => {
  const products = [
    { id: 1, name: 'Chais', supplierId: 1, categoryId: 1, unit: '10 boxes x 20 bags', price: 18 },
    { id: 2, name: 'Chang', supplierId: 1, categoryId: 1, unit: '24 - 12 oz bottles', price: 19 },
    { id: 3, name: 'Aniseed Syrup', supplierId: 1, categoryId: 2, unit: '12 - 550 ml bottles', price: 10 },
    { id: 4, name: "Chef Anton's Cajun Seasoning", supplierId: 2, categoryId: 2, unit: '48 - 6 oz jars', price: 22 },
    { id: 5, name: "Chef Anton's Gumbo Mix", supplierId: 2, categoryId: 2, unit: '36 boxes', price: 21.35 },
    { id: 6, name: 'Grandma’s Boysenberry Spread', supplierId: 3, categoryId: 2, unit: '12 - 8 oz jars', price: 25 },
    { id: 7, name: 'Uncle Bob’s Organic Dried Pears', supplierId: 3, categoryId: 7, unit: '12 - 1 lb pkgs', price: 30 },
    { id: 8, name: 'Northwoods Cranberry Sauce', supplierId: 3, categoryId: 2, unit: '12 - 12 oz jars', price: 40 },
    { id: 9, name: 'Mishi Kobe Niku', supplierId: 4, categoryId: 6, unit: '18 - 500 g pkgs', price: 97 },
    { id: 10, name: 'Ikura', supplierId: 4, categoryId: 8, unit: '12 - 200 ml jars', price: 31 }
  ];

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = products.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-700 dark:text-blue-400">
        📦 Data Table
      </h2>
    <div className="overflow-x-auto">
  <table className="w-full max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">

          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="text-left px-6 py-3">Product ID</th>
              <th className="text-left px-6 py-3">Product Name</th>
              <th className="text-left px-6 py-3">Supplier ID</th>
              <th className="text-left px-6 py-3">Category ID</th>
              <th className="text-left px-6 py-3">Unit</th>
              <th className="text-left px-6 py-3">Price ($)</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr
                key={item.id}
                className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}
              >
                <td className="px-6 py-4">{item.id}</td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.supplierId}</td>
                <td className="px-6 py-4">{item.categoryId}</td>
                <td className="px-6 py-4">{item.unit}</td>
                <td className="px-6 py-4">${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4 max-w-5xl mx-auto">

          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            ◀ Previous
          </button>
          <span className="text-gray-700 dark:text-gray-300">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Next ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;