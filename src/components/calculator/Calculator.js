import React, { useState } from 'react'
import './Calculator.css'
import BigEval from 'bigeval'

//I ripped the structure and the styles, but the logic is all me

function Calculator() {
    const [operation, setOperation] = useState('')
    const [result, setResult] = useState('')
    
  // turn into switch sometime



    function handleClick(e) {
        const input = e.target.value;

        if (input === 'Del') {

            // access operation
            var newOperation = operation;
            // slice end off
            var newerOp = newOperation.slice(0, -1)
            setOperation(newerOp)
            console.log(newerOp)
        } 
        
        else if (input === 'x') {
          setOperation(operation + '*')

        }
      
        else if (input === '=') {
            // where the magic happens?
            var newResult = operation

            var Obj = new BigEval();
            var result = Obj.exec(newResult)
            
            // console.log(newResult)
            // console.log(result)
            
            // setOperation(operation + ' = ' + result)
            setResult(result)
            
          } else if (input === 'reset' || input === 'C') {
            setOperation('')
            setResult('')
          }
        // new math functions    
          else if (input === 'sq') {
            // const squared = '**'
            setResult(operation * operation)
          }

          else if (input === 'cube') {
            // const squared = '**'
            setResult(operation * operation * operation)
          }

          else if (input === 'ℼ') {
            const pi= 3.14159265359;
            setResult(operation * pi)
          }
          else if (input === 'n!') {
            setOperation(operation + '!')
          }

        else {
            setOperation(operation + input)
        }
    }
// onClick={handleClick()}
  return (
      <div class="calc-container"> {/* i know a br tag is bad since they get evaluated differently by different browsers, but i cant get what i want otherwise*/}
        <h1 className='calc-title'>Calculator-1000</h1><br />>

    
      <div class="calc-header"></div>
      <input type="text" class="result" value={operation}/>      
      <input type="text" class="answer" value={result}/>

      <div class="first-row">
        {/* <input type="button" onClick={handleClick} id='&radic;' name="" value="&radic;" class="global"/> */}
        <input type="button" onClick={handleClick} id='(' name="" value="(" class="global"/>
        <input type="button" onClick={handleClick} id=')' name="" value=")" class="global"/>
        <input type="button" onClick={handleClick} name="" value="%" class="global"/>
        <input type="button" onClick={handleClick} name="" value="sq" class="global grey plus"/>
        <input type="button" onClick={handleClick} name="" value="C" class="global grey plus"/>

      </div>
      <div class="second-row">
        <input type="button" onClick={handleClick} name="" value="7" class="global"/>
        <input type="button" onClick={handleClick} name="" value="8" class="global"/>
        <input type="button" onClick={handleClick} name="" value="9" class="global"/>
        <input type="button" onClick={handleClick} name="" value="cube" class="global"/>
        <input type="button" onClick={handleClick} name="" value="/" class="global"/>
      </div>
      <div class="third-row">
        <input type="button" onClick={handleClick} name="" value="4" class="global"/>
        <input type="button" onClick={handleClick} name="" value="5" class="global"/>
        <input type="button" onClick={handleClick} name="" value="6" class="global"/>
        <input type="button" onClick={handleClick} name="" value="x" class="global"/>
        <input type="button" onClick={handleClick} name="" value="n!" class="global"/>
      </div>
      <div class="fourth-row">
        <input type="button" onClick={handleClick} name="" value="1" class="global"/>
        <input type="button" onClick={handleClick} name="" value="2" class="global"/>
        <input type="button" onClick={handleClick} name="" value="3" class="global"/>
        <input type="button" onClick={handleClick} name="" value="-" class="global"/>
        <input type="button" onClick={handleClick} name="" value="&#8508;" class="global"/>
      </div>
      <div class="conflict">
        <div class="left">
          <input type="button" onClick={handleClick} name="" value="0" class=" big"/>
          <input type="button" onClick={handleClick} name="" value="." class=" small"/>
          <input type="button" onClick={handleClick} name="" value="Del" class=" red small white-text top-margin"/>
          <input type="button" onClick={handleClick} name="" value="=" class=" green white-text big top-margin"/>
        </div>
        {/* <div class="right"> */}
          <input type="button" onClick={handleClick} name="" value="+" class="global grey plus"/>
          {/* <input type="button" onClick={handleClick} name="" value="reset" class="global grey plus"/> */}
        {/* </div> */}

      </div>
      {/* <div class="calc-header warning">Work in progress</div> */}
      </div>
  )
}

export default Calculator;