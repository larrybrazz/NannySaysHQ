import React from 'react'
import Faq from './Faq'
import Appointment from './Appointment'

const AppFaq = () => {
  return (
      <div className='md:grid grid-cols-2'>
          <Faq />
          <Appointment/>
    </div>
  )
}

export default AppFaq