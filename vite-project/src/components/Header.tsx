import { Link } from "react-router-dom"
import { useAppContext } from "../contexts/AppContext"
import SignOutButton from "./SignOutButton"

const Header = () => {

    const {isLoggedin} = useAppContext() 
 
    return (
        <div className="bg-blue-800 p-6 ">
            <div className="container mx-auto flex justify-between">
                <span className="text-3xl text-white font-bold">
                    <Link to={"/"}>MernHolidays.com</Link></span>
                <span className="flex space-x-2 ">
                    {isLoggedin ?(<>
                    <Link to="/my-bookings" className="bg-white text-blue-800 p-2 font-bold">My Bookings</Link>
                    <Link to="/my-hotels" className="bg-white text-blue-800 p-2 font-bold">My Hotels</Link>
                    <SignOutButton></SignOutButton>
                    
                    </>):(<Link to="/sign-in" className="bg-white text-blue-800 p-2 font-bold "> sign in</Link>)
                    }
                    
                </span>
            </div>
        </div>
    )
}

export default Header