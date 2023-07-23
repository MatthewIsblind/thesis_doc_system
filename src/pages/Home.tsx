import React from 'react';

interface Person {
  name: string;
  title: string;
  department: string;
  email: string;
  role: string;
  image: string;
}

const Home: React.FC = () => {
  const people: Person[] = [
    {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      department: 'Optimization',
      email: 'lindsay.walton@example.com',
      role: 'Member',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ];

  return (
    <div>
      <h1>this is Homepageasdasdad</h1>
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Title
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
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
                    <img
                      className="h-11 w-11 rounded-full"
                      src={person.image}
                      alt=""
                    />
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
              <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                {person.role}
              </td>
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
  );
};

export default Home;



// import React from 'react';
// import {useEffect, useEffent,useState} from 'react';

// export default function Home(){

//     const people = [
//         {
//           name: 'Lindsay Walton',
//           title: 'Front-end Developer',
//           department: 'Optimization',
//           email: 'lindsay.walton@example.com',
//           role: 'Member',
//           image:
//             'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         },
//         ]
//     return(
//         <div>
//             <h1>this is Homepageasdasdad</h1>
//             <table className="min-w-full divide-y divide-gray-300">
//               <thead>
//                 <tr>
//                   <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
//                     Name
//                   </th>
//                   <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                     Title
//                   </th>
//                   <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                     Status
//                   </th>
//                   <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                     Role
//                   </th>
//                   <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
//                     <span className="sr-only">Edit</span>
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200 bg-white">
//                 {people.map((person) => (
//                   <tr key={person.email}>
//                     <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
//                       <div className="flex items-center">
//                         <div className="h-11 w-11 flex-shrink-0">
//                           <img className="h-11 w-11 rounded-full" src={person.image} alt="" />
//                         </div>
//                         <div className="ml-4">
//                           <div className="font-medium text-gray-900">{person.name}</div>
//                           <div className="mt-1 text-gray-500">{person.email}</div>
//                         </div>
//                       </div>
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
//                       <div className="text-gray-900">{person.title}</div>
//                       <div className="mt-1 text-gray-500">{person.department}</div>
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
//                       <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
//                         Active
//                       </span>
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{person.role}</td>
//                     <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
//                       <a href="#" className="text-indigo-600 hover:text-indigo-900 px-5">
//                         Edit<span className="sr-only">, {person.name}</span>
//                       </a>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//         </div>
//     );



// }