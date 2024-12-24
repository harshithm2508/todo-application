import SignUp from "./register";
import Login from "./login";
import SignOut from "./sign-out";
import { auth } from "@/auth";

export default async function Navbar() {

    const session = await auth();

    return(
        <div className=" flex items-center justify-between px-10 py-2 border-b-2 border-black">
            <div className=" text-blue-500 font-bold text-2xl">
                Todo-Application
            </div>
            {
                (session == null) ? 
                <div className=" flex gap-5">
                    <SignUp/>
                    <Login/>
                </div> : 

                <div className=" flex gap-5 items-center">
                    <img src={session.user?.image!} className=" h-10 w-10 rounded-full" alt="User Log" />
                    <SignOut/>
                </div>
            }
        </div>
    )
}