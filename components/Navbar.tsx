import SignUp from "./register";
import Login from "./login";
import SignOut from "./sign-out";

export default function Navbar() {
    return(
        <div className=" flex items-center justify-between px-10 py-2 border-b-2 border-black">
            <div>
                Todo-Application
            </div>
            <div className=" flex gap-5">
                <SignUp/>
                <Login/>
                <SignOut/>
            </div>
        </div>
    )
}