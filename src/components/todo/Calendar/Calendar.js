import React, { useState, useEffect } from 'react'

function Calendar() {
    //here goes 
    const [month, setMonth] = useState("")
    const [days, setDays] = useState("")
    const [year, setYear] = useState("")


    
    
    
    
    
    useEffect(() => {
        
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        
         
        const yearStr = currentYear + "" 
        let monthStr = ""
        
        console.log(currentMonth + "")
        console.log(currentYear + "")

        switch (today.getMonth()) {
            case 0:
              monthStr = "January";
              break;
            case 1:
              monthStr = "February";
              break;
            case 2:
              monthStr = "March";
              break;
            case 3:
              monthStr = "April";
              break;
            case 4:
              monthStr = "May";
              break;
            case 5:
              monthStr = "June";
              break;
            case 6:
              monthStr = "July";
              break;
            case 7:
              monthStr = "August";
              break;
            case 8:
              monthStr = "September";
              break;
            case 9:
              monthStr = "October";
              break;
            case 10:
              monthStr = "November";
              break;
            case 11:
              monthStr = "December";
              break;
            default:
              monthStr = "Invalid month";
              break;
          }
        
        
        
        // Create a new date object representing the first day of the next month
        const nextMonth = new Date(currentYear, currentMonth + 1, 1);
        
        // Subtract one day from the nextMonth date object to get the last day of the current month
        const lastDayOfMonth = new Date(nextMonth - 1);
        
        // Get the number of days in the current month by extracting the day of the month from the lastDayOfMonth date object
        const numDaysInMonth = lastDayOfMonth.getDate();
        const dayStr = numDaysInMonth + "" 
        console.log(dayStr);
        
        
            setYear(yearStr)
            setMonth(monthStr)
            setDays(dayStr)
    }, []);








  return (
    <div>
    <h1>Hello</h1>
    <div className='calendar'>
        <h4 className='year'>{year}</h4>
        <h4 className='month'>{month}</h4>
        <h4 className='month'>{days}</h4>
    </div>
    
    </div>
  )
}

export default Calendar