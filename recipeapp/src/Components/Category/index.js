import React from 'react'
import './category.css';
import { ImArrowRight2 } from 'react-icons/im';
import Catagory from "../../Images/category-notch.png";
import LactoFree from '../../Images/diet-lacto-free-bg-remove.png';
import Vegan from '../../Images/diet-vegan.jpg';
import Keto from '../../Images/diet-keto.jpg';
import Gluteen from '../../Images/diet-gluten-free.jpg';
import American from '../../Images/cusintypeAM-removebg-preview.png'
import Chinese from '../../Images/cusintypeChinese-removebg-preview.png'
import Indian from '../../Images/cusintypeIND-removebg-preview.png'
import Italian from '../../Images/cusintypeITA.png'

function Category() {
    return (
        <div className='category-wrapper'>
            <div className="category-details" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                <p className="category-text">
                    Search From <span style={{ color: '#d03b16' }}>5000+</span> Recipes
                </p>
                <img src={Catagory} alt="" style={{ height: '5px', width: '175px', paddingLeft: '35px', marginBottom: '60px' }} />
            </div>
            <div className="recipe-nav">
                <div className="diet-nav">
                    <h3 className="recipe-nav-text">We care for your diets</h3>
                    <div style={{ display: 'flex' }}>
                        <div className="recipe-nav-item-wrapper recipe-diet">
                            <img src={Vegan} alt="" className="recipe-nav-item" />
                        </div>
                        <div className="recipe-nav-item-wrapper recipe-diet">
                            <img src={Keto} alt="" className="recipe-nav-item" />
                        </div>
                    </div>
                    <br />
                    <div style={{ display: 'flex' }}>
                        <div className="recipe-nav-item-wrapper recipe-diet">
                            <img src={LactoFree} alt="" className="recipe-nav-item" />
                        </div>
                        <div className="recipe-nav-item-wrapper recipe-diet" >
                            <img src={Gluteen} alt="" className="recipe-nav-item" />
                        </div>
                    </div>
                </div>
                <div className="vl"></div>
                <div className="cusin-nav">
                    <h3 className="recipe-nav-text">We understand your tastes</h3>
                    <div style={{ display: 'flex' }}>
                        <div className="recipe-nav-item-wrapper recipe-cusin">
                            <img src={Indian} alt="" className="recipe-nav-item" />
                        </div>
                        <div className="recipe-nav-item-wrapper recipe-cusin">
                            <img src={Chinese} alt="" className="recipe-nav-item" />
                        </div>
                    </div>
                    <br />
                    <div style={{ display: 'flex' }}>
                        <div className="recipe-nav-item-wrapper recipe-cusin">
                            <img src={American} alt="" className="recipe-nav-item" />
                        </div>
                        <div className="recipe-nav-item-wrapper recipe-cusin" >
                            <img src={Italian} alt="" className="recipe-nav-item" />
                        </div>
                    </div>
                </div>
            </div>
            <button className='view-all-recipes'>View All <ImArrowRight2/></button>
        </div>
    )
}
export default Category