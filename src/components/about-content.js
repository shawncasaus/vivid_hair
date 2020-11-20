import React from 'react'
import salon from '../images/salonImage.jpg'

function AboutContent() {
    return (
    <div className="aboutContent">
        <h1 className="dancing-script">About Us</h1>
        <p className="dancing-script">
            Vivid Rein Hair is a private luxury suite that offers specialty color services, hair styling, hair extensions 
            and haircuts for women, men and all people in between. Serein (Owner) is a Pravana certified colorist who works 
            with vivids, neutrals, balayage and various other color techniques that inspire beautiful creative looks! 
            Vivid Rein Hair was created out of great love and respect for the LGBTQIA+ community to ensure that every person 
            has a place to feel included and get their hair done in a private and comfortable environment that is free of judgment. 
            We pride ourselves on maintaining a safe, clean inviting atmosphere for all. 
        </p>
        <div className="salonImageContainer">
            <img className="salon-image sepia" src={salon} alt="picture of vivid salon with halloween decorations and a fake ghost in the corner" />
        </div>
    </div>)
}

export default AboutContent