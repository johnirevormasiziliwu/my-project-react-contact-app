import React from 'react'

function ContactItemBody({name, profession}) {
  return (
    <div className='contact-item__body ml-8 p-8 border-l-e'>
      <h3 className='contact-item__title font-semibold text-lg font-[Inter]'>{name}</h3>
      <p className="contact-item__profession text-slate-500 font-[Inter]">{profession}</p>
    </div>
  )
}

export default ContactItemBody