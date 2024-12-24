import { signIn } from "@/auth";
import { Button } from "./ui/button";

export default function Login() {
    return(
        <form action={
            async () => {
                "use server"
                await signIn("google",{
                    redirectTo : "/dashboard"
                })
            }
        }>
            <Button type="submit">
                Login
            </Button>
        </form>
    )
}