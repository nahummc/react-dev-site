import React, { useState, useEffect } from 'react'
import './Calendar.css';

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
        
      console.log(days)

        // turn into a function to call and set state for days
        // make the inputs
        let html = ""
        for (let i = 1; i < days / 1 + 1; i++) {
          // document.getElementsByClassName('days').write
            html += `<input type="button" name="" value="${i}" class="day"/>`
            // html += `<button type="button" name="" value="${i}" class="day">${i}</button>`

            // console.log(html)
        }

          // insert inputs int html
        const dayTag = document.getElementById("days")
        dayTag.innerHTML = html

            setYear(yearStr)
            setMonth(monthStr)
            setDays(dayStr)
    }, []);


    

    function handleClick(e) {
      console.log(e.target.value);
    }








  return (
    <div>
    <h1>Hello</h1>
    <div className='calendar'>
      {/* <div className='row'>
      </div> */}

      {/* make buttons that scroll month */}

  <input type="button" onClick={handleClick} id='(' name="" value="(" class="global"/>
      
      <h4 className='year'>{year}</h4>
      <h4 className='month'>{month}</h4>
      <br />
      <div className='days' id='days'>


        </div>
    </div>
    
    </div>
  )
}

export default Calendar