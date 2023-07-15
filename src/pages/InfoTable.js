import React from 'react';
import {useEffect,useState} from 'react';



const InfoTable = () => {
  const residents = [
    { id: 1, name: 'John Doe', age: 75, roomNumber: 'A101' },
    { id: 2, name: 'Jane Smith', age: 82, roomNumber: 'B205' },
    { id: 3, name: 'David Johnson', age: 80, roomNumber: 'C310' },
    { id: 4, name: 'Sarah Williams', age: 78, roomNumber: 'D412' },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredResidents = residents.filter((resident) =>
    resident.roomNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Hello, Tailwind CSS!</h1>
        <p className="text-gray-600 mt-2">Welcome to your React project with Tailwind CSS.</p>

        <input
          type="text"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mt-4"
          placeholder="Search by room number"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Residents Information</h1>
        <table className="bg-blue-500">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Age</th>
              <th className="border border-gray-300 p-2">Room Number</th>
            </tr>
          </thead>
          <tbody>
            {filteredResidents.map((resident) => (
              <tr key={resident.id}>
                <td className="border border-gray-300 p-2">{resident.id}</td>
                <td className="border border-gray-300 p-2">{resident.name}</td>
                <td className="border border-gray-300 p-2">{resident.age}</td>
                <td className="border border-gray-300 p-2">{resident.roomNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    </div>
  );
};




export default InfoTable;


// const App = () => {
//     const residents = [
//       { id: 1, name: 'John Doe', age: 75, roomNumber: 'A101' },
//       { id: 2, name: 'Jane Smith', age: 82, roomNumber: 'B205' },
//       { id: 3, name: 'David Johnson', age: 80, roomNumber: 'C310' },
//       { id: 4, name: 'Sarah Williams', age: 78, roomNumber: 'D412' },
//     ];
  
//     const [searchTerm, setSearchTerm] = useState('');
  
//     const handleSearch = (event) => {
//       setSearchTerm(event.target.value);
//       console.log(event.target.value)
//     };
  
//     const filteredResidents = residents.filter((resident) =>
//       resident.roomNumber.toLowerCase().includes(searchTerm.toLowerCase())
//     );
  
//     return (
//       <div>
//           <div className="container mx-auto py-8">
//           <h1 className="text-3xl font-bold mb-4">Residents Information</h1>
//           <table className="w-full border-collapse bg-blue">
//               <thead>
//               <tr>
//                   <th className="border border-gray-300 p-2">ID</th>
//                   <th className="border border-gray-300 p-2">Name</th>
//                   <th className="border border-gray-300 p-2">Age</th>
//                   <th className="border border-gray-300 p-2">Room Number</th>
//               </tr>
//               </thead>
//               <tbody>
//               {filteredResidents.map((filteredResidents) => (
//                   <tr key={filteredResidents.id}>
//                   <td className="border border-gray-300 p-2">{filteredResidents.id}</td>
//                   <td className="border border-gray-300 p-2">{filteredResidents.name}</td>
//                   <td className="border border-gray-300 p-2">{filteredResidents.age}</td>
//                   <td className="border border-gray-300 p-2">{filteredResidents.roomNumber}</td>
//                   </tr>
//               ))}
//               </tbody>
//           </table>
//           </div>
  
//           <div className="container mx-auto p-4">
//               <h1 className="text-3xl font-bold">Hello, Tailwind CSS!</h1>
//               <p className="text-gray-600 mt-2">Welcome to your React project with Tailwind CSS.</p>
              
//               <input
//                   type="text"
//                   className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
//                   placeholder="Search by room number"
//                   value={searchTerm}
//                   onChange={handleSearch}
//               />
  
//           </div>
//       </div>
//     );
//   };