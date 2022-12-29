import React, { useState } from 'react'
import './Calculator.css'


//I ripped the structure and the styles, but the logic is all me

function Calculator() {
    const [operation, setOperation] = useState('')
    const [op1, setOp1] = useState('')
    const [op2, setOp2] = useState('')
    const [operator, setOperator] = useState('')
    

    function handleClick(e) {
        const input = e.target.value;

        if (input === 'Del') {

            // access operation
            var newOperation = operation;
            // slice end off
            var newerOp = newOperation.slice(0, -1)
            setOperation(newerOp)
            console.log(newerOp)
        } else if (input === 'X' || input === "-" || input == '+') {
            // first half of the operation
            // setOperation()
            // const operation1 = operation
            // access operation
            var newOperation = operation;
            // includ whole thing
            var newerOp = newOperation.slice(0, )
            setOperation(newerOp)
            
            setOp1(operation)
            console.log(op1)
            console.log(operation)

            // set operator and first half of state
            var operatorSymbol = input;
            setOp1(op1)
            // console.log(input)
            // console.log(operation)
            // add operator to the input

            setOperation(operation + input)
            setOperator(operatorSymbol)


        } else if (input === '=') {
            
            
            
            console.log(op1)
        
        } else if (input === 'reset') {
            setOperation('')
            setOperator('')

        }

        else {
            var newResult = document.getElementsByClassName('result')
            newResult.value = input
            // console.log(input);
            setOperation(operation + input)
        }

            
            
            
    }
// onClick={handleClick()}
  return (
      <div class="calc-container">
        <h1>Collicott Calculator</h1>

    
      <div class="calc-header">Calculator</div>
      <input type="text" class="result" value={operation}/>
      <div class="first-row">
        <input type="button" onClick={handleClick} id='&radic;' name="" value="&radic;" class="global"/>
        <input type="button" onClick={handleClick} id='(' name="" value="(" class="global"/>
        <input type="button" onClick={handleClick} id=')' name="" value=")" class="global"/>
        <input type="button" onClick={handleClick} name="" value="%" class="global"/>
      </div>
      <div class="second-row">
        <input type="button" onClick={handleClick} name="" value="7" class="global"/>
        <input type="button" onClick={handleClick} name="" value="8" class="global"/>
        <input type="button" onClick={handleClick} name="" value="9" class="global"/>
        <input type="button" onClick={handleClick} name="" value="/" class="global"/>
      </div>
      <div class="third-row">
        <input type="button" onClick={handleClick} name="" value="4" class="global"/>
        <input type="button" onClick={handleClick} name="" value="5" class="global"/>
        <input type="button" onClick={handleClick} name="" value="6" class="global"/>
        <input type="button" onClick={handleClick} name="" value="X" class="global"/>
      </div>
      <div class="fourth-row">
        <input type="button" onClick={handleClick} name="" value="1" class="global"/>
        <input type="button" onClick={handleClick} name="" value="2" class="global"/>
        <input type="button" onClick={handleClick} name="" value="3" class="global"/>
        <input type="button" onClick={handleClick} name="" value="-" class="global"/>
      </div>
      <div class="conflict">
        <div class="left">
          <input type="button" onClick={handleClick} name="" value="0" class=" big"/>
          <input type="button" onClick={handleClick} name="" value="." class=" small"/>
          <input type="button" onClick={handleClick} name="" value="Del" class=" red small white-text top-margin"/>
          <input type="button" onClick={handleClick} name="" value="=" class=" green white-text big top-margin"/>
        </div>
        <div class="right">
          <input type="button" onClick={handleClick} name="" value="+" class="global grey plus"/>
          <input type="button" onClick={handleClick} name="" value="reset" class="global grey plus"/>
        </div>

      </div>
              <div class="calc-header">Work in progress</div>
      </div>
  )
}

export default Calculator