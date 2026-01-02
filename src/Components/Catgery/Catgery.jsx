import React from 'react'
import CategoriBox from '../CategoriBox/CategoriBox'
import "./Catgery.css"
export default function Catgery() {
    return (
        <div className="Categery">
          <div className="categery-container">
            <CategoriBox />
            <CategoriBox />
            <CategoriBox />
            <CategoriBox />
            <CategoriBox />
            <CategoriBox />
          </div>
        </div>
    )
}
