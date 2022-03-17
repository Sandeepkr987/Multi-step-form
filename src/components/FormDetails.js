import React from 'react';
import '../App.css'

function FormDetails({formData, setFormData, errorMessage}) {
  return (
    <div className='form-details'> 
      <div className='form-details1'>
        <div>
          <label htmlFor='brandname'>Brandname</label>
          <input placeholder='Input your Brand type'type='text' value={formData.brandname}onChange={(e) => setFormData({...formData, brandname: e.target.value})}name='brandname' />  
        </div>
        <div></div>
        <div>
          <label htmlFor='brandtype'>Brandtype</label>
          <input placeholder='Input your Brand type'type='text' value={formData.brandtype}onChange={(e) => setFormData({...formData, brandtype: e.target.value})}name='brandtype' />  
        </div>
        <div></div>
        <div>
          <label htmlFor='address'>Street add</label>
          <input placeholder='Input your Street Address'type='text' value={formData.address}onChange={(e) => setFormData({...formData, address: e.target.value})}name='address' />
        </div>
        <div >
          <h6 style={{color: "red"}}>{errorMessage.address}</h6>
        </div>
      </div>

      <div className='form-details1'>
          <div>
            <label htmlFor='city'>Locate City</label>
            <input placeholder='Input City' type='text' value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})}name="city" />
          </div>
          <div >
          <h6 style={{color: "red"}}>{errorMessage.city}</h6>
        </div>
          <div>
            <label htmlFor='Zip code'>Zip code</label>
            <input placeholder='Enter Zip code'name='zip'value={formData.Zip}onChange={(e) => setFormData({...formData, Zip: e.target.value})} type='tel' />
          </div>
          <div></div>
          <div>
            <label htmlFor='tax id number'>Tax ID No.</label>
            <input placeholder='Input Tax ID Number'name='taxidnumber'value={formData.taxidnumber}onChange={(e) =>  setFormData({...formData, taxidnumber: e.target.value})}type='tel'/>
          </div>
          <div >
          <h6 style={{color: "red"}}>{errorMessage.taxidnumber}</h6>
        </div>
      </div>
    </div>
  )
};

export default FormDetails;