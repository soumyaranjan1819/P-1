import React from "react";
import "./Recipes.css";
import RecipeHeading from "../../Images/HeadingRecipes.jpg";
// import Trending from "../Trending";
import { NavLink, Outlet} from "react-router-dom";

function Recipes() {
    return (

        <div className="recipe-page">
            <div className="recipe-banner">
                <img className="rb-banner" src={RecipeHeading} alt="" />
                <p className="rb-text">Whats Your Tummy looking For!</p>
            </div>
            <div className="rp-nav-bar">
                <p className="rp-nav-text"><span style={{ color: '#d03b16' }}>5000+</span> Recipes</p>
                <div className="rp-nav-items">
                    <NavLink className='rp-nav-item' to={'trending'}> Trending </NavLink>
                    <NavLink className='rp-nav-item' to={'maincourse'}> Main Course </NavLink>
                    <NavLink className='rp-nav-item' to={'sidedish'}> Side Dish </NavLink>
                    <NavLink className='rp-nav-item' to={'dessert'}> Dessert </NavLink>
                    <NavLink className='rp-nav-item' to={'beverage'}> Beverage</NavLink>
                </div>
            </div>
            <Outlet />
        </div>

    );
}

export default Recipes;
