import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CalenderPicker({ selectedDate, onDateChange,fieldName }) {
  return (
    <div className="sm:col-span-2">
      <label htmlFor="dob" className="block text-sm font-medium leading-6 text-gray-900">
        {fieldName}
      </label>
      <div className="mt-2">
        <DatePicker
          id="dob"
          selected={selectedDate}
          onChange={onDateChange}
          className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}

export default CalenderPicker;
