import { auth } from "@/auth"
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";

export default async function Home() {
  const session = await auth();
  return(
    <div className="">
      {(session!=null) ? (JSON.stringify(session,null,2)) : (
        <div>
          Landing Page
        </div>
      )}
      <div>
        <img src={session?.user?.image!} alt="" />
      </div>
    </div>
  )
}



//  For deleting complete user data : 
/*
  <form action={
            async () => {
              "use server"
              await prisma.user.deleteMany();
            }
          }>
            <Button className=" ml-5 mt-5" type="submit">
              Delete data
            </Button>
          </form>  
*/