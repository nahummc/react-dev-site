import React from 'react'
import { Formik } from 'formik';
import './ContactForm.css';

function ContactForm() {

    //make a submit function?




  return (
      <div className='contact-form'>
        <h1>Reach out!</h1>
        <h6>I am currently a student, however I would <i>love</i> to hear about employment/internship opportunities, or make new connections!</h6><br /><br />
     <Formik className=""
       initialValues={{ email: '', subject: '', message: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert('An email was sent to Mr. Collicott!');
           console.log(JSON.stringify(values, null, 2))
           setSubmitting(false);

           
         }, 400);
       }}
      //  end of formik label
     > 
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form className="app-form" onSubmit={handleSubmit}>
            <label>
                Email:

           <input className='input'
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             />
             </label>
           {errors.email && touched.email && errors.email}
           <label>
            Subject: 
           <input className='input'
             type="text"
             name="subject"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.subject}
             />
             </label>
           {errors.subject && touched.subject && errors.subject}
           <label>
            Message: 
           <textarea className='input input-msg'
             type="textarea"
             name="message"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.message}
             />
             </label>
           {errors.message && touched.message && errors.message}
           <br />
           <button className='input-btn' type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
     <br/>
     
   </div>
  )
}

export default ContactForm