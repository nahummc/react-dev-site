import React, { useState, useEffect } from 'react'
import './Calendar.css';

function Calendar() {
    //here goes 

    const [month, setMonth] = useState("")
    const [days, setDays] = useState("")
    const [year, setYear] = useState("")


    
    function getDaysInMonth(string) {
      let daysNum
      switch (string) {
        case "January":
        case "March":
        case "May":
        case "July":
        case "August":
        case "October":
        case "December":
          daysNum = 31;
          break;
        case "February":
          daysNum = 28;
          break;
        case "April":
        case "June":
        case "September":
        case "November":
          daysNum = 30;
          break;
        default:
          // code to be executed if month is not any of the above cases
      }

     

        
        // Create a new date object representing the first day of the next month
        const nextMonth = new Date(parseInt(year), getMonthNumber(month));
        console.log(nextMonth)
        
        // Subtract one day from the nextMonth date object to get the last day of the current month
        const lastDayOfMonth = new Date(nextMonth - 1);
        // console.log(lastDayOfMonth)
        // Get the number of days in the current month by extracting the day of the month from the lastDayOfMonth date object
        const numDaysInMonth = lastDayOfMonth.getDate();
        const dayStr = numDaysInMonth + "" 
        console.log(dayStr);
        // console.log(days)
        // turn into a function to call and set state for days
        // make the inputs

        
      


      return daysNum


    }

    function printDays(daysNum){
      
      let html = ""
      let i = 1
      while (i<=daysNum) {
        // document.getElementsByClassName('days').write
          html += `<input type="button" name="" value="${i}" class="day"/>`
          // html += `<button type="button" name="" value="${i}" class="day">${i}</button>`
          i++
          // console.log(html)
      }
      const dayTag = document.getElementById("days")
      dayTag.innerHTML = html
    }
    
    
    useEffect(() => {
        
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        
         
        const yearStr = currentYear + "" 
        let monthNum = today.getMonth()
        // console.log(currentMonth + "")
        // console.log(currentYear + "")

        const monthStr = getMonthString(monthNum)
        
        // Create a new date object representing the first day of the next month
        const nextMonth = new Date(currentYear, currentMonth + 1, 1);
        
        // Subtract one day from the nextMonth date object to get the last day of the current month
        const lastDayOfMonth = new Date(nextMonth - 1);
        
        // Get the number of days in the current month by extracting the day of the month from the lastDayOfMonth date object
        const numDaysInMonth = lastDayOfMonth.getDate();
        const dayStr = numDaysInMonth + "" 
        // console.log(dayStr);
        // console.log(days)
        // turn into a function to call and set state for days
        // make the inputs
        printDays(dayStr)

            setYear(yearStr)
            setMonth(monthStr)
            setDays(dayStr)
            // console.log(dayStr)
    }, [days]);

    function getMonthString(int) {
      let monthStr
      switch (int) {
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
    return monthStr
    }


    function getMonthNumber(str) {
      let monthNumber
      switch (str) {
        case "January":
          monthNumber = 0;
          break;
        case "February":
          monthNumber = 1;
          break;
        case "March":
          monthNumber = 2;
          break;
        case "April":
          monthNumber = 3;
          break;
        case "May":
          monthNumber = 4;
          break;
        case "June":
          monthNumber = 5;
          break;
        case "July":
          monthNumber = 6;
          break;
        case "August":
          monthNumber = 7;
          break;
        case "September":
          monthNumber = 8;
          break;
        case "October":
          monthNumber = 9;
          break;
        case "November":
          monthNumber = 10;
          break;
        case "December":
          monthNumber = 11;
          break;
        default:
          console.log(str)
          break;
      }
      return monthNumber
    }


    function handleClick(e) {
      // console.log(e.target.value);
      const input = e.target.value;
      const selectedMonth = document.getElementById('month').innerHTML
      
      let monthNumber =  getMonthNumber(selectedMonth);

      // console.log(selectedMonth)
            
      switch (input){
        case '>':
          monthNumber++;
          break;
          case '<':
            if (selectedMonth === 'January'){
              monthNumber = 11;
              setYear(parseInt(year)- 1 + '')
            } else {
              monthNumber--;
            }
        break;

        default:
        console.log(input)
        break;
    }
    // console.log(monthNumber)

    
    if (monthNumber > 11) {
      monthNumber = 0
      setYear(parseInt(year) + 1 + '')
      console.log(year + ' up a year')
      setMonth("January")
    } else if (monthNumber < 0){
      setMonth("December")
    } else {
      setMonth(getMonthString(monthNumber))

    }

    console.log(getDaysInMonth(month))
// somehow this fixes the issue where the calendar prints the days of the month it was previuosly on
    printDays(getDaysInMonth(getMonthString(monthNumber)))

    // console.log(monthNumber)

    }

    function showCalendar(e){
      console.log("yay")
    }

    

  return (
    <div className='calendar-wrapper'>
    <h3>Work in progress</h3>
    <div className='calendar'>
      {/* <div className='row'>
      </div> */}

      {/* make buttons that scroll month */}

  <input type="button" onClick={handleClick} id='<' name="" value="<" class="goLeft change-year"/>
  <input type="button" onClick={handleClick} id='<' name="" value=">" class="goRight change-year"/>
      
      <div className='title'>
        <h4 className='year cal-btn' id='year' onClick={showCalendar}>{year}</h4>
        <h4 className='month cal-btn' onClick={showCalendar} id='month'>{month}</h4>
      </div>
      <br />
      <div className='days' id='days'>


        </div>
    </div>
    
    </div>
  )
}

export default Calendar