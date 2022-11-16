import React, { useEffect, useState } from 'react'
import RecipeCard from '../RecipeCards';
import './Trending.css'

function Trending() {
  const [trending,setTrending] =useState([])
  const getData = async (name)=>{
    const getLocalData= localStorage.getItem('trending')

    if(getLocalData){
      setTrending(JSON.parse(getLocalData))  
      console.log(JSON.parse(getLocalData));
    }
    else{
      const apiData= await fetch('https://api.spoonacular.com/recipes/random?apiKey=6e70407e6c1444b8915475ae67ff1871&number=50&tags=main course')
      const recipeData= await apiData.json();
      localStorage.setItem('trending',JSON.stringify(recipeData.recipes))
      setTrending(recipeData.recipes)
      // console.log(recipeData);
    }
  }

  useEffect(()=>{
    getData()  
    console.log()
  },[])
  // const dataToDisplay=trending.filter(recipe=>{
  //   if(recipe.image) return recipe;
  //   });
  return (
    <>
    <div className='trending' >
      <h1 style={{fontFamily:'Space Grotesk', padding:'10px 0px 0px 40px'}} >Top Trendings</h1>
      <ul className="recipes">
      {trending.map(recipe => <RecipeCard recipe={recipe} key={recipe.id} />
      )}
      </ul>
    </div>
    </>
  )
}

export default Trending