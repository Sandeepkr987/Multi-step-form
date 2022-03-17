import React, { useState, useEffect } from 'react';
import FormDetails from './FormDetails';
import FormInfo from './FormInfo'; 
import '../App.css'

function Form() {  
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    Firstname: '',
    Lastname: '',
    number: '',
    email: '',
    password: '',
    Cpassword: '',
    brandname: '',
    brandtype: '',
    address: '',
    city: '',
    Zip: '',
    taxidnumber: ''
  })
  const [errorMessage, seterrorMessage] = useState({})
  const [isSubmit, setIsSubmit] = useState(false);

  const FormTitles = ["Your Profile", "Business Information"];
  const stepAhead = ['Step 1', 'Step 2'];

  const PageDisplay = () => {
      if (page === 0) {
          return <FormInfo formData={formData} setFormData={setFormData} errorMessage={errorMessage} />
      }
      else if (page === 1) {
          return <FormDetails formData={formData} setFormData={setFormData} errorMessage={errorMessage} />
      }
  }
  const handleSubmit = (e) => {
   e.preventDefault()
   seterrorMessage(validate(formData))
 };

 const validate = (data) => {
  const errors = {}
  const vemail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const vnumber = /^(\+\d{1,3}[- ]?)?\d{10}$/;
if(!data.Firstname) {
    errors.Firstname ="Firstname is required!"
 }
 if(!data.Lastname) {
  errors.Lastname ="Lastname is required!"
}
if(!data.number) {
  errors.number ="valid number is required!"
}
else if(!vnumber.test(data.number)) {
  errors.number = 'Add a valid number'
}
if(!data.email) {
  errors.email ="email is required!"
}
else if(!vemail.test(data.email)) {
  errors.email = 'Add a valid email format'
}
if(!data.password) {
  errors.password ="password is required!"
}
else if(data.password < 6) {
  errors.password = 'password must be more than 6 characters'
}
if(!data.Cpassword) {
  errors.Cpassword ="confirm password is required!"
}
if(!data.address) {
errors.address ="Address is required!"
}
if(!data.city) {
errors.city ="City is required!"
}
if(!data.taxidnumber) {
errors.taxidnumber ="Taxidnumber is required!"
}
else if(data.taxidnumber < 6) {
  errors.taxidnumber = 'Add a valid TIN'
}
return errors;
 }
 useEffect(() => {
  console.log(errorMessage)
   if(Object.keys(errorMessage).length === 0 && isSubmit) {
     console.log(formData)
   }
 })
 useEffect(() => {
  // storing input
  localStorage.setItem("details", JSON.stringify(formData));
}, [formData]);
  
  return (
    <div className='form'>
        <div className='progressbar' >
            <div style={{width: page === 0 ? '50%' : '100%' }}>
            </div>
        </div>
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