import { auth } from "@/auth"
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  return(
    <div>
      {session ? redirect('/dashboard') : "Landing Page"}
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