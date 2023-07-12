import React from 'react'
import "./Card.css"

export const Card = () => {
  return (
    <div className='card'>
        <div className='img'>
            <img src="https://i.ebayimg.com/images/g/QmIAAOSwHy5kAjNM/s-l1600.jpg" alt="Portada del juego Resident Evil" />
        </div>
        <div className='info'>
            <h4>Resident Evil</h4>
            <div className='info2'>
                <p>Un equipo de fuerzas especiales investiga extraños sucesos en una mansión infestada de zombis.</p>
                <div className='info3'>
                    <p>PlayStation 1</p>
                    <p>1996</p>
                </div>
            </div>
        </div>
    </div>
  )
}
