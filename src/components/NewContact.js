import React from 'react'
import emailjs from '@emailjs/browser';
import './NewContact.css';



function NewContact() {

    function sendEmail(e) {

        // remov this into .env later or before commit, also how to do this on host platform?
        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;

        // access user info
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let msg = document.getElementById('message').value;

        name = name + ' reply to ' + email
        console.log(name)
        console.log(email)

        var contactParams ={
            from_name: name,
            from_email: email,
            message: msg,
        };

        // check that all forms aren't null
        if (name === '' || email === '' || msg === '') {
            // console.log('form is empty');
            alert("please fill out all fields in the form")

            // else if containing email regex?
        } else {
            emailjs.send(serviceID, templateID, contactParams, publicKey);
        }



        // send email
        
        

        e.preventDefault();
        clearForm();
    }

    function clearForm() {

        let form = document.getElementById('myForm')
        form.reset();
    }





  return (
    <>
    <h1>Reach out!</h1>
        <h6>I am currently a student, however I would <i>love</i> to hear about employment/internship opportunities, or make new connections!</h6><br /><br />
    <div className='form-wrapper'>

        
    <form id='myForm'>
    <label>Name</label>
    <input type="text" id="name" name="name" placeholder="Name"/>


    <label>Email</label>
    <input type="text" id="email" name="email" placeholder="Email"/>

    <label>Subject</label>
    <input type="text" id="subject" name="subject" placeholder="Subject"/>

    <label>Message</label>
    <input type="text" id="message" name="message" placeholder="Type a message"/>
    
<br/>
    <button className='submit-btn' onClick={sendEmail}>Click me</button>

    </form>
    </div>
    </>
  )
}

export default NewContact