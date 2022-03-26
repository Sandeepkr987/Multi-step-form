import React from 'react';
import '../App.css'

function FormDetails({formData, setFormData}) {
  return (
    <div className='form-details'> 
      <div className='form-details1'>
        <div>
          <label htmlFor='Name'>Name :</label>
          <input placeholder='Name' type='text' value={formData.name}onChange={(e) => setFormData({...formData, name: e.target.value})}name='name' />  
        </div>

        <div>
          <label htmlFor='brandtype'>City :</label>
          <input placeholder='City' type='text' value={formData.City}onChange={(e) => setFormData({...formData, City: e.target.value})}name='City' />  
        </div>
        <div>
          <label htmlFor='address'>Address :</label>
          <textarea placeholder='Input your Address'type='text' value={formData.address}onChange={(e) => setFormData({...formData, address: e.target.value})}name='address' />
        </div>
      </div>
      </div>
  )
};

export default FormDetails;