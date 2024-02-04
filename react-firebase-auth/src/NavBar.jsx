import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function NavBar(){
    return (
        <nav className="nav">
        <a href="/Home" className="site-title">Golden Yrs</a>
            <ul>
                <li>
                    <a href="/signup"> Sign Up</a>
                </li>
                <li>
                    
                    <a href="signin">Log in</a>
                    
                </li>
                <li>
                    
                    <a href="/logout">Log out</a>
                    
                </li>
            </ul>
        </nav> 
    )
}
    

