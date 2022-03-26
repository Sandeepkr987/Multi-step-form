import React from 'react'

function Formcontact({formData, setFormData}) {
  return (
    <div className='form-details'>
         <div className='form-details1'>
        <div>
            <label htmlFor='Number'>Number :</label>
            <input placeholder='Mobile-no.' value={formData.number} onChange={(e) => setFormData({...formData, number: e.target.value})} type='tel' name='number' />
        </div>

        <div>
          <label htmlFor='email'>Email-Id :</label>
          <input placeholder='Email-Id' value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} type='email' name='email' />
        </div>

        <div>
          <label htmlFor='Linked-In'>Linked in :</label>
          <input placeholder='LinkedIn Profile'value={formData.LinkedIn} onChange={(e) => setFormData({...formData, LinkedIn: e.target.value})} type='text' name='LinkedIn' />
        </div> 
      </div>
    </div>
  )
}

export default Formcontact