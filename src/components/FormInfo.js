import React from 'react';
import '../App.css'

function FormInfo({formData, setFormData}) {
  return (
    <div className='form-details'>
      <div className='form-details1'>
        <div>
            <label htmlFor='Uname'>User Name :</label>
            <input placeholder='Username' value={formData.Username} onChange={(e) => setFormData({...formData, Username: e.target.value})} type='text' name='Firstname' />
        </div>

        <div>
          <label htmlFor='Password'>Password :</label>
          <input placeholder='Password'value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} type='Password' name='Password' />
        </div>

        <div>
          <label htmlFor='CPassword'>C password :</label>
          <input placeholder='re-enter password'value={formData.Cpassword} onChange={(e) => setFormData({...formData, Cpassword: e.target.value})} type='Password' name='CPassword' />
        </div> 
      </div>
      </div>

  )
};

export default FormInfo