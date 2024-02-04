import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function NavBar(){
    return (
        <nav className="nav">
        <a href="/" style={{fontSize: "30px", paddingTop: "10px"}} className="site-title">Golden Yrs</a>
            <ul>
                <li>
                    <a style={{fontSize: "20px", paddingTop: "10px"}} href="/signup"> Sign Up</a>
                </li>
                <li>
                    
                    <a style={{fontSize: "20px", paddingTop: "10px"}} href="signin">Log in</a>
                    
                </li>
                <li>
                    
                    <a style={{fontSize: "20px", paddingTop: "10px"}} href="/logout">Log out</a>
                    
                </li>
            </ul>
        </nav> 
    )
}
    

