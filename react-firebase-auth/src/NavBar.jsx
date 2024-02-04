export default function NavBar(){
    return (
        <nav className="nav">
            <a href="/" className="site-title">Golden Yrs</a>
            <ul>
                <li>
                    <a href="/SignUp"> Sign Up</a>
                </li>
                <li>
                    
                    <a href="./components/auth/SignIn">Log in</a>
                    
                </li>
                <li>
                    
                    <a href="./components/auth/AuthDetails">Log out</a>
                    
                </li>
            </ul>
        </nav> 
    )
}
    

