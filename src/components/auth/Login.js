import React from 'react'
import './Login.css';

function Login() {

  return (
    <div>
        <h1>Login page</h1>

        <div className='form-wrapper'>

        
<form id='myForm'>
<label>Username</label>
<input type="text" id="name" name="name" placeholder="Name"/>


<label>Password</label>
<input type="password" id="password" name="password" placeholder="password"/>



{/* <br/> */}
<button className='submit-btn' >Click me</button>

</form>
</div>


    </div>
  )
}

export default Login