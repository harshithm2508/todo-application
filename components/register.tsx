import { signIn } from "@/auth";
import { Button } from "./ui/button";

export default function Register() {
    return(
        <form action={
            async () => {
                "use server"
                await signIn("google",{
                    redirectTo : '/dashboard'
                })
            }
        }>
            <Button type="submit">
                Register
            </Button>
        </form>
    )
}