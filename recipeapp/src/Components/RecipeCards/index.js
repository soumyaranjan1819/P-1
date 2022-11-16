import React, { useState } from 'react'
import DummyImg from '../../Images/dummy-img2.jpg'
import './RecipeCard.css'

function RecipeCard({recipe}) {
  return (
    <div className='rc-outer-wrapper'>
      <li className='rc-recipe-card' id={recipe.id}> 
        {recipe.image?<img className='rc-card' src={recipe.image} alt={recipe.title}/>:
        <img className='rc-card' src={DummyImg} alt="" />}
        <p className='rc-dish-type'>{recipe.dishTypes[0] ? (recipe.dishTypes[1] ? recipe.dishTypes[1]: recipe.dishTypes[0]) :'appetizer'}</p>
        <p className='rc-title'>{recipe.title.length>30? `${recipe.title.substring(0,30)}...`:recipe.title }</p>
        {/* <p className='rc-title'>{recipe.title}</p> */}
      </li>
      {(recipe.vegetarian)? <span className='rc-outer rc-green-box'><span className='rc-green rc-circle'></span></span> : <span className='rc-outer rc-red-box'><span className='rc-red rc-circle'></span></span>}
    </div>
  )
}
export default RecipeCard
