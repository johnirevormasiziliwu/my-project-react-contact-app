import React from 'react'

function DeleteButton({id, onDelete}) {
  return (
    <button className='contact-item__delete bg-red-600 p-3 text-white rounded-lg ml-[200px]' onClick={() => onDelete(id)}>Hapus</button>
  )
}

export default DeleteButton