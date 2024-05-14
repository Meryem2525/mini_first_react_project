import React from 'react'
import './css/Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='title'>YEMEK TARİFLERİM</div>
      <div className="items">
        <ul>
            <li>Anasayfa</li>
            <li>Hakkında</li>
            <li>Projeler</li>
            <li>İletişim</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
