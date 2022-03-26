import React, { useState, useEffect } from 'react';
import FormDetails from './FormDetails';
import FormInfo from './FormInfo'; 
import HomePage from './HomePage';
import Formcontact from './Formcontact';
import '../App.css'
import Header from './Header';

function Form() {  
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    Username: '',
    password: '',
    Cpassword: '',
    name: '',
    address: '',
    City: '',
    number: '',
    email: '',
    LinkedIn: '',
  })

  const FormTitles = ["SignIn-Page", "Registration", 'Thankyou for submission 👍', 'Contact-Us'];
  const stepAhead = ['Step 1', 'Step 2', 'step 3', 'step 4'];

  const PageDisplay = () => {
      if (page === 0) {
          return <FormInfo formData={formData} setFormData={setFormData}  />
      }
      else if (page === 1) {
          return <FormDetails formData={formData} setFormData={setFormData} />
      }
      else if (page === 2) {
        return <HomePage formData={formData} setFormData={setFormData} />
      }
    else if (page === 3) {
      return <Formcontact formData={formData} setFormData={setFormData} />
      }
   }
  const handleSubmit = (e) => {
   e.preventDefault()
 };

  return (
    <div className='form'>
        <form onSubmit={handleSubmit}>
        <div className='form-container'>
        <div className='header'>
            <h4 style={{color: 'gray', margin: '18px 0 0 0'}} >{stepAhead[page]}</h4>
            <h2>{FormTitles[page]}</h2>
        </div>
        <div className='body'>
         {PageDisplay()} 
        </div>
        <div className='footer'>
        <button disabled={page == 0}
         onClick={() => {setPage((currPage) => currPage - 1)}}
        >Prev step</button>
        <button
        onClick={() => {
            if (page === FormTitles.length - 1, page === stepAhead.length - 1) {
              alert('FORM SUBMITTED')
              console.log(formData)
            } else {
                setPage((currPage) => currPage + 1)
            }
            }}>{page === FormTitles.length - 1 ? 'Submit' : 'Next'}</button>
    </div>
    </div>
    </form>
    </div>
  )
}

export default Form;