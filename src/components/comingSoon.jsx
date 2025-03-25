const Logo = "/x-1.png";

function ComingSoon () {
    return (
        <div className="flex flex-col justify-center items-center gap-28" >
            <div className="flex"><h1 className="text-white flex text-4xl">Beeston Line Taxis COMING SOON!</h1></div>
            <div className="flex"> <img src={Logo} alt="logo" className="w-auto h-auto" /></div>
           

        </div>

    )
}

export default ComingSoon;