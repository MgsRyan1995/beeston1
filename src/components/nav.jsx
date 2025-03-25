import Logo from "../assets/x-1.png";


function Nav() {
    return (
       <nav className="flex flex-wrap justify-between items-center z-10 relative">
        <a href="#"> 
            <img src={Logo} alt="logo" className="w-40 h-40 ml-5" />
        </a>

       </nav>
    )
}

export default Nav;