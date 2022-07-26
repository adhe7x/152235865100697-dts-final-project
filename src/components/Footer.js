import React from "react";

function Footer() {

    return (
        <div className="footer container">
            <div className="footer-section">
                <p className="footer-title">myFoodRecipes</p>
                <p>myFoodRecipes is a place where you found something you don't know about what ingredients you have to prepare. All foods and recipes are yours!</p>
            </div>
            <div className="footer-section">
                <p className="footer-title">Contact Us</p>
                <p>+62812-3456-7890</p>
                <p>cs@myfoodrecipes.com</p>
            </div>
            <div className="footer-section">
                <p className="footer-title">Social</p>
                <a href="https://www.instagram.com" target="{{_blank}}"><p>Instagram</p></a>
                <a href="https://www.facebook.com" target="{{_blank}}"><p>Facebook</p></a>
                <a href="https://www.twitter.com" target="{{_blank}}"><p>Twitter</p></a>
            </div>
            <div>
                &copy;{new Date().getFullYear()}
            </div>
        </div>
    )
}

export default Footer;