import React, { useState } from 'react';
import { Col, Row, Label } from 'reactstrap';

import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";




export default function SchoolDate() {

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <>
    <div className="date-container">
		<div className=" start-1">
	      <DatePicker
	        selected={startDate}
	        onChange={date => setStartDate(date)}
	        placeholderText="Select start date"
	        dateFormat="MM/yyyy"
	        showMonthYearPicker
	        className="form-control start"
	      />
     	</div>
		<div className=" end-1">
	      <DatePicker
	        selected={endDate}
	        onChange={date => setEndDate(date)}
	        minDate={startDate}
	        placeholderText="Select end date"
	        dateFormat="MM/yyyy"
	        showMonthYearPicker
	        className="form-control end"
	      />
     	</div>
 	</div>
    </>
  );
};
