import React from 'react'
import './Title.css'
export default function Title( {Title, Decription}) {
  return (
    <div className="Title">
        <h1>{Title}</h1>
        <p>{Decription}</p>
    </div>
  )
}
