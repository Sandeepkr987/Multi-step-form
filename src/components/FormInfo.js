import React from 'react';
import '../App.css'

function FormInfo({formData, setFormData, errorMessage}) {
  return (
    <div className='form-details'>
      <div className='form-details1'>
        <div>
            <label htmlFor='Fname'>First Name</label>
            <input placeholder='First name' value={formData.Firstname} onChange={(e) => setFormData({...formData, Firstname: e.target.value})}type='text'name='Firstname' />
        </div>
        <div >
          <h6 style={{color: "red"}}>{errorMessage.Firstname}</h6>
        </div>

        <div>
          <label htmlFor='Lname'>Last Name</label>
          <input placeholder='Last name'value={formData.Lastname} onChange={(e) => setFormData({...formData, Lastname: e.target.value})}type='text'name='Lastname' />
        </div>
        <div>
          <h6 style={{color: "red", fontSize: 'X-small'}}>{errorMessage.Lastname}</h6>
        </div>

        <div>
          <label htmlFor='number'>Phone Numb</label>
          <input placeholder='Input your number'value={formData.number} onChange={(e) => setFormData({...formData, number: e.target.value})} type='tel'name='number' />
        </div>
        <div>
          <h6 style={{color: "red", fontSize: 'X-small'}}>{errorMessage.number}</h6>
        </div>
      </div>
     

      <div className='form-details1'>
          <div>
            <label htmlFor='password'>Password</label>
            <input placeholder='Create Password'type='password'value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}name='password' />
          </div>
          <div>
          <h6 style={{color: "red", fontSize: 'X-small'}}>{errorMessage.password}</h6>
        </div>

          <div>
            <label htmlFor='email'>Email  - id.</label>
            <input placeholder='Input your Email'value={formData.email}onChange={(e) => setFormData({...formData, email: e.target.value})}type='email'name='email' />
          </div>
          <div>
          <h6 style={{color: "red", fontSize: 'X-small'}}>{errorMessage.email}</h6>
        </div>

          <div>
            <label htmlFor='password'>Confirm Pass.</label>
            <input placeholder='Confirm Password'type='password'value={formData.Cpassword}onChange={(e) => setFormData({...formData, Cpassword: e.target.value})}name='Cpassword' />
          </div>
          <div>
          <h6 style={{color: "red", fontSize: 'X-small'}}>{errorMessage.Cpassword}</h6>
        </div>

      </div>

    </div>
  )
};

export default FormInfo