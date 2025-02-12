import Image from "next/image";
import './Navbar.css';


function Navbar() {
    return (
        <div className="container">
            <div className="header">
                <img src="./Hero.png" width={1347} height={657}/>
                <div className="div1">
                <div className="logo">
                    <img src="./Logo.png"/>
                </div>
                <div>
                    <ul className="list">
                        <li>Home</li>
                        <li>Our Work</li>
                        <li>Services</li>
                        <li>Contact</li>
                        <button className="btn1">Get Started</button>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;