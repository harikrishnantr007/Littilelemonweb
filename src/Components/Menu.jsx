import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
const Menu = () => {
  const [recipes, setRecipes] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };


  
  return (
    <div className='menu-container' id='menu'>
        <div className='menu-header'>
          <h1>This weeks specials!</h1>
          <button >Online Menu</button>
        </div>
        <div className='menu-contant'>
          <div className='card' style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', width: '200px' }}>
            <img src="https://i.ibb.co/317GqZv/Bruchetta.png" alt='title' style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h2>Bruchetta</h2>
            <h3 style={{color:'black'}}>price</h3>
            <p style={{color:'black'}}className={`card-description ${isExpanded ? 'expanded' : ''}`}>description</p>
            <p className="read-more" onClick={toggleReadMore}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </p>
          </div>
          <div className='card' style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', width: '200px' }}>
            <img src="https://i.ibb.co/68c9bLv/greek-salad.jpg" alt='title' style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h2>Greek salad</h2>
            <h3 style={{color:'black'}}>price</h3>
            <p style={{color:'black'}}className={`card-description ${isExpanded ? 'expanded' : ''}`}>description</p>
            <p className="read-more" onClick={toggleReadMore}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </p>
          </div>
          <div className='card' style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', width: '200px' }}>
            <img src="https://i.ibb.co/317GqZv/Bruchetta.png" alt='title' style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h2>Bruchetta</h2>
            <h3 style={{color:'black'}}>price</h3>
            <p style={{color:'black'}}className={`card-description ${isExpanded ? 'expanded' : ''}`}>description</p>
            <p className="read-more" onClick={toggleReadMore}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </p>
          </div>
          <div className='card' style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', width: '200px' }}>
            <img src="https://i.ibb.co/68c9bLv/greek-salad.jpg" alt='title' style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h2>Bruchetta</h2>
            <h3 style={{color:'black'}}>price</h3>
            <p style={{color:'black'}}className={`card-description ${isExpanded ? 'expanded' : ''}`}>description</p>
            <p className="read-more" onClick={toggleReadMore}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </p>
          </div>
          <div className='card' style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', width: '200px' }}>
            <img src="https://i.ibb.co/sm6MfcH/desert.jpg" alt='title' style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h2>title</h2>
            <h3 style={{color:'black'}}>price</h3>
            <p style={{color:'black'}}className={`card-description ${isExpanded ? 'expanded' : ''}`}>description</p>
            <p className="read-more" onClick={toggleReadMore}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </p>
          </div>
          <div className='card' style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', width: '200px' }}>
            <img src="https://i.ibb.co/68c9bLv/greek-salad.jpg" alt='title' style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h2>Greek salad</h2>
            <h3 style={{color:'black'}}>price</h3>
            <p style={{color:'black'}}className={`card-description ${isExpanded ? 'expanded' : ''}`}>description</p>
            <p className="read-more" onClick={toggleReadMore}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </p>
          </div>
          <div className='card' style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', width: '200px' }}>
            <img src="https://i.ibb.co/317GqZv/Bruchetta.png" alt='title' style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h2>Bruchetta</h2>
            <h3 style={{color:'black'}}>price</h3>
            <p style={{color:'black'}}className={`card-description ${isExpanded ? 'expanded' : ''}`}>description</p>
            <p className="read-more" onClick={toggleReadMore}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </p>
          </div>
          <div className='card' style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', width: '200px' }}>
            <img src="https://i.ibb.co/sm6MfcH/desert.jpg" alt='title' style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h2>Greek salad</h2>
            <h3 style={{color:'black'}}>price</h3>
            <p style={{color:'black'}}className={`card-description ${isExpanded ? 'expanded' : ''}`}>description</p>
            <p className="read-more" onClick={toggleReadMore}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </p>
          </div>
        
      </div>
    </div>
  )
}

export default Menu