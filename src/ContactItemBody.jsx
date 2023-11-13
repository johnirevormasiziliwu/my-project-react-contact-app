import React from 'react'

function ContactItemBody({name, profession}) {
  return (
    <div className='contact-item__body'>
      <h3 className='contact-item__title'>{name}</h3>
      <p className="contact-item__profession">{profession}</p>
    </div>
  )
}

export default ContactItemBody