// CustomDatePicker.tsx
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface CustomDatePickerProps {
  control: any; // Replace 'any' with the appropriate type for 'control'
  name: string;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ control, name }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <DatePicker
          selected={selectedDate}
          onChange={(date) => {
            setSelectedDate(date);
            field.onChange(date?.toLocaleDateString('en-AU')); // Pass the selected date to react-hook-form
          }}
          dateFormat="dd/MM/yyyy"
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
        />
      )}
    />
  );
};

export default CustomDatePicker;
