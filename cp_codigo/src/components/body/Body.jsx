import React from 'react'
import { Card } from '../cards/Card';
import "./Body.css"

export const Body = () => {

  const juego1 = {
    "id": 1,
    "nombre": "Resident Evil",
    "descripcion": "Un equipo de fuerzas especiales investiga extraños sucesos en una mansión infestada de zombis.",
    "url": "https://i.ebayimg.com/images/g/QmIAAOSwHy5kAjNM/s-l1600.jpg",
    "alt": "Portada del juego Resident Evil",
    "year": 1996,
    "consola": "PlayStation 1"
  };
  
  const juego2 = {
    "id": 2,
    "nombre": "Resident Evil 2",
    "descripcion": "La ciudad de Raccoon City es invadida por criaturas grotescas. Dos personajes buscan escapar y descubrir la verdad detrás del brote.",
    "url": "https://howlongtobeat.com/games/250px-Resident_Evil_2.jpg",
    "alt": "Portada del juego Resident Evil 2",
    "year": 1998,
    "consola": "PlayStation 1"
  };
  
  const juego3 = {
    "id": 3,
    "nombre": "Resident Evil 3: Nemesis",
    "descripcion": "Jill Valentine intenta sobrevivir mientras es perseguida por un arma biológica conocida como Nemesis.",
    "url": "https://psxdatacenter.com/images/hires/U/R/SLUS-00923/SLUS-00923-F-ALL.jpg",
    "alt": "Portada del juego Resident Evil 3: Nemesis",
    "year": 1999,
    "consola": "PlayStation 1"
  };
  

  return (
    <div className='body'>
      <div className='title'>
        <h2>BODY</h2>
      </div>
        <div className='cards'>
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}
