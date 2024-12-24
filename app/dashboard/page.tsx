import { auth } from "@/auth"
import TodosList from "@/components/TodosList";

export default async function Dashboard() {

    const session = await auth();

    return(
        <div className=" pl-5 mt-4">
            <div>
                {
                    session == null ? 
                    "Login to stay in track with your todos" : 
                    <div className=" font-bold text-5xl">
                        Welcome <span className=" text-blue-500">{session?.user?.name},</span>
                    </div>
                }
            </div>
            <div>
                <TodosList/>
            </div>
        </div>
    )
}