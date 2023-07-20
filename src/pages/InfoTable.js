import React from 'react';
import {useEffect,useState} from 'react';



const InfoTable = () => {
  const residents = [
    { id: 1, name: 'John Doe', age: 75, roomNumber: 'A101' },
    { id: 2, name: 'Jane Smith', age: 82, roomNumber: 'B205' },
    { id: 3, name: 'David Johnson', age: 80, roomNumber: 'C310' },
    { id: 4, name: 'Sarah Williams', age: 78, roomNumber: 'D412' },
  ];

  const people = [
    {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      department: 'Optimization',
      email: 'lindsay.walton@example.com',
      role: 'Member',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    ]
  
    
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
    <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Title
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Role
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div className="flex items-center">
                        <div className="h-11 w-11 flex-shrink-0">
                          <img className="h-11 w-11 rounded-full" src={person.image} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">{person.name}</div>
                          <div className="mt-1 text-gray-500">{person.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <div className="text-gray-900">{person.title}</div>
                      <div className="mt-1 text-gray-500">{person.department}</div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        Active
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{person.role}</td>
                    <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900 px-5">
                        Edit<span className="sr-only">, {person.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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