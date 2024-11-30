import React from 'react';
import '../index.css';
import image1 from '../assets/images/croissant.png'; // Replace with actual image paths
import image2 from '../assets/images/chimodho.png';
import image3 from '../assets/images/breakfast.png';
import image4 from '../assets/images/Group 13.png';
import Cards from "../assets/components/Cards";

const CommunityRecipes = () => {
    return (
      <>
        <div className="community-recipes">
            <div className="text-section">
                <h1>The Finest of Baker’s Tik Tok Community Recipes</h1>
                <p>
                    Make the finest croissants worthy of 🗼 Paris from your 🏡 home
                    #Croissant #Zimbabwe #Paris #Baker's_Inn
                </p>
                <p className="handle">@The_Bakers_Inn</p>
            </div>
            <div className="image-grid">
                <img src={image1} alt="Croissant" className="grid-image" />
                <img src={image2} alt="Dish" className="grid-image" />
                <img src={image3} alt="Bread slices" className="grid-image" />
                <img src={image4} alt="Bread production line" className="grid-image" />
            </div>



         
        </div>
        
        <div>

<Cards/>
        </div>

</>
 
      
    );
};

export default CommunityRecipes;
