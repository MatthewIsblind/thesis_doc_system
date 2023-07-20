import React from 'react';
import {useEffect, useEffent,useState} from 'react';
import { useForm } from 'react-hook-form';
import CalenderPicker from './CalenderPicker.js';

export default function UpdatePatientInfo(){

    const possible_user  ={
        email:"mat@gmail.com",
        password:"123"
    }

    const [dateOfAdmission, setDateOfAdmission] = useState(null);
    const [dateOfBirth, setDateOfBirth] = useState(null);

    const handleAdmissionDateChange = (date) => {
        if (date){
            setDateOfAdmission(date);
            const admissionDate = date.toLocaleDateString('en-AU'); // Format the date as "dd/MM/yyyy"
            console.log('Date of Admission:', admissionDate);
        }
      };
      
      const handleDateOfBirthChange = (date) => {
        if (date){
            setDateOfBirth(date);
            const birthDate = date.toLocaleDateString('en-AU'); // Format the date as "dd/MM/yyyy"
            console.log('Date of Birth:', birthDate);
        }
      };

      const form = useForm();
      const { register, control, handleSubmit ,getValues} = form;
  
      const onSubmit = (data, event) => {
        event.preventDefault(); // Prevent form submission
    
        // Access the selected date values here
        data.dateOfAdmission = dateOfAdmission?.toLocaleDateString('en-AU');
        data.dateOfBirth = dateOfBirth?.toLocaleDateString('en-AU');
    
        // Rest of the form submission logic
        console.log('form submitted', data);
      };

    return(
        <>
            <h1>This is for updating the patient info</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="border-b border-gray-900/10 pb-12 px-5">
                    <h1 className="text-3xl font-semibold leading-7 text-gray-900">Personal Information</h1>
                    
                    <div className="mt-10 grid grid-cols-1 gap-x-2 gap-y-5 lg:grid-cols-6 px-5">
                        <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                        <div className="mt-2">
                            <input type="text" {...register("pFirstName")} id="pFirstName" autoComplete="given-name" className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        </div>

                        <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                        <div className="mt-2">
                            <input type="text" {...register("pLastName")} id="pLastName" autoComplete="family-name" className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        </div>

                        <div className="sm:col-span-2">
                        <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">Gender</label>
                        <div className="mt-2">
                            <select id="gender" {...register("gender")} autoComplete="gender" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                            <option>Male</option>
                            <option>Female</option>
                            </select>
                        </div>
                        </div>
                        <h2 className="sm:col-span-2">
                        <CalenderPicker
                            name="date_of_admission"
                            fieldName="Date of Admission"
                            selectedDate={dateOfAdmission}
                            onDateChange={handleAdmissionDateChange}
                        />
                        </h2>


                        <h2 className="sm:col-span-2">
                            <CalenderPicker
                            id="date_of_birth"
                            fieldName="Date of Birth"
                            selectedDate={dateOfBirth}
                            onDateChange={handleDateOfBirthChange}
                            />
                        </h2>

                    
                        

                    </div>
                </div>


                <div className="border-b border-gray-900/10 pb-12 px-5">
                    
                    <h2 className="text-3xl sm:col-span-4 font-semibold leading-7 text-gray-900">Emergecny contact info</h2>  
                    <div className="mt-10 grid grid-cols-1 gap-x-5 gap-y-8 lg:grid-cols-6 px-5"> 
                        
                        <div className="sm:col-span-3">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Name for next of kin</label>
                        <div className="mt-2">
                            <input id="kin_name" {...register("kin_name")} type="kin_name" autoComplete="kin_name" className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        </div>


                        <div className="sm:col-span-3">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Emergency contact number </label>
                        <div className="mt-2">
                            <input id="Emergency_contact_number" {...register("Emergency_contact_number")} type="Emergency_contact_number" autoComplete="Emergency_contact_number" className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        </div>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );



}

